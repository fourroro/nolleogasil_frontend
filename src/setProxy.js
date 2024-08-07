const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
   app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
    app.use(
        '/ws',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            ws: true,
            changeOrigin: true,
        })
    );
   app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://43.203.67.108:8080',
            changeOrigin: true,
        })
    );
    app.use(
        '/ws',
        createProxyMiddleware({
            target: 'http://43.203.67.108:8080',
            ws: true,
            changeOrigin: true,
        })
    );

};