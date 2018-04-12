'use strict';

function get_integer_interval(number_a, number_b) {
   //在这里写入代码
   let results = [];
   if (number_a<number_b) {
   for (let start = number_a; start <= number_b; start++) {
     results.push(start);
   }
 }
    if (number_a>number_b) {
     for (let start = number_a; start >= number_b; start--) {
       results.push(start);
     }
 }
 if (number_a==number_b) {
       results.push(number_a);
 }
   console.log(results);
   return results;
   
}

module.exports = get_integer_interval;

