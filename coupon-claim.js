/**
 * coupon-claim.js — 领取探索券码
 *
 * 默认：本地码池 coupons-local.js（window.__CS_LOCAL_COUPONS）
 * 之后改 Google：在页面脚本里设 window.__CS_COUPON_SOURCE = 'google'
 *   并确保 __CS_STATS_ENDPOINT 指向已部署的 Apps Script
 */
(function (global) {
  var DEVICE_KEY = 'bnbHubDeviceId';
  var CODE_KEY = 'bnbHubExploreCouponCode';
  var USED_KEY = 'bnbHubLocalCouponsUsed'; /* 本机已占用的本地码，避免同浏览器连抽重复 */

  function source() {
    var s = String(global.__CS_COUPON_SOURCE || 'local').toLowerCase();
    return s === 'google' ? 'google' : 'local';
  }

  function endpoint() {
    return global.__CS_STATS_ENDPOINT || '';
  }

  function getDeviceId() {
    try {
      var id = localStorage.getItem(DEVICE_KEY);
      if (id) return id;
      id = 'd_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem(DEVICE_KEY, id);
      return id;
    } catch (_) {
      return 'd_tmp_' + Date.now();
    }
  }

  function getCachedCode() {
    try { return localStorage.getItem(CODE_KEY) || ''; } catch (_) { return ''; }
  }

  function setCachedCode(code) {
    try { if (code) localStorage.setItem(CODE_KEY, code); } catch (_) {}
  }

  function clearCachedCode() {
    try { localStorage.removeItem(CODE_KEY); } catch (_) {}
  }

  function getUsedLocal() {
    try {
      var raw = localStorage.getItem(USED_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (_) {
      return [];
    }
  }

  function markUsedLocal(code) {
    try {
      var arr = getUsedLocal();
      if (arr.indexOf(code) === -1) {
        arr.push(code);
        localStorage.setItem(USED_KEY, JSON.stringify(arr.slice(-500)));
      }
    } catch (_) {}
  }

  function claimLocal(opts, cb) {
    var pool = global.__CS_LOCAL_COUPONS;
    if (!pool || !pool.length) {
      cb(new Error('Local coupon pool empty'), null);
      return;
    }
    var used = getUsedLocal();
    var available = [];
    for (var i = 0; i < pool.length; i++) {
      if (used.indexOf(pool[i]) === -1) available.push(pool[i]);
    }
    /* 本机用尽后允许从整池再随机（多访客静态站无法真正全局扣减） */
    var pickFrom = available.length ? available : pool.slice();
    var code = pickFrom[Math.floor(Math.random() * pickFrom.length)];
    markUsedLocal(code);
    setCachedCode(code);
    cb(null, {
      ok: true,
      code: code,
      reused: false,
      source: 'local',
      available: Math.max(0, available.length - 1)
    });
  }

  function claimGoogle(opts, cb) {
    var ep = endpoint();
    if (!ep) {
      cb(new Error('No stats endpoint'), null);
      return;
    }

    var cbName = '_csCouponCb_' + Date.now() + '_' + Math.floor(Math.random() * 1e6);
    var settled = false;
    var timer = setTimeout(function () {
      if (settled) return;
      settled = true;
      try { delete global[cbName]; } catch (_) {}
      cb(new Error('Claim timeout'), null);
    }, 12000);

    global[cbName] = function (res) {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try { delete global[cbName]; } catch (_) {}
      if (script && script.parentNode) script.parentNode.removeChild(script);
      if (!res || !res.ok || !res.code) {
        cb(new Error((res && res.error) || 'Claim failed'), res || null);
        return;
      }
      setCachedCode(res.code);
      res.source = 'google';
      cb(null, res);
    };

    var q = [
      'action=claimCoupon',
      'device=' + encodeURIComponent(getDeviceId()),
      'client=' + encodeURIComponent(String(opts.client || global.__CS_CLIENT || '').slice(0, 64)),
      'page=' + encodeURIComponent(String(opts.page || '').slice(0, 64)),
      'callback=' + encodeURIComponent(cbName)
    ].join('&');

    var script = document.createElement('script');
    script.async = true;
    script.src = ep + (ep.indexOf('?') >= 0 ? '&' : '?') + q;
    script.onerror = function () {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try { delete global[cbName]; } catch (_) {}
      cb(new Error('Network error'), null);
    };
    document.head.appendChild(script);
  }

  /**
   * 领取券码（同设备幂等；已缓存则直接返回）
   * opts: { client, page, force, source }
   */
  function claimCoupon(opts, cb) {
    opts = opts || {};
    if (typeof opts === 'function') { cb = opts; opts = {}; }
    cb = cb || function () {};

    if (!opts.force) {
      var cached = getCachedCode();
      if (cached) {
        cb(null, { code: cached, reused: true, cached: true, source: source() });
        return;
      }
    }

    var mode = String(opts.source || source()).toLowerCase();
    if (mode === 'google') claimGoogle(opts, cb);
    else claimLocal(opts, cb);
  }

  global.__csClaimCoupon = claimCoupon;
  global.__csGetCachedCoupon = getCachedCode;
  global.__csClearCachedCoupon = clearCachedCode;
  global.__csGetDeviceId = getDeviceId;
})(window);
