/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(str){

  if(str==='a' || str==='e' || str==='i' || str==='o' || str==='u' || str==='A' || str==='E' || str==='I' || str==='O' || str==='U' ) {
   return true;
  }
  return false;


}
function countVowels(str) {
    // Your code here
    const cnt=0;
    for(var i=0;i<str.size();i++ ){
      if(isVowel(str[i]))
       cnt++;
    }
    return cnt;
}

module.exports = countVowels;