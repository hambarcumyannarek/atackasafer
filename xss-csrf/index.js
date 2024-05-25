const express = require('express');
const app = express();
const crypto = require("crypto")
const cookieParser = require("cookie-parser");

app.use(express.json())
.use(express.urlencoded({extended: true}))
.use(express.static('public'))
.use(cookieParser())
.use(async (req, res, next) => {
    const csrfToken = await crypto.randomBytes(77).toString('hex');
    res.locals.csrfToken = csrfToken;
    res.cookie('csrfToken', csrfToken, { httpOnly: true, secure: true, sameSite: 'Strict' });
    next();
})
.use(async (req, res, next) => {
    const { _csrf } = req.body;
    if (req.method === 'GET') {
        console.log('auto');
        return next();
    } else if (_csrf === req.cookies.csrfToken && _csrf|| req.cookies.csrfToken) {
        console.log({
            html: _csrf,
            cookie: req.cookies.csrfToken
        })
        return next();
    }
})
.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs', {name: "Narek"});
})

app.post('/', (req, res) => {
    console.log("HACKKKK")
    res.render('index.ejs', {name: req.body.name});
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`your web-site domain http://localhost:${port}`);
})