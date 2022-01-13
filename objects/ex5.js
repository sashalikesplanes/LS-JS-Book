let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
//newObj.buz = 3;
console.log(myProtoObj);
console.log(myObj.foo);

// Printing JS objects only prints own and not inherited properites