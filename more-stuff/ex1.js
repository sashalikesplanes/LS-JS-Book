let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1, 4, 3]
// As arrays are objects hence the variables assigned to an array store a reference
// So both array1 and array2 refer to the same array in memory, hence if one is modified
// so is the other