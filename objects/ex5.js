let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
// Printing JS objects only prints own and not inherited properites

myObj.qux = 3;
