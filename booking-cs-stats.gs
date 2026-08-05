/**
 * booking-cs-stats.gs — Concierge / 多页面打开统计
 *
 * 同一张 Google Sheet、同一个 Web App，可统计多个页面。
 *
 * 酒店客户链接（推荐）：
 *   …/booking-cs.html?client=hotel_xxx
 *   前端会上报 page=cs-hotel_xxx
 *   → Summary / Daily 里按客户代码分别累计打开次数
 *
 * 无 client 的客服通用链：
 *   page=booking-cs
 *
 * 東山 / 御屋房间页：
 *   …/higa.html  → page=higa（client=onya）
 *
 * ── Sheet 结构 ───────────────────────────────────────────
 * Summary       各页面累计 + 今日快览
 * Daily         按「日期 × 页面」归档
 * Hits          每次打开的明细
 * Clicks        各按钮累计 + 今日快览
 * ClicksDaily   按「日期 × 页面 × 按钮」归档
 * Coupons       随机券码库（available / issued）
 *
 * GET   ?action=hit&page=cs-hotel_xxx&title=...
 * GET   ?action=hit&page=booking-cs&title=...
 * GET   ?action=hit&page=higa&title=...
 * GET   ?action=click&page=cs-hotel_xxx&btn=wa-book&label=...
 * GET   ?action=clicks&page=booking-cs
 * GET   ?action=claimCoupon&device=xxx&client=onya&callback=fn
 * GET   ?action=seedCoupons&count=200&prefix=KY
 * GET   ?action=couponStats
 */

var CONFIG = {
  SUMMARY_SHEET: 'Summary',
  DAILY_SHEET: 'Daily',
  HITS_SHEET: 'Hits',
  CLICKS_SHEET: 'Clicks',
  CLICKS_DAILY_SHEET: 'ClicksDaily',
  COUPONS_SHEET: 'Coupons',
  DEFAULT_PAGE: 'booking-cs',
  TZ: 'Asia/Tokyo'
};

var SUMMARY_HEADERS = ['page', 'page_title', 'total', 'today', 'today_date', 'last_hit'];
var DAILY_HEADERS = ['date', 'page', 'page_title', 'count'];
var HITS_HEADERS = ['timestamp', 'page', 'page_title', 'lang', 'referrer', 'user_agent', 'is_bot', 'counted'];
var CLICKS_HEADERS = ['page', 'button_id', 'button_label', 'total', 'today', 'today_date', 'last_click'];
var CLICKS_DAILY_HEADERS = ['date', 'page', 'button_id', 'button_label', 'count'];
var COUPONS_HEADERS = ['code', 'status', 'issued_at', 'device_id', 'client', 'page', 'note'];

var BOT_PATTERNS = [
  /bot\b/i,
  /crawl/i,
  /spider/i,
  /facebookexternalhit/i,
  /whatsapp/i,
  /telegrambot/i,
  /slackbot/i,
  /preview/i,
  /headless/i
];


/* ── 初始化表头 ─────────────────────────────────────────── */

function setupSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  setupSummarySheet_(ss);
  setupDailySheet_(ss);
  setupHitsSheet_(ss);
  setupClicksSheet_(ss);
  setupClicksDailySheet_(ss);
  setupCouponsSheet_(ss);
  return {
    ok: true,
    message: 'Sheets ready: Summary, Daily, Hits, Clicks, ClicksDaily, Coupons'
  };
}

function setupSummarySheet_(ss) {
  var sheet = ss.getSheetByName(CONFIG.SUMMARY_SHEET);
  if (!sheet) sheet = ss.insertSheet(CONFIG.SUMMARY_SHEET);

  sheet.clear();
  sheet.getRange(1, 1, 1, SUMMARY_HEADERS.length).setValues([SUMMARY_HEADERS]);
  styleHeaderRow_(sheet, SUMMARY_HEADERS.length);
  sheet.appendRow([CONFIG.DEFAULT_PAGE, '', 0, 0, '', '']);
  sheet.setColumnWidth(1, 130);
  sheet.setColumnWidth(2, 260);
  sheet.setColumnWidth(3, 70);
  sheet.setColumnWidth(4, 70);
  sheet.setColumnWidth(5, 110);
  sheet.setColumnWidth(6, 170);
  sheet.setFrozenRows(1);
}

