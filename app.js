var express = require('express');
var app = express();
var cors = require('cors')
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer('xPIixQx0nM32DYu-y628eq10wKBIB0361m7ACM6DovFVBgOOAWinbLjSmhBYXnE8', 'base64'),
  audience: '6nHfdow1PUp61RqjqRDy7KCaU0FR0djH'
});

app.use(cors());
app.use('/api/*/', jwtCheck);

var users = [
    {"name":"alice", "info":"Basic alice info"},
    {"name":"jane", "info":"Basic jane info"},
    {"name":"bob", "info":"Basic bob info"},
    {"name":"peter", "info":"Basic peter info"},
    {"name":"jack", "info":"Basic jack info"}
];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/users', function(req, res) {
  res.send(users);
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});