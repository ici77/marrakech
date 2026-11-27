(() => {
  const panel = document.querySelector('[data-pwa-install]');
  if (!panel) return;
  const installButton = panel.querySelector('[data-install-guide]');
  const closeButton = panel.querySelector('[data-install-close]');
  const iosMessage = panel.querySelector('[data-ios-install]');
  const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  let promptEvent;
  const hide = () => { panel.hidden = true; };
  if (standalone) return hide();
  window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); promptEvent = event; panel.hidden = false; installButton.hidden = false; if (iosMessage) iosMessage.hidden = true; });
  if (ios && !standalone) { panel.hidden = false; installButton.hidden = true; if (iosMessage) iosMessage.hidden = false; }
  installButton?.addEventListener('click', async () => { if (!promptEvent) return; promptEvent.prompt(); await promptEvent.userChoice; promptEvent = undefined; hide(); });
  closeButton?.addEventListener('click', hide);
  window.addEventListener('appinstalled', hide);
})();