function setupDailySheet_(ss) {
  var sheet = ss.getSheetByName(CONFIG.DAILY_SHEET);
  if (!sheet) sheet = ss.insertSheet(CONFIG.DAILY_SHEET);

  sheet.clear();
  sheet.getRange(1, 1, 1, DAILY_HEADERS.length).setValues([DAILY_HEADERS]);
  styleHeaderRow_(sheet, DAILY_HEADERS.length);
  sheet.setColumnWidth(1, 110);
  sheet.setColumnWidth(2, 130);
  sheet.setColumnWidth(3, 260);
  sheet.setColumnWidth(4, 70);
  sheet.setFrozenRows(1);
}

function setupHitsSheet_(ss) {
  var sheet = ss.getSheetByName(CONFIG.HITS_SHEET);
  if (!sheet) sheet = ss.insertSheet(CONFIG.HITS_SHEET);

  sheet.clear();
  sheet.getRange(1, 1, 1, HITS_HEADERS.length).setValues([HITS_HEADERS]);
  styleHeaderRow_(sheet, HITS_HEADERS.length);
  sheet.setColumnWidth(1, 170);
  sheet.setColumnWidth(2, 120);
  sheet.setColumnWidth(3, 200);
  sheet.setColumnWidth(4, 60);
  sheet.setColumnWidth(5, 200);
  sheet.setColumnWidth(6, 240);
  sheet.setColumnWidth(7, 60);
  sheet.setColumnWidth(8, 70);
  sheet.setFrozenRows(1);
}

function setupClicksSheet_(ss) {
  var sheet = ss.getSheetByName(CONFIG.CLICKS_SHEET);
  if (!sheet) sheet = ss.insertSheet(CONFIG.CLICKS_SHEET);

  sheet.clear();
  sheet.getRange(1, 1, 1, CLICKS_HEADERS.length).setValues([CLICKS_HEADERS]);
  styleHeaderRow_(sheet, CLICKS_HEADERS.length);
  sheet.setColumnWidth(1, 120);
  sheet.setColumnWidth(2, 140);
  sheet.setColumnWidth(3, 240);
  sheet.setColumnWidth(4, 70);
  sheet.setColumnWidth(5, 70);
  sheet.setColumnWidth(6, 110);
  sheet.setColumnWidth(7, 170);
  sheet.setFrozenRows(1);
}

function setupClicksDailySheet_(ss) {
  var sheet = ss.getSheetByName(CONFIG.CLICKS_DAILY_SHEET);
  if (!sheet) sheet = ss.insertSheet(CONFIG.CLICKS_DAILY_SHEET);

  sheet.clear();
  sheet.getRange(1, 1, 1, CLICKS_DAILY_HEADERS.length).setValues([CLICKS_DAILY_HEADERS]);
  styleHeaderRow_(sheet, CLICKS_DAILY_HEADERS.length);
  sheet.setColumnWidth(1, 110);
  sheet.setColumnWidth(2, 120);
  sheet.setColumnWidth(3, 140);
  sheet.setColumnWidth(4, 240);
  sheet.setColumnWidth(5, 70);
  sheet.setFrozenRows(1);
}

