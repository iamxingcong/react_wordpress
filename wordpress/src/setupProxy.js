

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/wordpress',
    createProxyMiddleware({
      target: 'http://192.168.1.15/wordpress/index.php/wp-json/wp/v2/',
      changeOrigin: true,
    })
  );
};


