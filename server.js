
//Install express server
const express = require('express');
const path = require('path');
const app = express();


// Serve only the static files form the dist directory
app.use(express.static('./dist/baiwa-app'));

// ==> Router for build
app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/baiwa-app/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
