const express = require('express')
const app = express()
const port = 1337

app.get('/', (request, response) => response.send('Hello World!'))
app.listen(port, () => console.log('Example app listening on port 1337!'))
