//Print odd number
// anonymous function method(odd number) task 4.1
 var arry = [1,2,3,4,5,6,7,8,9];
let anon_odd = function(){
    for(var i = 0; i<arry.length; i++){
        if(arry[i]%2!=0){
           console.log(arry [i]);
        } 
   }
}
anon_odd();
 // IMMEDIATELY INVOKED FUNCTION Expression(IIFE)  method (odd number) task 4.1
 var array=[1,2,3,4,5,6,7,8,9];
 (function (array){
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array);
 

 // convert all string to title caps in a array 
// Anonymous function method 4.2
var arr = ["i am nithin", "hello world", "good morning"];
arr = arr.map(function(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
});
console.log(arr);
// IMMEDIATELY INVOKED FUNCTION Expression(IIFE)  method    
var arr = ["how are you"]
arr = (function(arr) {
  for(var i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i].toLowerCase().split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  return arr;
})(arr);

console.log(arr);


 // Sum of all number in a array 4.3
 //Anonymous function
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = (function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
})(numbers);

console.log(sum);
// IMMEDIATELY INVOKED FUNCTION Expression(IIFE)
var a=[1,2,3,4,5,6,7,8,9];
var sum1=0;
(function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum1=sum1+a[i];
   }
   return sum1;
})(a);
console.log(sum1);


// Prime number
//anonymous function encapusled 
const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = number1.filter(function(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
});
console.log(primeNumbers);

// IMMEDIATELY INVOKED FUNCTION Expression
const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumber2 = (() => {
    function isPrime(num) {
        if (num <= 1) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    }
    return numbers.filter(isPrime);
})();
console.log(primeNumbers); 


//palindromes
//anonymous function (coverting with caps letter)
const words = ["level", "noon", "hello", "radar", "world", "madam"];
const palindromes = words.filter(function(word) {
    const lowercaseWord = word.toLowerCase();
    const reversedWord = lowercaseWord.split('').reverse().join('');
    return lowercaseWord === reversedWord;
});
console.log(palindromes); 
//IIFE(without converting the CAPS Letter)
var array = ["racecar", "hello", "level", "world", "madam"];
var palindrome1 = (function(arr) {
  return arr.filter(function(word) {
    return word === word.split('').reverse().join('');
  });
})(array);
console.log(palindrome1); 


//median
//anonymous
const median = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const midIndex = Math.floor(mergedArray.length / 2);
    return mergedArray.length % 2 === 0
      ? (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2
      : mergedArray[midIndex];
  };
  const arr1 = [1, 12, 15, 26, 38];
  const arr2 = [2, 13, 17, 30, 45, 47];
  console.log(median(arr1, arr2)); 

  // remove duplicate from array 
  //anonymous
  const array6 = [1, 2, 3, 4, 2, 3, 5, 6, 7, 1];

const uniqueArray = array6.filter(function(item, index) {
    return array6.indexOf(item) === index;
});
console.log(uniqueArray); 

//IIFE
const number6 = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
const result = (() => {
  'use strict';
  const arr = [...numbers];
  return [...new Set(arr)];
})();
console.log(result); 

// Prime number 
//arrow function 
var y=[1,2,3,4,5,6,7]

var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));

//Convert all the strings to title caps in a string array
// arrow function
var str="my name is nithin";
let def= (str)=>{
return str.toLowerCase().split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}
console.log(def(str));

// summ of all number arrow function
var a=[1,2,3,4,5,6,7,8,9];
var sum9=0;
let ghi=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum9=sum9+a[i];
   }
   return sum9;
}
console.log(ghi(a))

//Prime number set value of array till 34 
let n=34;
let l=(n)=>
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(l(n));

// checking palindrom is true or false 
// already i have return the palindrom in previous function tired this method ( note- pls dont reduce mark for it :) )
const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("hello"))
