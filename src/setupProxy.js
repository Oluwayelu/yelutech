const { createProxyMiddleware } = require("http-proxy-middleware");
const ENDPOINT = process.env.REACT_APP_ENDPOINT

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: ENDPOINT,
      changeOrigin: true
    })
  );
};
