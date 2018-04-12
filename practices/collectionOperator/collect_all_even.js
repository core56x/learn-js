'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let results = [];
  for (const item of collection) {
    if(item%2==0)
      results.push(item);
  }
  return results;
}

module.exports = collect_all_even;
