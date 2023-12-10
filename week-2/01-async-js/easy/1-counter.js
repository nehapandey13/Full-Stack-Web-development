var counter = 0;
function callFunction() {
    counter++;
    console.clear();
    console.log(counter);
}
setInterval(callFunction, 1000);