const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path')
const JWT = require('jsonwebtoken');

app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     console.log(req.cookies)
// })

// app.get('/gg', async (req, res) => {
//     const ver = JWT.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibmFtZSI6Ik5hcmVrIiwiZW1haWwiOiJuYXJtZW5pYTg3OEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ1b1A2WDNKRHgwM1haYS5ITWZnVUp1VUs5aVR4VFJaQTBmcnJtQ1VOOEdzN1QvNnpTR1AzYSIsImlhdCI6MTcwMzYyMjYxNX0.TTHaw39ezBwJ0_tZ1YehJJUc6vOsQVJd1Y_K939a9kw', 's')
//     console.log(ver)
//     res.send(req.cookies)
// })

// app.post('/', (req, res) => {
//     console.log(req.body.jwt)
//     res.sendFile(path.resolve('index.html'));
// })

app.listen(3002, () => {
    console.log('aaa')
});