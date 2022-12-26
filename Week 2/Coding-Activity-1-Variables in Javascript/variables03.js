//SOLUTION
// declared a const names lacroix1 and initialized it to the value 'grapefruit'
const lacroix1="grapefruit"
function testBestFlavor() 
{  
  const lacroix2="orange"
  //declared a const names lacroix2 and initialized it to the value 'orange'
  return 'Ana says, lacroix ' + lacroix2 + 'is a better flavor than lacroix ' + lacroix1;
}
console.log('result: ', testBestFlavor());
//
if (typeof module !== 'undefined') {
  module.exports = testBestFlavor;
}