function count_same_elements(collection) {
  let result = []
    for (let str of collection) {
        let obj = findObjInArr(result, str)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: str, count: 1})
        }
    }
    return result
  }

  function findObjInArr(result, str) {
    let newObj
    for (let obj of result) {
        if (obj.key === str) {
            newObj = obj;
        }
    }
    return newObj
}
module.exports = count_same_elements;
