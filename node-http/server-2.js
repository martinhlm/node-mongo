var http = require('http');

/*
    Enables me to access various parts of the file system on my computer,
    and be able to do queries and then retrieve files and be able to
    manipulate files
*/
var fs = require('fs');

/*
    Allows to construct the path appropriate to the specific machine.
*/
var path = require('path');

var hostname = 'localhost';
var port = 4000;

var server = http.createServer(function (req, res) {
    console.log('Request for ' + req.url + ' by method ' + req.method);

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);
        var fileExt = path.extname(filePath);

        if (fileExt == '.html') {
            fs.exists(filePath, function(exists) {
                if (!exists) {
                	res.writeHead(404, { 'Content-Type': 'text/html' });
                	res.end('<html><body><h1>Error 404: ' + fileUrl +
                                ' not found</h1></body></html>');
                	return;
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                fs.createReadStream(filePath).pipe(res);
            });
        } else {

            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<html><body><h1>Error 404: ' + fileUrl +
                    ' not a HTML file</h1></body></html>');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Error 404: ' + req.method +
                ' not supported</h1></body></html>');
    }

});

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}`);
});
