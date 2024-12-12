
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio2/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 7660, hash: 'fa910038aaeed9e23c9a767aee3c46fd2b43a2f65222600d83b40f0444051ff7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7987, hash: 'd2c85f80ccbf5862623d60f66c079911401efa8d062fa99936425d38a2ac4d5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XVWDKWT.css': {size: 105, hash: 'RdUNBt6AY6U', text: () => import('./assets-chunks/styles-5XVWDKWT_css.mjs').then(m => m.default)}
  },
};
