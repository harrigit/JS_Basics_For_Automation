//Arrow Function in Js

let A=(num1,num2)=>{
    let result=num1+num2;
    console.log(result);
    return result;
}
A(10,5)
console.log("---------------------------------------------");

//no PARAM
let arr=()=> 10>5
let result1=arr();
console.log(result1);


//Single PArameter
let name=(Name)=>console.log(Name);
let b=name("Haris")
