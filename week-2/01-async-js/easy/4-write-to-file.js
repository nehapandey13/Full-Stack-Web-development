const fs = require('fs');


var data = "Hi I am Neha. I am trying to learn full stack web development";

function callBackReadFunction(err, file_data) {
    if (err) {
        console.log(err);
    }
    else {
        data = data + file_data;
        console.log("Data read successfuly");
        console.log(data);
    }


}

function callBackWriteFunction(err) {
    if (err) {
        console.log(err);
    }
    else {
        // data = data + "welcome to my world";
        console.log('data Added into file');
        console.log(data);
    }
}
fs.readFile('a.txt', 'utf-8', callBackReadFunction);
fs.writeFile('a.txt', data, 'utf-8', callBackWriteFunction);