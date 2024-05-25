const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())
.use(express.urlencoded({extended: true}))
.use(cors({
    origin: 'http://localhost:3001/'
}));

const arr = [];

app.get('/', (req, res) => {
    res.send(arr);
})

app.post('/', (req, res) => {
    arr.push('yey')
    res.redirect('/')
})

app.listen(3001);