const express = require('express');
const app = express();

app.use(express.json())
.use(express.urlencoded({extended: true}))
.use(express.static('public'))
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