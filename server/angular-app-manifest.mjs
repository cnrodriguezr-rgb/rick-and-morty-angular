
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/rick-and-morty-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rick-and-morty-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 460, hash: '2b0e963c7c8f19fdc01848d5d2b9ae0bc9eb3a60fdeb25c9f154ad6f00d27856', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 973, hash: 'fd4d44f78770a00df680a1ed54419ca7e3e2a23ec059e0ee2d045c47b729dd6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20633, hash: '96944c9ef421f5d97869265384cbd99a10853dc0206832c55c09d55233036334', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
