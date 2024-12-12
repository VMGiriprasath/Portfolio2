
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio2/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7654, hash: 'db13d9574972fdcff62ea99e5d09dca15a8b9390db91d4dece5b8db2de547d43', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7981, hash: 'c1ec4db80ad930bbd1bf74d9be388eeb3e8b0f0f174dd1ad098667d286a839b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
