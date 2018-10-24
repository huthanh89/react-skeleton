//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

const path    = require('path');
const express = require('express');
const app     = express();

//-----------------------------------------------------------------------------//

// Tell express to look for views in the following directory.

app.set("views", path.join(__dirname, "dist"));

// Set view engine to be interpret as html.

app.set('view engine', 'html');

app.use('/', express.static(__dirname + '/dist'));

app.get('/', function(req, res){
    res.render('index.html');
});

// Listen app on the following port.

app.listen(3000, () => console.log('Math App listening on port 3000'))

//-----------------------------------------------------------------------------//
