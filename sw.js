/* Kit Paz – Service Worker
   Guarda o app no celular para funcionar sem internet.
   >>> A cada versão nova do app, aumente o número em VERSAO (ex.: 'paz-v10.6'). <<< */
const VERSAO = 'paz-v10.5';
/* Essenciais: sem eles o app não funciona offline (se faltarem, a instalação falha de propósito) */
const ESSENCIAIS = ['./', './index.html'];
/* Opcionais: se algum faltar no endereço publicado, o app continua funcionando offline do mesmo jeito */
const OPCIONAIS = [
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './favicon-48.png'
];

/* Instalação: baixa e guarda os arquivos do app */
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSAO);
    await cache.addAll(ESSENCIAIS);
    await Promise.all(OPCIONAIS.map(u => cache.add(u).catch(() => {})));
    await self.skipWaiting();
  })());
});

/* Ativação: apaga versões antigas guardadas e assume o controle das abas abertas */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(chaves => Promise.all(chaves.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Pedidos: primeiro procura no celular (rápido e offline); se não houver, busca na internet */
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // WhatsApp, Google Maps etc. passam direto

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(guardado => {
      if (guardado) return guardado;
      return fetch(req)
        .then(resp => {
          if (resp && resp.ok) {
            const copia = resp.clone();
            caches.open(VERSAO).then(c => c.put(req, copia));
          }
          return resp;
        })
        .catch(() => (req.mode === 'navigate' ? caches.match('./index.html') : undefined));
    })
  );
});
