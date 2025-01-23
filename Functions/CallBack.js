//CallBacks Functions
//Js is A Synchronous(code Run in order) in Nature But We Can Used It As ASynchronous with Event loop CallBack And Promises

///Example Of Synchronous Nature in JS
function name1(a) {
    console.log(a);
    
}
function Class1(b) {
    console.log(b);
}
name1("haris")
Class1("10th"); /// So there output Will Be Like First A and Then B
console.log("----------------------------------------------------------------------");
/////Example Of ASynchronous Nature in JS
function name(a,b) {
    setTimeout(()=>{
        console.log(a,b);

    },2000)//due to this now it is ASynchronous Nature
   
    
}
function Class(b) {
    console.log(b);
}
name("haris","Now I am Excecuted After Class i have waited 2 seconds")
Class("10th");

///Call Back Function Example

let greet=(NAME)=>{
console.log(NAME);
}
let Greeet=(namee,greeeeet)=>{
    let greeeeeting=`Hello ${namee}!`
    greeeeet(greeeeeting);


}
Greeet("Muhammad Haris Khan Niazi! Assalamualaikum",greet)