function create_updated_collection(collection_a, object_b) {
  for(let str of object_b.value){
    for(let item of collection_a){
       if(str===item.key){
         item.count=item.count-Math.floor(item.count/3);
         }
     }
   }
 return collection_a;
}

module.exports = create_updated_collection;
