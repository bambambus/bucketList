var http = require('http')
var fs = require('fs')

const PORT = 8080

fs. readFile('./bucketList.html', function(error,html){
    if(error) throw error;
    http.createServer(function(request,response){
        response.writeHeader(200,{"Content-Type": "text/html"});
        response.write(html)
        response.end();
    }).listen(PORT)
    console.log('Node.js web server at port 8080 is running..')

});