var recipes = new Object();

// Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
// Objects updateObjectWithKeyAndValue(object, key, value) it does not modify the original object, but rather returns a clone with the new data:
function updateObjectWithKeyAndValue(object, key, value){
<<<<<<< HEAD
    var newObj = Object.assign({}, object, {[key]: value});
    return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value;
   return object;
 }

// Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
//Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
function deleteFromObjectByKey(object, key){
    var object = {key};
    var newObj = Object.assign({}, object);
    delete newObj.key;
    return newObj;
}

// Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
// Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
=======
  Object.assign({}, object, { key: [value] });
  return object;
}

 // Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:

// Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
//Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):

// Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
// Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
>>>>>>> f164f42300dfe4c7c40802c9dfa2b07c4b11a555
