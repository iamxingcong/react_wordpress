

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/wp-json',
    createProxyMiddleware({
      target: 'http://192.168.1.15/wordpress/index.php/wp-json/',
      changeOrigin: true,
    })
  );
};


