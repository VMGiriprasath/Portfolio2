
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://VMGiriprasath.github.io/Portfolio1/index.html',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7701, hash: '92a730df4e5c4c99ddb4d430b30e58c0056e80d2d21ef3ab851e9d74b90c8592', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8028, hash: '6dce6f2914067795d752520a65dba6b8485fe28f461e596f41083d5bd9151bd7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