function setupCouponsSheet_(ss) {
  var sheet = ss.getSheetByName(CONFIG.COUPONS_SHEET);
  if (!sheet) sheet = ss.insertSheet(CONFIG.COUPONS_SHEET);

  var existing = sheet.getLastRow();
  if (existing < 1) {
    sheet.getRange(1, 1, 1, COUPONS_HEADERS.length).setValues([COUPONS_HEADERS]);
  } else {
    var head = sheet.getRange(1, 1, 1, COUPONS_HEADERS.length).getValues()[0];
    if (String(head[0]).toLowerCase() !== 'code') {
      sheet.insertRowBefore(1);
      sheet.getRange(1, 1, 1, COUPONS_HEADERS.length).setValues([COUPONS_HEADERS]);
    }
  }
  styleHeaderRow_(sheet, COUPONS_HEADERS.length);
  sheet.setColumnWidth(1, 140);
  sheet.setColumnWidth(2, 90);
  sheet.setColumnWidth(3, 170);
  sheet.setColumnWidth(4, 200);
  sheet.setColumnWidth(5, 90);
  sheet.setColumnWidth(6, 120);
  sheet.setColumnWidth(7, 160);
  sheet.setFrozenRows(1);
}

function styleHeaderRow_(sheet, colCount) {
  sheet.getRange(1, 1, 1, colCount)
    .setFontWeight('bold')
    .setBackground('#E2EFED')
    .setFontColor('#134E4A');
}

function ensureSheets_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss.getSheetByName(CONFIG.SUMMARY_SHEET)) setupSummarySheet_(ss);
  if (!ss.getSheetByName(CONFIG.DAILY_SHEET)) setupDailySheet_(ss);
  if (!ss.getSheetByName(CONFIG.HITS_SHEET)) setupHitsSheet_(ss);
  if (!ss.getSheetByName(CONFIG.CLICKS_SHEET)) setupClicksSheet_(ss);
  if (!ss.getSheetByName(CONFIG.CLICKS_DAILY_SHEET)) setupClicksDailySheet_(ss);
  if (!ss.getSheetByName(CONFIG.COUPONS_SHEET)) setupCouponsSheet_(ss);
}


/* ── Web App 入口 ─────────────────────────────────────── */

function doGet(e) {
  try {
    ensureSheets_();
    var params = (e && e.parameter) ? e.parameter : {};
    var action = String(params.action || 'stats').toLowerCase();

    if (action === 'setup') return json_(setupSheets());

    if (action === 'stats') {
      return json_(getStats_(normalizePage_(params.page)));
    }

    /* GET 测试 / 备用上报：?action=hit&page=booking-cs&title=... */
    if (action === 'hit') {
      return json_(recordHit_({
        page: normalizePage_(params.page),
        title: normalizeTitle_(params.title),
        lang: String(params.lang || '').slice(0, 16),
        ref: String(params.ref || params.referrer || '').slice(0, 500),
        ua: String(params.ua || '').slice(0, 500)
      }));
    }

    if (action === 'click') {
      return json_(recordClick_({
        page: normalizePage_(params.page),
        btn: normalizeBtn_(params.btn),
        label: normalizeTitle_(params.label),
        lang: String(params.lang || '').slice(0, 16)
      }));
    }

    if (action === 'clicks') {
      return json_({
        ok: true,
        page: normalizePage_(params.page) || '',
        rows: getClickRows_(normalizePage_(params.page))
      });
    }

    if (action === 'daily') {
      var days = Math.min(parseInt(params.days, 10) || 30, 366);
      return json_({
        ok: true,
        page: normalizePage_(params.page) || '',
        rows: getDailyRows_(normalizePage_(params.page), days)
      });
    }

    if (action === 'recent') {
      var limit = Math.min(parseInt(params.limit, 10) || 20, 100);
      return respond_(params, {
        ok: true,
        hits: getRecentHits_(normalizePage_(params.page), limit)
      });
    }

    /* 券码库：随机领取未使用码（同 device 幂等） */
    if (action === 'claimcoupon' || action === 'claim_coupon') {
      return respond_(params, claimCoupon_({
        device: String(params.device || params.device_id || '').slice(0, 80),
        client: String(params.client || '').slice(0, 64),
        page: normalizePage_(params.page)
      }));
    }

    /* 券码库存查询 */
    if (action === 'couponstats' || action === 'coupon_stats') {
      return respond_(params, getCouponStats_());
    }

    /* 灌入随机券码：?action=seedCoupons&count=200&prefix=KY */
    if (action === 'seedcoupons' || action === 'seed_coupons') {
      var count = Math.min(parseInt(params.count, 10) || 100, 2000);
      var prefix = String(params.prefix || 'KY').replace(/[^A-Z0-9]/gi, '').toUpperCase().slice(0, 8) || 'KY';
      return respond_(params, seedCoupons_(count, prefix));
    }

    return respond_(params, { ok: false, error: 'Unknown action: ' + action });
  } catch (err) {
    return respond_((e && e.parameter) || {}, { ok: false, error: String(err.message || err) });
  }
}

