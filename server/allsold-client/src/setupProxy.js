const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/oauth20/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
