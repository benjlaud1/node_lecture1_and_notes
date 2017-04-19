var http = require('http'); // http is a module provided by node
var data = require('./data'); // . = current directory, no .js required
var output = require('./output'); //

http.createServer(function (req, res) {
  // create our own modules
  // console.log(data())
  // every request and response will have a 'head' and a 'body'
  res.writeHead(200); // head // success codes are 200s to 300s error messages are 400s and 500s
  res.write(output.getHeading()); // write response body, gets the heading
  res.write(output.sendTitle(data())); // write respose body, gets the title
  res.end(); // finish writing response, now ready to send
}).listen(3000);
