'use strict';

var chain = '1->4->6->2->3->10->9->8->11->20->19->30';

function compute_chain_median(collection) {
  let collection = chain.split('->');
  let collection2 =  collection.map(Number);
  collection2.sort((x,y)=> x-y);
  return  ((collection2[collection.length/2]+collection2[collection.length/2-1])/2);
}
compute_chain_median(chain);