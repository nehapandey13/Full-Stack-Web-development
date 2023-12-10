var fs = require('fs')

function callBackFunction(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
}
fs.readFile('a.txt', 'utf-8', callBackFunction);
