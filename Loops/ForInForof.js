//for In Loop And For of Loop In Js 
//purpose For In for Object
//And For of For Array

let obj={
    FirstName:"Haris",
    LastName:"Khan",
    Cast:"Niazi"
}
for(let values in obj){
    console.log(`${values}  :   ${obj[values]}`);
}


///For of Loop 

let Window1=["Haris","Niazi","Khan"]
for(let key of Window1){
    console.log(`${key}`);
}