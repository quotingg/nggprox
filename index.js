const express = require("express");
const axios = require("axios");
const path = require("node:path");
const app = express();

// static stuff
app.use("/3", express.static(path.join(__dirname, "3")));
app.use("/apps", express.static(path.join(__dirname, "apps")));
app.use("/play", express.static(path.join(__dirname, "play")));

// parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///apps/uncube/10005
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "apps/uncube/10005", "now.html"));
})

app.get("/oapi/3/np/v1/playPass", (req, res) => {
    axios({
        method: 'get',
        url: "https://now.gg/oapi/3/np/v1/playPass",
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.post("/oapi/3/play/v1/reportEvent", (req, res) => {
    axios({
        method: 'post',
        url: "https://now.gg/oapi/3/play/v1/reportEvent",
        data: req.body
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.get("/oapi/3/play/v1/getQuestInfo", (req, res) => {
    axios({
        method: 'get',
        url: "https://now.gg/oapi/3/play/v1/getQuestInfo",
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.post("/oapi/3/play/v1/getAppPlayFeatures", (req, res) => {
    axios({
        method: 'post',
        url: "https://now.gg/oapi/3/play/v1/getAppPlayFeatures",
        data: req.body,
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.get("/oapi/3/play/v1/getAppPlayFeatures", (req, res) => {
    axios({
        method: 'get',
        url: "https://now.gg/oapi/3/play/v1/getAppPlayFeatures",
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.get("/oapi/3/play/v1/startSession", (req, res) => {
    axios({
        method: 'get',
        url: "https://now.gg/oapi/3/play/v1/startSession",
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.post("/oapi/3/play/v1/createPlayUser", (req, res) => {
    axios({
        method: 'post',
        url: "https://now.gg/oapi/3/play/v1/createPlayUser",
        data: req.body
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.post("/oapi/3/play/v1/setAnswerSdp", (req, res) => {
    axios({
        method: 'post',
        url: "https://now.gg/oapi/3/play/v1/setAnswerSdp",
        data: req.body
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.post("/accounts/auth/v1/check-account", (req, res) => {
    axios({
        method: 'post',
        url: `https://now.gg/accounts/auth/v1/check-account`,
        data: req.body,
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.post("/accounts/auth/v1/signup", (req, res) => {
    axios({
        method: 'post',
        url: `https://now.gg/accounts/auth/v1/signup`,
        data: req.body,
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.post("/accounts/auth/v1/pwd-auth", (req, res) => {
    axios({
        method: 'post',
        url: `https://now.gg/accounts/auth/v1/pwd-auth`,
        data: req.body,
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.post("/accounts/auth/v2/access-token", (req, res) => {
    axios({
        method: 'post',
        url: `https://now.gg/accounts/auth/v2/access-token?implicitGuestLogin=true`,
        data: req.body,
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.get("/accounts/auth/v2/access-token", (req, res) => {
    axios({
        method: 'get',
        url: "https://now.gg/accounts/auth/v2/access-token?implicitGuestLogin=true",
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.get("/oapi/3/rwd/v1/getLeaderboard", (req, res) => {
    axios({
        method: 'get',
        url: "https://now.gg/oapi/3/rwd/v1/getLeaderboard",
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.get("/accounts/auth/v1/logout", (req, res) => {
    axios({
        method: 'get',
        url: "https://now.gg/accounts/auth/v1/logout",
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.get("/ncm/appsc/v1/getAppsList", (req, res) => {
    axios({
        method: 'get',
        url: "https://now.gg/ncm/appsc/v1/getAppsList",
    }).then(function (response) {
        res.send(response.data);
    }).catch(function (reason) {
        res.send(reason.response.data);
    })
})

app.listen(8003, () => {
    console.log("listening fr");
})
