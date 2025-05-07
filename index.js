const { createProxyMiddleware } = require("http-proxy-middleware");
const Cheerio = require("cheerio");
const Express = require("express");
const Axios = require("axios");
const Https = require("node:https");
const App = Express();

// Configuration
const FrameBufferSizeWidth = 936;//818;
const MaxStreamBitrateKbps = 80000;
const MaxFps = 110;
const Port = 5000;

/** @type {import('http-proxy-middleware/dist/types').RequestHandler<express.Request, express.Response>} */
const Proxy = createProxyMiddleware({
    changeOrigin: true,
    //timeout: 5000,
    target: "https://now.gg",
    agent: new Https.Agent({ keepAlive: true }),
})

// Pages Routing
App.get("/", (_Request, Response) => Axios.get("https://doctoraux.com").then((res) => {
    const $ = Cheerio.load(res.data);
    const Settings = JSON.parse($("#__NEXT_DATA__").text());

    // Force third party flow (must-have)
    Settings.props.pageProps.appInfo.authUseThirdPartyFlow = true;
    Settings.props.pageProps.authUseThirdPartyFlow = true;

    // Remove extra features
    const uiConfig = Settings.props.pageProps.appInfo.playFeFeatures.uiConfig;
    uiConfig.footer.enabled = false;
    uiConfig.mobileMenu.enabled = false;
    uiConfig.enableWelcomeToast = false;
    uiConfig.enableSupportWidget = false;
    uiConfig.enableHeader = false;
    uiConfig.enableSearch = false;

    // Remove ads
    const ads = Settings.props.pageProps.appInfo.playFeFeatures.ads;
    let desktop = ads.desktop;
    let mobile = ads.mobile;

    desktop.enablePrerollAds = false;
    desktop.enableMidrollAds = false;
    desktop.enableDisplayAds = false;
    desktop.enableRewardedAds = false;

    mobile.enablePrerollAds = false;
    mobile.enableMidrollAds = false;
    mobile.enableDisplayAds = false;
    mobile.enableRewardedAds = false;

    $("#__NEXT_DATA__").text(JSON.stringify(Settings));
    $("body").append(`<script>window.sessionStorage.setItem("maxFps", ${MaxFps}); window.sessionStorage.setItem("maxStreamBitrateKbps", ${MaxStreamBitrateKbps}); window.sessionStorage.setItem("framebufferSizeWidth", ${FrameBufferSizeWidth})</script>`)

    Response.setHeader("ngrok-skip-browser-warning", true);
    Response.send($.html());
}).catch((err) => {
    Response.status(500).send(err);
}))

// Redirect management
App.use(Express.urlencoded({ extended: true }))
App.use("/", Proxy)

// Listen on port
App.listen(Port, () => {
    console.warn(`Listening on ${Port}.`);
})
