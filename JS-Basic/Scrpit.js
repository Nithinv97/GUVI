// DATA TYPES

// Primitive types

//nuber
console.log(typeof 5); // Integer or float value

// String
console.log(typeof"5") // encoded in ""

// Boolean
console.log(typeof true);

// non primitive datatypes
//arr 
let arr = [1,2,3]
console.log(typeof arr,arr);

//obj
let obj = {1 :"1"};
console.log(typeof obj,obj);

// copy by value
let a = 10
let b = a;
console.log(a);
console.log(b);
b = 15;
console.log(a);
console.log(b);

// copy by Address
let sam_arr1 = [1,2,3];
let sam_arr2 = sam_arr1;
console.log(sam_arr1);
console.log(sam_arr2);
sam_arr2[1] = 4;
console.log(sam_arr1);
console.log(sam_arr2);

// deep copy
let ano_arry1 = [1,2,3];
let ano_arry2 = Object.assign([],ano_arry1);
console.log(ano_arry1);
console.log(ano_arry2);
ano_arry2[2] = 9;
console.log(ano_arry1);
console.log(ano_arry2);
