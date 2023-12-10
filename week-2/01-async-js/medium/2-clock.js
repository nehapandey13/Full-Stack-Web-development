var counter = 0;
function callBackFuncion(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        counter++;
        var date = new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var carry = 0;
        if (seconds > 59) {
            carry = seconds % 59;
            seconds = 0;
        }
        minutes = (minutes + carry + 30) % 60;
        if (minutes > 59) {
            carry = minutes % 59;
            minutes = 0;
        }
        hour = (hour + carry + 6) % 24;
        console.clear();
        const time = hour + ":" + minutes + ":" + seconds;
        console.log(time);

    }
}

setInterval(callBackFuncion, 1000);
// setTimeInterval();