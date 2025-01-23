//Simple Strings With Index


let str1="Hello World!";
console.log(str1.charAt(0));
console.log(str1.charAt(6));
console.log(str1.length);

//String With templete literals  is this ``

let Name=`Muhammad Haris Khan`;
let Date1="2022-01-01"
let Date2="2024-01-01"
let BankName="SC";

console.log(`${Name}! your Account Statement of Bank ${BankName} from ${Date1} to ${Date2} is Here!`);


//String Comparision in js
//Case Sensitive Means Upparcase And Lower case

let File="Haris.Pdf"

if(File==="haris.pdf"){// in this case Else Will Be Exceuted Because Uppar Case Lower Case Issue
    console.log("File Matches"); 
}else{
    console.log("File Not Found");
}

//Example 2
let File1="Haris.Pdf"

if(File1.toUpperCase()==="HARIS.PDF"){// in this case Else Will Be Exceuted Because Uppar Case Lower Case Issue
    console.log("File Matches"); 
}else{
    console.log("File Not Found");
}


//Now See If There is Space In Strikng Then We Have To Use Trim 
//Example 3
let File2=" Haris.Pdf"

if(File2.toUpperCase().trim()==="HARIS.PDF"){
    console.log("File Matches"); 
}else{
    console.log("File Not Found");
}

//Partial Comparsion
//StartsWith
let File3="Haris.Pdf"

if(File3.startsWith("Haris")){
    console.log("File Matches"); 
}else{
    console.log("File Not Found");
}

//EndsWith
let File4="Haris.Pdf"

if(File4.endsWith(".Pdf")){
    console.log("File Matches"); 
}else{
    console.log("File Not Found");
}

//Slice In Js

let Date="2025-01-23"
let Simple=Date.slice(2);// it will Skip 2 index in Date Variable 
console.log(Simple);

//Just Year In Date variable
let year=Date.slice(0,4);
console.log(year);

//just Month in Date variabe
let Month=Date.slice(5,7);
console.log(Month);
//Just Date  in Date variable
let tarikh=Date.slice(8,10);
console.log(tarikh);


//Split in Js 

let Na="Muhammad Haris"
let na=Na.split();
let na1=Na.split(" ");
console.log(na,na1);
console.log(na,na1[1]);



