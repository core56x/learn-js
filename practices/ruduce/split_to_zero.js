'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  for(let num = number;parseFloat((num+interval).toFixed(1))>0;num-=interval ){
      result.push(parseFloat(num.toFixed(1)));
  }
  console.log(result);
  return result;
}

module.exports = spilt_to_zero;
