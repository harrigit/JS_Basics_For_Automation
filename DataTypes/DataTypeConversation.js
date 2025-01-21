let Str="2";
let Str1="10.11";
console.log(`the type of Str And Str1 is : ${ typeof Str1},${ typeof Str}`);//String


//Convert String Into Number

let val=parseInt(Str);
console.log(val);// it will return a Number Datatype

let val1=parseFloat(Str1);
console.log(val1);
console.log(`The TYPE OF value IS  ${typeof val1} DataType And value Will be ${val1}`);

//another method of convert String into number is 
//Unary Plus
let val2=+(Str);
console.log(val);// it will return a Number Datatype

let val3=+(Str1);
console.log(val1);
console.log(`The TYPE OF value IS  ${typeof val2} DataType And value Will be ${val3}`);

//convert String to number

let val4=10 ;
let val5=val4.toString();
console.log(val5);

console.log(`The TYPE OF value IS  ${typeof val5} DataType And value Will be ${val5}`);