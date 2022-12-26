/*
Instructions
Given the function getProduct, 
- Return an object with the following {key: value} properties
- id:productId
- serialNumber: 'WD579000'
- manufacturer: 'Apple'
- price: 1500
*/
function getProduct(productId) 
{

  let myobject = {id:productId,serialNumber: 'WD579000',manufacturer: 'Apple',price: 1500}
    
  return myobject; 

  }
  //open your browser console to check the results
  console.log('result: ' + JSON.stringify(getProduct(1)));
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = getProduct;
  }
  