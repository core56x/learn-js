function collect_same_elements(collection_a, object_b) {
  let result = [];
  for(let item of collection_a){

     if (contain(object_b.value,item)){
        result.push(item);
     }
  } 
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
