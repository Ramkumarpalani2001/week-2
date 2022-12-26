/*Instructions
 - Greet your friend by printing a message to the console.
*/
//SOLUTIONS
//declaring a varible to store friend name
var myFriend = "Kavinesh"
//function returns greetings message
//creating a function 
function greetings() 
{
 let result = "Greetings " + myFriend + "."
 return result
}
//leave this line unchanged to console log the results
console.log('results: ', greetings());

if (typeof module !== 'undefined') {
  module.exports = greetings;
}