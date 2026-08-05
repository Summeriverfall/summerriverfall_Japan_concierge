/**
 * coupon-claim.js — 从 Google Sheet 券码库随机领取
 * 依赖页面已设置 window.__CS_STATS_ENDPOINT
 */
(function (global) {
  var DEVICE_KEY = 'bnbHubDeviceId';
  var CODE_KEY = 'bnbHubExploreCouponCode';

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

  /**
   * 领取券码（同设备幂等；已缓存则直接返回）
   * opts: { client, page, force }
   * cb(err, { code, reused, available })
   */
  function claimCoupon(opts, cb) {
    opts = opts || {};
    if (typeof opts === 'function') { cb = opts; opts = {}; }
    cb = cb || function () {};

    if (!opts.force) {
      var cached = getCachedCode();
      if (cached) {
        cb(null, { code: cached, reused: true, cached: true });
        return;
      }
    }

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

  global.__csClaimCoupon = claimCoupon;
  global.__csGetCachedCoupon = getCachedCode;
  global.__csClearCachedCoupon = clearCachedCode;
  global.__csGetDeviceId = getDeviceId;
})(window);
