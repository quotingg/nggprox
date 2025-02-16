const exp = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = exp();

const targ = "https://doctoraux.com"
const prox = createProxyMiddleware({
    target: targ,
    changeOrigin: true,
    secure: true,
    logLevel: "debug",
    router: function (req) {
        if (req.headers.host !== new URL(targ).host) {
            req.headers['X-Forwarded-For'] = '';
            req.headers['X-Real-IP'] = '';
            req.headers['Via'] = '';
        }
        return targ;
    }
})

app.use("/", prox);
app.listen(5000, () => {
    console.log("run");
})
