const exp = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = exp();

const targ = "https://doctoraux.com"
const prox = createProxyMiddleware({
    target: targ,
    changeOrigin: true,
    router: function (req) {
        req.headers.host = "doctoraux.com";
        req.headers.origin = "https://doctoraux.com";
        return targ;
    },
    onProxyRes: function(pres, req, res) {
        pres.headers.host = "doctoraux.com";
        pres.headers.origin = "https://doctoraux.com";    
    }
})

app.use("/", prox);
app.listen(5000, () => {
    console.log("run");
})
