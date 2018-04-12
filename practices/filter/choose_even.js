'use strict';

function choose_even(collection) {

  let result=[];
  collection.forEach(element => {
    if(element%2==0)
    result.push(element);
  });
  return result;
}

module.exports = choose_even;
