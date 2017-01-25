var express = require('express')
var app = express()
var path = require("path")

app.set('port8080', (process.env.PORT || 8080))
app.set('port8090', (process.env.PORT || 8090))

app.use(express.static(__dirname + '/public'))

app.get('/public/*', function (req, res) {
  res.sendFile(path.join(__dirname, '', req.originalUrl))
})

app.get('/', function(req, res) {

  var port = req.headers.host.split(":")[1];
  console.log("receiving request from port: " + port);
    switch(port) {
      case "80":
          res.sendFile(path.join(__dirname, 'public/home/', 'index.html'))
          break;
      case "90":
          res.sendFile(path.join(__dirname, 'public/domainSell/', 'index.html'))
          break;
      default:
          res.sendFile(path.join(__dirname, 'public/home/', 'index.html'))
    }

})


app.listen(app.get('port8080'), function() {
  console.log("Node app is running at localhost:" + app.get('port8080'))
})

app.listen(app.get('port8090'), function() {
  console.log("Node app is running at localhost:" + app.get('port8090'))
})
