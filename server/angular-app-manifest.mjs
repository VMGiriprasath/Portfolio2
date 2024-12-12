
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio2/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7658, hash: 'fb1f369c725fa77694899cb68ccfb145aa7726614327a0840a2915ae166cf2be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7985, hash: '5c87c9de6627b3f051cddde8a6558e4b3ee9258a7d02061e43a4aa80043dd3c2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
