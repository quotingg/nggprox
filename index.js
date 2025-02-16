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
        console.log(req.headers)
        return targ;
    }
})

app.use("/", prox);
app.listen(5000, () => {
    console.log("run");
})
