//Functions In Js 

//Simple Addition Program for Function
function Add(num1,num2) {
    return num1+num2;
    
}
let Answer=Add(10,5);
console.log(Answer);


//function That Does Not Have A Action
function Message(TextMessage) {
    console.log(TextMessage);
    
}
let Message1=Message("Hello Click Me!");

//Annomyous Function And CallBack Functions (CallBack Function sAre Those Function Which Require another Function as Arrgument)
//this Annomyous Function
let Number=function (a,b) {
    return a*b;
    
}
console.log(Number(3,4));


//callback Function Example
let callbackfunction =function Mul(c,d,f) {
    let mult=c*d;
    f(mult);//here What I Have DOne is That i Have Pass Result of c*d in f parameter for callback
    
}

let result=function simple(result1){
    console.log(`This is Your Result: ${result1}`);
}
//callbackfunction(c=4,d=5,f=result) 
callbackfunction(4,5,result)//Above Line is The Explanation of This


//Defaut parameters
let greetings=function greet(Salam,Name="Muhammad Haris Khan"){
    console.log(`${Salam}! ${Name}`);
}
greetings("Assalamualaikum");//Here We Do not need To Pass A 2nd Parameter because it is By Default

//Passing Object Type of Data In parameters
function printFullName(ObjName) {
    console.log(`I Think your full Name is ${ObjName.firstname} ${ObjName.MiddleName} ${ObjName.lastName}! `);
    
}
printFullName({
    firstname:"Muhammad",
    MiddleName:"Haris",
    lastName:"Khan"
})//here I Have Passed A Object In Parameter
console.log("------------------");
//Self Invoking Function
(function div(a,b) {
    let res= a/b;
    console.log(res);
    return res;
   
})(10,2)