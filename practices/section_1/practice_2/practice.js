function collect_same_elements(collection_a, collection_b) {

  let result = [];

  for (let key of collection_a) {

    if (contain(collection_b, key)) {
      result.push(key);
    }
  }
  console.log("section_2_result:" + result);
  return result;
}

function contain(collection, element) {

  for (let index = 0; index < collection.length; index++) {
    var subArray = collection[index];
    if(subArray.length>0)
    {
      for (let subElement of subArray) {
        if (element == subElement) {
          return true;
        }
      }
      return false;
    }
  }
}


module.exports = collect_same_elements;
