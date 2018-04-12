'use strict';

function get_union(collection_a, collection_b) {
  let result= Array.union(collection_a,collection_b);
  console.log("get_union"+result);
  return result;
}

module.exports = get_union;

 //并集
 Array.union = function () {
  var arr = new Array();
  var obj = {};
  for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++)
      {
          var str=arguments[i][j];
          if (!obj[str])
          {
              obj[str] = 1;
              arr.push(str);
          }
      }//end for j
  }//end for i
  return arr;
}
