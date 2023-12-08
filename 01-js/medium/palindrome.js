/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
 
  str=str.split(' ').join('');
  str= str.toLowerCase();
  var i=0;
  var j=str.length;
  j=j-1;
 
  while(i<j)
   {
    while(str[i]==='?' || str[i]==='.' || str[i]==='!' || str[i]===';' || str[i]===',' || str[i]===':'  )
    i++;
    if(str[j]==='?' || str[j]==='.' || str[j]==='!' || str[j]===';' || str[j]===',' || str[j]===':' )
    j--;
    if(str[i]!=str[j])
     return false;
    i++;
    j--;
   }
  return true;
}

module.exports = isPalindrome;
