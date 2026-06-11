/* ARCHITECT'S LOFT — Cookie consent + Google Analytics (GA4)
   GDPR: GA4 viene caricato SOLO dopo consenso esplicito.
   Measurement ID: G-K7ZV74C94T */

(function () {
  'use strict';

  var GA_ID = 'G-K7ZV74C94T';
  var KEY = 'al_cookie_consent'; /* 'granted' | 'denied' */

  function getConsent() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function setConsent(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  /* ── Google Analytics: caricato solo a consenso dato ── */
  var gaLoaded = false;
  function loadGA() {
    if (gaLoaded) return;
    gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  /* ── Stili del banner ── */
  var css = ''
    + '.cookie-banner{position:fixed;left:0;right:0;bottom:0;z-index:9999;'
    + 'background:#faf8f4;border-top:3px solid #c9a96e;box-shadow:0 -8px 40px rgba(44,44,44,.15);'
    + 'padding:1.25rem clamp(1.25rem,4vw,3rem);display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;'
    + 'transform:translateY(110%);transition:transform .45s cubic-bezier(.22,.9,.36,1);}'
    + '.cookie-banner.show{transform:translateY(0);}'
    + '.cookie-banner p{flex:1 1 320px;margin:0;font-family:"DM Sans",sans-serif;font-size:.85rem;'
    + 'color:#2c2c2c;line-height:1.6;}'
    + '.cookie-banner p a{color:#c9a96e;text-decoration:underline;}'
    + '.cookie-actions{display:flex;gap:.75rem;flex-wrap:wrap;}'
    + '.cookie-btn{font-family:"DM Sans",sans-serif;font-size:.72rem;font-weight:500;letter-spacing:.12em;'
    + 'text-transform:uppercase;cursor:pointer;padding:.7rem 1.5rem;min-height:44px;border:1px solid #2c2c2c;'
    + 'transition:background .25s,color .25s;}'
    + '.cookie-accept{background:#2c2c2c;color:#faf8f4;}'
    + '.cookie-accept:hover{background:#c9a96e;border-color:#c9a96e;color:#2c2c2c;}'
    + '.cookie-reject{background:transparent;color:#2c2c2c;}'
    + '.cookie-reject:hover{background:#2c2c2c;color:#faf8f4;}'
    + '@media (max-width:600px){.cookie-banner{padding-bottom:max(1.25rem, env(safe-area-inset-bottom));}'
    + '.cookie-actions{width:100%;}.cookie-btn{flex:1;}}';

  function injectStyles() {
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
  }

  /* ── Banner ── */
  var banner = null;
  function showBanner() {
    if (banner) { banner.classList.add('show'); return; }
    injectStyles();
    banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Gestione cookie');
    banner.innerHTML =
      '<p><span data-i18n="cookie.text">Questo sito usa cookie tecnici e, solo con il tuo consenso, cookie statistici (Google Analytics) per capire come viene visitato. Puoi accettare, rifiutare o cambiare idea quando vuoi.</span> ' +
      '<a href="privacy.html" data-i18n="cookie.more">Maggiori informazioni</a></p>' +
      '<div class="cookie-actions">' +
      '<button class="cookie-btn cookie-reject" id="ckReject" data-i18n="cookie.reject">Rifiuta</button>' +
      '<button class="cookie-btn cookie-accept" id="ckAccept" data-i18n="cookie.accept">Accetta</button>' +
      '</div>';
    document.body.appendChild(banner);

    /* riallinea la lingua corrente se lang.js è già attivo */
    if (typeof applyLang === 'function') {
      applyLang(document.documentElement.getAttribute('lang') || 'it');
    }

    document.getElementById('ckAccept').addEventListener('click', function () {
      setConsent('granted'); hideBanner(); loadGA();
    });
    document.getElementById('ckReject').addEventListener('click', function () {
      setConsent('denied'); hideBanner();
    });

    requestAnimationFrame(function () {
      requestAnimationFrame(function () { banner.classList.add('show'); });
    });
  }
  function hideBanner() {
    if (banner) banner.classList.remove('show');
  }

  /* API pubblica: riapre il banner (link "Gestisci cookie" nel footer) */
  window.alCookies = {
    manage: function () { showBanner(); },
    status: function () { return getConsent(); }
  };

  /* ── Avvio ── */
  function init() {
    var c = getConsent();
    if (c === 'granted') { loadGA(); }
    else if (c === null) { showBanner(); }
    /* 'denied': nessun GA, nessun banner */
    var manageLinks = document.querySelectorAll('[data-cookie-manage]');
    for (var i = 0; i < manageLinks.length; i++) {
      manageLinks[i].addEventListener('click', function (e) {
        e.preventDefault(); showBanner();
      });
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
