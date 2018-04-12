'use strict';

function choose_common_elements(collection_a, collection_b) {

  let re = [];
  collection_a.forEach(element => {
    if(collection_b.indexOf(element)>=0){
      re.push(element);
    }
  });
  return re;
}

module.exports = choose_common_elements;
