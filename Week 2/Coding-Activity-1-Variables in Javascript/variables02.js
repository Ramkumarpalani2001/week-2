//Instructions
// - Check the instructions in the summary file and calculate the current year
//SOLUTION
var currentYear;
const year = new Date();
currentYear = year.getFullYear();
console.log('current year result: ', currentYear); 
//should be the value of the currentYear variable
//
if (typeof module !== 'undefined') {
  module.exports = currentYear;
}
