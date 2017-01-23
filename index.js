var express = require('express')
var app = express()
var path = require("path")

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  console.log(path.join(__dirname, 'public/home/', 'index.html'))
  response.sendFile(path.join(__dirname, 'public/home/', 'index.html'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
