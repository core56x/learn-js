'use strict';

function compute_chain_median(collection) {
  let arr1 = collection.split('->');
  let collection2 = arr1.map(Number);
  collection2.sort((x, y) => x - y);
  return ((collection2[arr1.length / 2] + collection2[arr1.length / 2 - 1]) / 2);
}

module.exports = compute_chain_median;
