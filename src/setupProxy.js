const { createProxyMiddleware } = require("http-proxy-middleware");
const ENDPOINT = process.env.ENDPOINT

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: ENDPOINT,
      changeOrigin: true
    })
  );
};
