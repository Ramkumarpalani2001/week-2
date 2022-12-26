/*
Follow the instructions - Create a function called "isString" that takes 3 arguments (x1, x2, x3)
- check if each argument is a string using typeof.
- If each argument is a string, return "strings"
- If each argument is NOT a string, return "not strings"

*/

//Write your code here
////////////////////////////////////////

  ////////////////////////////////////////
  function isString(x1,x2,x3)
  {
    if(((typeof x1)==='string')&& ((typeof x2)==='string')&& ((typeof x3)==='string'))
    {
      return "string"
    }
  else
  {
    return "it is not a string"
  } 
  }
  console.log('results: ', isString(24, 21, 21));
  
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = isString;
  }
  