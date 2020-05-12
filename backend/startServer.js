const express = require('express')
const { join } = require('path');
const app = express()
const port = process.env.PORT || 3000

app.get('/canary', (req, res) => res.send('The server is running...'))

app.use('/', express.static(join(__dirname, '../frontend')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))