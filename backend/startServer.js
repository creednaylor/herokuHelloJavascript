const express = require('express')
const path = require('path');
const app = express()
const config = require('../config/config');
const port = config.port;

app.get('/canary', (req, res) => res.send('The server is running...'))

app.use('/', express.static(path.join(__dirname, '../frontend')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
