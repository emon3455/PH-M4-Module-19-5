
var array = [10 , 20 , 30 , 40 , 50];
var ar1= ["Emon"];
console.log(ar1[2]);

var size = array.length;
console.log(size);

array[2] = 99;
console.log(array);

console.log(array[1]);

var index = array.indexOf(30);
console.log(index);

// add on the last of the array
array.push(60);
console.log(array);

// remove from the last of the array
array.pop();
array.pop();
console.log(array);

// add on the first of the array:
array.unshift(99);
console.log(array);

// remove from the first of the array:
array.shift();
array.shift();
console.log(array);
