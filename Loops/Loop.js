//Standard For Loops
console.log("Increment");
for(let i=0;i<=5;i++){
    console.log(i);
}
console.log("Decrement");
for(let i=5;i>=0;i--){
    console.log(i);
}

//Advance use Case With An Array
console.log("Loop With Array");
let arr=[1,3,6,9];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    console.log(typeof(arr[i]));
    
}
//console.log(typeof(arr[i]));
console.log("Loop With Array");
let Sum=0;
let arr1=[1,3,6,9];
for(let i=0;i<arr1.length;i++){
    let Arr=arr1[i];
    Sum=Sum+Arr;
    console.log(Sum);
    
}


///Use Of Break Statement in Loop


let Arra=["Book","NotePad","Pen","Pencil"];
for(let i=0;i<Arra.length;i++){
    let Value=Arra[i];
    if(Value=="Pen"){
        console.log(`Here Is Your rEQUIRED vALUE:${Value} And Now I Ending This Program. `);
        break;
    }else{
        console.log("Current Value Is Not Your Required Value  So I am Finding Wait For While! Current Value is This: ",Value);
        continue;
    }
}