function collect_same_elements(collection_a, object_b) {
  let result = [];
    for(let i=0;i<collection_a.length;i++){
     if (contain(object_b.value,collection_a[i].key)){
        result.push(collection_a[i].key);
     }
  } 
  return result;
}

function contain(collection, checkItem) {
  var subArray = collection.value instanceof Array;

  for (let element of collection) {
    if (element === checkItem) {
      return true;
    }
  }
  return false;
}
module.exports = collect_same_elements;
