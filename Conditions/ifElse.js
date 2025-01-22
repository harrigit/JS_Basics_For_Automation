//if Else

let File="Created";
 
if (File=="Created"){
    console.log("your File is Created Enjoy!");

}
else{
    console.log("try Again!");
} // Here If SStatement will Run 


//


let File1="Created";
File1="Not Created"
 
if (File1=="Created"){
    console.log("your File is Created Enjoy!");

}
else{
    console.log("try Again!");
} // Here Else SStatement will Run 


//Not If it Used To Check Falsy Values 
//Not if
let A;
if(!A){
    console.log(">>> There Is s Falsy Value!");
} // it will return Value That in Console.log

// let B="False";
// if(!B){
//     console.log("hello");

// }
// else{
//     throw Error("Error In Your Message");
// } //Due To This Code Whole File Is Not Working That Why I am Commenting This File  B/w this File Will Throw Error Because value of B is Not Falsy Mean Not Null or Undefind  Etc

// Nested if 
 
let err1="Unknown";

if (err1==="Error") {
    console.log("Wrong");
    
} else if (err1==="false"){
    console.log("error Not Found");
    
}else{
    console.log(`This was The ${err1} Error`);
}


//inner Condition
let TestResult="fail"
if (TestResult=="Pass") {
    console.log("you are pass");
    
} else {
    console.log("You are Fail But..");
    let Subject="Math"
    if(Subject=="Math"){
        console.log(" you are Only Fail In Maths So Try Again In");
    }else{
        console.log("You are Full fail");
    }
    
}


///if codition in for Loop
for (let i = 0; i <=10; i++) {
    if (i==1) {
        console.log("Break");
        break;
        
    }else{
        console.log(i,"And Continu");
    }
    
}