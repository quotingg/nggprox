const exp = require("express");
const proxy = require("express-http-proxy");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = exp();

const targ = "https://doctoraux.com"
/*const prox = createProxyMiddleware({
    target: targ,
    changeOrigin: true,
    secure: true,
    logLevel: "debug",
    router: function (req) {
        delete req.headers["x-real-ip"];
        delete req.headers["x-forwarded-for"];
        delete req.headers["x-forwarded-proto"];
        req.headers["user-agent"] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Safari/605.1.15";
        return targ;
    }
})*/

app.use("/", proxy("https://doctoraux.com"));
app.listen(5000, () => {
    console.log("run");
})
