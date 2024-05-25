const express = require('express');
const app = express();

app.use(express.json())
.use(express.urlencoded({extended: true}))


app.post('/', (req, res) => {
    arr.push('yey')
    res.redirect('/')
})

app.listen(3001);