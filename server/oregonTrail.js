const express = require('express')
const app = express();
app.use(express.static('client/public'));
const port = 1337

app.get('/', function(request, response) {
  response.sendFile('index.html', {root: './client/views'})

})

app.get('/mainmenu', function(request, response) {
  response.sendFile('mainmenu.html', {root: './client/views'})
})

app.get('/setup', function(request, response) {
  response.sendFile('setup.html', {root: './client/views'})
})

app.get('/topten', function(request, response) {
  response.sendFile('topten.html', {root: './client/views'})
})

app.get('/trail', function(request, response) {
  response.sendFile('trail.html', {root: './client/views'})
})
app.listen(port, () => console.log('Example app listening on port 1337!'))
