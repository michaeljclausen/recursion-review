// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var parseJSON = function(json) {
  console.log(json);
  if(json === "null") {
    return null;
  } else if(json === "") {
    return "";
  } else if(json === "undefined") {
    return undefined;
  } else if(!isNaN(json)) {
    return parseInt(json, 10) 
  } else if(json === "true") {
    return true;
  } else if(json === "false") {
    return false;
  } else if(json[0] === "\"") {
    if(json[json.length-1] !== '\"') {
      throw new SyntaxError("There is an issue with the string");
    } else {
      // console.log(json);
      // console.log(parseString(json.substr(1,json.length-2)));
      return parseString(json.substr(1,json.length-2));
    }
  }
  else if (json[0] === '[') {
    if(json[json.length-1] !== ']') {
      throw new SyntaxError("There is an issue with the array");
    } else {
      return parseArray(json.substr(1,json.length-2));
    }
  } else if (json[0] === '{') {
    if(json[json.length-1] !== '}') {
      throw new SyntaxError("There is an issue with the object");
    } else {
      return parseObject(json.substr(1,json.length-2));
    }
  }
};

var parseArray = function(str) {
  let arr = [];
  let strArr = str.split(",");
  _.each(strArr, item => {
    if(item !== "") {
      arr.push(parseJSON(item));
    }
  });
  return arr;
};

var parseObject = function(obj) {
  let object = {};
  let strArr = obj.split(",");
  debugger;
  _.each(strArr, str => {
    let keyVal = str.split(": ");
    // if(keyVal[0] === undefined || keyVal[1] === undefined) {
    //   throw new SyntaxError("There is an issue with the array");
    // } else {
    object[parseJSON(keyVal[0])] = parseJSON(keyVal[1]);
    //}
  });
  return object;
};

var parseString = function(str) {
  return str;
};


