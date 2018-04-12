'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let re = [];
  collection_a.forEach(element => {
    if(collection_b.indexOf(element)===-1){
      re.push(element);
    }
  });
  return re;
}

module.exports = choose_no_common_elements;
