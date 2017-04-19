var express = require('express');
var fs = require('fs');
var mustacheExpress = require('mustache-express');
var marked = require('marked');

var app = express();

app.engine('html', mustacheExpress());   

app.set('view engine', 'html');  
app.set('views', __dirname);

let getRequest = (urlName) => {
    app.get(urlName, function (req, res) {
        fs.readFile('content' + urlName + '/index.md', 'utf8', (err, mdText) => {
            if (err) {
                throw err;
            }
            let html = marked(mdText);
            res.render('template', {content: html});
        });
    });
}

// create handlers for get requests on each path
getRequest('/about-page');
getRequest('/jobs');
getRequest('/valves');
getRequest('/test');

app.listen(5000, function () {
    console.log('Example app listening on port ', 5000);
});