function doPost(e) {
  try {
    ensureSheets_();

    var body = {};
    if (e && e.postData && e.postData.contents) {
      body = JSON.parse(e.postData.contents);
    }

    if (String(body.action || 'hit').toLowerCase() !== 'hit') {
      return json_({ ok: false, error: 'Unknown action' });
    }

    return json_(recordHit_({
      page: normalizePage_(body.page),
      title: normalizeTitle_(body.title),
      lang: String(body.lang || '').slice(0, 16),
      ref: String(body.ref || body.referrer || '').slice(0, 500),
      ua: String(body.ua || body.user_agent || '').slice(0, 500)
    }));
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}


/* ── 计数逻辑 ─────────────────────────────────────────── */

function recordHit_(payload) {
  var page = payload.page;
  var title = payload.title;
  var ua = payload.ua || '';
  var bot = isBot_(ua);
  var now = new Date();
  var todayStr = formatDate_(now);

  appendHitRow_(now, page, title, payload.lang, payload.ref, ua, bot, !bot);

  var stats = { ok: true, page: page, page_title: title, total: 0, today: 0, counted: false };

  if (!bot) {
    var updated = incrementSummary_(page, title, now, todayStr);
    incrementDaily_(page, title, todayStr);
    stats.total = updated.total;
    stats.today = updated.today;
    stats.last_hit = updated.last_hit;
    stats.counted = true;
  } else {
    var current = getStats_(page);
    stats.total = current.total;
    stats.today = current.today;
    stats.last_hit = current.last_hit;
    stats.skipped = 'bot';
  }

  return stats;
}

function recordClick_(payload) {
  var page = payload.page;
  var btn = payload.btn;
  var label = payload.label;
  if (!btn) return { ok: false, error: 'Missing btn' };

  var now = new Date();
  var todayStr = formatDate_(now);
  var updated = incrementClicksSummary_(page, btn, label, now, todayStr);
  incrementClicksDaily_(page, btn, label, todayStr);

  return {
    ok: true,
    type: 'click',
    page: page,
    button_id: btn,
    button_label: label,
    total: updated.total,
    today: updated.today,
    last_click: updated.last_click
  };
}

function incrementClicksSummary_(page, btn, label, now, todayStr) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.CLICKS_SHEET);
  var data = sheet.getDataRange().getValues();
  var rowIndex = -1;

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === page && String(data[i][1]) === btn) {
      rowIndex = i + 1;
      break;
    }
  }

  var total = 1;
  var today = 1;
  var lastClick = formatDateTime_(now);

  if (rowIndex === -1) {
    sheet.appendRow([page, btn, label, total, today, todayStr, lastClick]);
  } else {
    total = Number(data[rowIndex - 1][3] || 0) + 1;
    var prevTodayDate = String(data[rowIndex - 1][5] || '');
    today = (prevTodayDate === todayStr)
      ? Number(data[rowIndex - 1][4] || 0) + 1
      : 1;

    sheet.getRange(rowIndex, 3).setValue(label || data[rowIndex - 1][2] || '');
    sheet.getRange(rowIndex, 4).setValue(total);
    sheet.getRange(rowIndex, 5).setValue(today);
    sheet.getRange(rowIndex, 6).setValue(todayStr);
    sheet.getRange(rowIndex, 7).setValue(lastClick);
  }

  return { total: total, today: today, last_click: lastClick };
}

