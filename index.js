var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var options = {
    root: __dirname + '/public/'
  };

app.get('/robots.txt', function(req, res) {
  res.sendFile('robots.txt', options);
});

app.get('/*', function(req, res) {
    res.sendStatus(410);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
