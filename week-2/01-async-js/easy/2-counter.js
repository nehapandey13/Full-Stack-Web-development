var count = 0;

function counter() {
    count++;
    console.clear();
    console.log(count);
    setTimeout(counter, 1000);
}
setTimeout(counter, 1000);
