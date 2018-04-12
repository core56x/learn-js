'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let results = [];
  if (number_a<number_b) {
  for (let start = number_a; start <= number_b; start++) {
    if(start%2==0)
    results.push(start);
  }
}
   if (number_a>number_b) {
    for (let start = number_a; start >= number_b; start--) {
      if(start%2==0)
      results.push(start);
    }
}
if (number_a==number_b) {
      if(number_a%2==0)
      results.push(number_a);
}
  console.log(results);
  return results;
  
}

module.exports = get_integer_interval_2;
