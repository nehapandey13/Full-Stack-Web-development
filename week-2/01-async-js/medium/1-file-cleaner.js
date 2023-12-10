const fs = require('fs');

function printData(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
}

function callBackFunction2(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File has been cleaned successfully");
        // console.log(data);
        fs.readFile('a.txt', 'utf-8', printData);
    }
}

function callBackFunction(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        var cleaned_file = data.replace(/\s+/g, ' ');
        cleaned_file = cleaned_file.trim();
        fs.writeFile('a.txt', cleaned_file, 'utf-8', callBackFunction2);
    }
}

fs.readFile('a.txt', 'utf-8', callBackFunction);