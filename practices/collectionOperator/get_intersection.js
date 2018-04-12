'use strict';

function get_intersection(collection_a, collection_b) {
  return Array.intersect(collection_a,collection_b);
}

module.exports = get_intersection;
 ///集合取交集
 Array.intersect = function () {
  var result = new Array();
  var obj = {};
  for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
          var str = arguments[i][j];
          if (!obj[str]) {
              obj[str] = 1;
          }
          else {
              obj[str]++;
              if (obj[str] == arguments.length)
              {
                  result.push(str);
              }
          }//end else
      }//end for j
  }//end for i
  return result;
}