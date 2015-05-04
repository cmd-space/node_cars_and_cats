// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
//    console.log('hello');
//    console.log('REQUEST OBJECT', request);
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/c1.jpeg') {
        fs.readFile('./images/c1.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/c2.jpeg') {
        fs.readFile('./images/c2.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/c3.jpeg') {
        fs.readFile('./images/c3.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cat1.jpg') {
        fs.readFile('./images/cat1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cat2.jpg') {
        fs.readFile('./images/cat2.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cat3.jpeg') {
        fs.readFile('./images/cat3.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('./views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('URL requested cannot be found!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");