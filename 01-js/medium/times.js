/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function sum(num){
    var cnt=0;
    for(let i=0;i<=num;i++){
        cnt+=i;
    }
    return cnt;
}
function calculateTime(n) {
    var time1=new Date();
    sum(n);
    var time2=new Date();
    return ((time2-time1)*60)/1000;
}
var check=calculateTime(10000000);
console.log(check);