function incrementClicksDaily_(page, btn, label, todayStr) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.CLICKS_DAILY_SHEET);
  var data = sheet.getDataRange().getValues();
  var rowIndex = -1;

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === todayStr &&
        String(data[i][1]) === page &&
        String(data[i][2]) === btn) {
      rowIndex = i + 1;
      break;
    }
  }

  if (rowIndex === -1) {
    sheet.appendRow([todayStr, page, btn, label, 1]);
  } else {
    var count = Number(data[rowIndex - 1][4] || 0) + 1;
    sheet.getRange(rowIndex, 4).setValue(label || data[rowIndex - 1][3] || '');
    sheet.getRange(rowIndex, 5).setValue(count);
  }
}

function getClickRows_(page) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.CLICKS_SHEET);
  var data = sheet.getDataRange().getValues();
  var rows = [];

  for (var i = 1; i < data.length; i++) {
    if (page && String(data[i][0]) !== page) continue;
    rows.push({
      page: String(data[i][0] || ''),
      button_id: String(data[i][1] || ''),
      button_label: String(data[i][2] || ''),
      total: Number(data[i][3] || 0),
      today: Number(data[i][4] || 0),
      today_date: String(data[i][5] || ''),
      last_click: String(data[i][6] || '')
    });
  }

  rows.sort(function (a, b) {
    return b.total - a.total;
  });

  return rows;
}

function incrementSummary_(page, title, now, todayStr) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SUMMARY_SHEET);
  var data = sheet.getDataRange().getValues();
  var rowIndex = -1;

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === page) {
      rowIndex = i + 1;
      break;
    }
  }

  var total = 1;
  var today = 1;
  var lastHit = formatDateTime_(now);

  if (rowIndex === -1) {
    sheet.appendRow([page, title, total, today, todayStr, lastHit]);
  } else {
    total = Number(data[rowIndex - 1][2] || 0) + 1;
    var prevTodayDate = String(data[rowIndex - 1][4] || '');
    today = (prevTodayDate === todayStr)
      ? Number(data[rowIndex - 1][3] || 0) + 1
      : 1;

    sheet.getRange(rowIndex, 2).setValue(title || data[rowIndex - 1][1] || '');
    sheet.getRange(rowIndex, 3).setValue(total);
    sheet.getRange(rowIndex, 4).setValue(today);
    sheet.getRange(rowIndex, 5).setValue(todayStr);
    sheet.getRange(rowIndex, 6).setValue(lastHit);
  }

  return { total: total, today: today, last_hit: lastHit };
}

function incrementDaily_(page, title, todayStr) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.DAILY_SHEET);
  var data = sheet.getDataRange().getValues();
  var rowIndex = -1;

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === todayStr && String(data[i][1]) === page) {
      rowIndex = i + 1;
      break;
    }
  }

  if (rowIndex === -1) {
    sheet.appendRow([todayStr, page, title, 1]);
  } else {
    var count = Number(data[rowIndex - 1][3] || 0) + 1;
    sheet.getRange(rowIndex, 3).setValue(title || data[rowIndex - 1][2] || '');
    sheet.getRange(rowIndex, 4).setValue(count);
  }
}

function getStats_(page) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SUMMARY_SHEET);
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === page) {
      return {
        ok: true,
        page: page,
        page_title: String(data[i][1] || ''),
        total: Number(data[i][2] || 0),
        today: Number(data[i][3] || 0),
        today_date: String(data[i][4] || ''),
        last_hit: String(data[i][5] || '')
      };
    }
  }

  return {
    ok: true,
    page: page,
    page_title: '',
    total: 0,
    today: 0,
    today_date: '',
    last_hit: ''
  };
}

