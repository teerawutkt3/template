
//Install express server
const express = require('express');
const path = require('path');
const app = express();


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/baiwa-app'));

// ==> Router for build
app.get('/', function (req, res) {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Send the response body as "Hello World"
    res.end('Hello World\n');
    res.sendFile(path.join(__dirname + '/dist/baiwa-app/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');
