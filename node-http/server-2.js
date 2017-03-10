var http = require('http');

var hostname = 'localhost';
var port = 4000;

var server = http.createServer(function (req, res) {

});

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}`);
});
