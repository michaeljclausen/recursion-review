// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  const body = document.body;
  let flattenedBody = turnTreeToArray(body);
  let filteredArray = _.filter(flattenedBody, item => {
    return checkClassName(item, className);
  });
  return filteredArray;
};

var checkClassName = function(obj, className) {
  let classes = obj.className.split(" ");
  for(let i = 0; i < classes.length; i++) {
    if(classes[i] === className) {
      return true;
    }
  } return false;
}

var turnTreeToArray = function(obj) {
  return turnTreeToArrayRecursive([], obj);
};

var turnTreeToArrayRecursive = function(array, obj) {
  if (obj.children.length === 0) {
    array.push(obj);
  } else {
    array.push(obj);
    for (let i = 0; i < obj.children.length; i++) {
      turnTreeToArrayRecursive(array, obj.children[i]);
    }

  }
  return array;
};