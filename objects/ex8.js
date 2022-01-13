let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

const copyObj = (obj, keys = []) => {
  let newObj = {};
  console.log(keys.length);
  for (let key in obj) {
    // Either we specified that the specific key should be copied
    // or no keys were specified in which case all will be copied
    if (keys.includes(key) || keys.length === 0) {
      newObj[key] = obj[key];
    }
    
  }
  return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);    // => { bar: 2 }