var express = require('express');
var path = require('path');
var routes = require('./routes/index');

var port = process.env.PORT || 3000
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');
app.engine('html', require('swig').renderFile);

app.use('/',routes);

app.listen(port);

console.log('> Listening at http://localhost:' + port);
