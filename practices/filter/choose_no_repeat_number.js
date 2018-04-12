'use strict';

function choose_no_repeat_number(collection) {
  let result=[];

  return collection.filter(function (element, index, self) {
    var aa= self.indexOf(element) === index;
    return aa;
  });
}

module.exports = choose_no_repeat_number;