function getDailyRows_(page, days) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.DAILY_SHEET);
  var data = sheet.getDataRange().getValues();
  var cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  var cutoffStr = formatDate_(cutoff);
  var rows = [];

  for (var i = 1; i < data.length; i++) {
    var dateStr = String(data[i][0] || '');
    var rowPage = String(data[i][1] || '');
    if (dateStr < cutoffStr) continue;
    if (page && rowPage !== page) continue;
    rows.push({
      date: dateStr,
      page: rowPage,
      page_title: String(data[i][2] || ''),
      count: Number(data[i][3] || 0)
    });
  }

  rows.sort(function (a, b) {
    if (a.date === b.date) return a.page.localeCompare(b.page);
    return a.date < b.date ? 1 : -1;
  });

  return rows;
}

function appendHitRow_(now, page, title, lang, ref, ua, bot, counted) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.HITS_SHEET);
  sheet.appendRow([
    formatDateTime_(now),
    page,
    title,
    lang,
    ref,
    ua,
    bot ? 'yes' : 'no',
    counted ? 'yes' : 'no'
  ]);
}

function getRecentHits_(page, limit) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.HITS_SHEET);
  var data = sheet.getDataRange().getValues();
  var hits = [];

  for (var i = data.length - 1; i >= 1 && hits.length < limit; i--) {
    if (page && String(data[i][1]) !== page) continue;
    hits.push({
      timestamp: data[i][0],
      page: data[i][1],
      page_title: data[i][2],
      lang: data[i][3],
      referrer: data[i][4],
      user_agent: data[i][5],
      is_bot: data[i][6],
      counted: data[i][7]
    });
  }

  return hits;
}


/* ── helpers ──────────────────────────────────────────── */

function normalizePage_(page) {
  /* 允许 cs-hotel_xxx 这种客户维度 page */
  var p = String(page || CONFIG.DEFAULT_PAGE).trim().toLowerCase();
  if (!p) p = CONFIG.DEFAULT_PAGE;
  return p.replace(/[^a-z0-9_-]/g, '').slice(0, 64) || CONFIG.DEFAULT_PAGE;
}

function normalizeBtn_(btn) {
  var b = String(btn || '').trim().toLowerCase();
  return b.replace(/[^a-z0-9_-]/g, '').slice(0, 64);
}

function normalizeTitle_(title) {
  return String(title || '').trim().slice(0, 200);
}

function isBot_(ua) {
  if (!ua) return false;
  for (var i = 0; i < BOT_PATTERNS.length; i++) {
    if (BOT_PATTERNS[i].test(ua)) return true;
  }
  return false;
}

function formatDate_(d) {
  return Utilities.formatDate(d, CONFIG.TZ, 'yyyy-MM-dd');
}

function formatDateTime_(d) {
  return Utilities.formatDate(d, CONFIG.TZ, 'yyyy-MM-dd HH:mm:ss');
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** 支持 JSONP：?callback=fnName —— 供前端跨域领取券码 */
function respond_(params, obj) {
  var cb = String((params && params.callback) || '').replace(/[^\w.$]/g, '');
  if (cb) {
    return ContentService
      .createTextOutput(cb + '(' + JSON.stringify(obj) + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return json_(obj);
}


/* ── 券码库 Coupons ─────────────────────────────────────
 * 表头：code | status | issued_at | device_id | client | page | note
 * status: available | issued
 */

function claimCoupon_(payload) {
  ensureSheets_();
  var device = String(payload.device || '').trim();
  if (!device) {
    return { ok: false, error: 'Missing device' };
  }

  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.COUPONS_SHEET);
    if (!sheet) {
      setupCouponsSheet_(SpreadsheetApp.getActiveSpreadsheet());
      sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.COUPONS_SHEET);
    }

    var data = sheet.getDataRange().getValues();
    if (data.length < 2) {
      return { ok: false, error: 'No coupons in pool. Run seedCoupons first.', available: 0 };
    }

    /* 同 device 已领过 → 幂等返回原码 */
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][3] || '') === device && String(data[i][1] || '').toLowerCase() === 'issued') {
        return {
          ok: true,
          code: String(data[i][0] || ''),
          reused: true,
          status: 'issued'
        };
      }
    }

    /* 收集可用行，随机抽一个 */
    var availableIdx = [];
    for (var j = 1; j < data.length; j++) {
      if (String(data[j][1] || '').toLowerCase() === 'available') {
        availableIdx.push(j);
      }
    }
    if (!availableIdx.length) {
      return { ok: false, error: 'Coupon pool empty', available: 0 };
    }

    var pick = availableIdx[Math.floor(Math.random() * availableIdx.length)];
    var row = pick + 1; /* 1-based */
    var code = String(data[pick][0] || '');
    var nowStr = formatDateTime_(new Date());
    var client = String(payload.client || '').slice(0, 64);
    var page = String(payload.page || '').slice(0, 64);

    sheet.getRange(row, 2).setValue('issued');
    sheet.getRange(row, 3).setValue(nowStr);
    sheet.getRange(row, 4).setValue(device);
    sheet.getRange(row, 5).setValue(client);
    sheet.getRange(row, 6).setValue(page);

    return {
      ok: true,
      code: code,
      reused: false,
      status: 'issued',
      available: availableIdx.length - 1
    };
  } finally {
    lock.releaseLock();
  }
}

