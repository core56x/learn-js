function collect_same_elements(collection_a, collection_b) {

  let result = [];

  for (let key of collection_a) {

    if (contain(collection_b, key)) {
      result.push(key);
    }
  }
  console.log("section_1_result:" + result);
  return result;
}

function contain(collection, checkItem) {
  var subArray = collection[0] instanceof Array;

  for (let element of collection) {
    if (element === checkItem) {
      return true;
    }
  }
  return false;
}


module.exports = collect_same_elements;
