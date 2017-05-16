// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'function' || typeof obj === 'undefined'){
    return "";
  } else if(obj === null ) {
    return "null";
  }else if(typeof(obj) === "number" || typeof(obj) === "boolean") {
    return obj.toString();
  } else if (typeof(obj) === "string") {
    return "\"" + obj + "\"";
  } else if(Array.isArray(obj)) {
    return stringifyArray(obj);
  } else if (typeof(obj) === "object") {
    return stringifyObject(obj);
  } else {
    return ""; 
  }
};

var stringifyArray = function(array) {
  let arr = []
  _.each(array, item => {
    arr.push(stringifyJSON(item));
  });
  let str = arr.join(",");
  return "[" + str + "]";
}

var stringifyObject = function(object) {
  let arr = [];
  _.each(object, (key,value) => {
    let k = stringifyJSON(key);
    if (k) {
      arr.push(stringifyJSON(value) + ':' + k);
    }
  });
  let str = arr.join(",");
  return "{" + str + "}";
}