function getCouponStats_() {
  ensureSheets_();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.COUPONS_SHEET);
  if (!sheet) return { ok: true, total: 0, available: 0, issued: 0 };
  var data = sheet.getDataRange().getValues();
  var available = 0;
  var issued = 0;
  for (var i = 1; i < data.length; i++) {
    var st = String(data[i][1] || '').toLowerCase();
    if (st === 'available') available++;
    else if (st === 'issued') issued++;
  }
  return {
    ok: true,
    total: Math.max(0, data.length - 1),
    available: available,
    issued: issued
  };
}

/**
 * 生成随机券码写入 Coupons 表（编辑器运行 seedCoupons 或 Web：?action=seedCoupons&count=200）
 * 码格式：PREFIX-XXXXXX（大写字母数字，避开易混字符）
 */
function seedCoupons_(count, prefix) {
  ensureSheets_();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.COUPONS_SHEET);
  var existing = {};
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    existing[String(data[i][0] || '').toUpperCase()] = true;
  }

  var rows = [];
  var guard = 0;
  while (rows.length < count && guard < count * 20) {
    guard++;
    var code = prefix + '-' + randomCouponToken_(6);
    if (existing[code]) continue;
    existing[code] = true;
    rows.push([code, 'available', '', '', '', '', 'seed']);
  }

  if (rows.length) {
    var start = sheet.getLastRow() + 1;
    sheet.getRange(start, 1, start + rows.length - 1, COUPONS_HEADERS.length).setValues(rows);
  }

  return {
    ok: true,
    added: rows.length,
    prefix: prefix,
    stats: getCouponStats_()
  };
}

function randomCouponToken_(len) {
  var alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; /* 去掉 0O1I */
  var out = '';
  for (var i = 0; i < len; i++) {
    out += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return out;
}

/** 在 Apps Script 编辑器运行：灌入 200 个随机码 */
function seedCoupons() {
  var result = seedCoupons_(200, 'KY');
  Logger.log(JSON.stringify(result));
  return result;
}

/** 在 Apps Script 编辑器里选中此函数 → 运行，验证 Sheet 能否写入 */
function testHit() {
  var result = recordHit_({
    page: 'booking-cs',
    title: 'test from editor',
    lang: 'zh-CN',
    ref: 'manual-test',
    ua: 'AppsScriptEditor'
  });
  Logger.log(JSON.stringify(result));
  return result;
}

function testClick() {
  var result = recordClick_({
    page: 'booking-cs',
    btn: 'book-s1',
    label: 'Starry Flow Spa',
    lang: 'en'
  });
  Logger.log(JSON.stringify(result));
  return result;
}
