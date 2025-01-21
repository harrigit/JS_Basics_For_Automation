let a="hello World";
console.log(a);

//let var and Const Difference
//let
 let b=0;
 b=10; // it basically replace 0 with 10
 console.log(b);

 //const

 const Name="NiAZI";
 //Name ="Niazi"; // it will show the Error Because We Cannot Change The Const Value
 console.log(Name);

//varable Scope
//let
let count =0;

if (true){
    let count=10;
    console.log("The value of count inside The if block:",count);
}
console.log("The value of count outside The if block:",count);

//var
var count1 =0;

if (true){
    var count1=10;
    console.log("The value of count inside The if block:",count1);
}
console.log("The value of count outside The if block:",count1) // now it Will Replace The Value With 10 So We Cannot control the Variable So We Mostly Do not Use The Var 


//const
const count2 =0;

if (true){
    const count2=10;
    console.log("The value of count inside The if block:",count2);
}
console.log("The value of count outside The if block:",count2) 