//Simple While Loop
let count2=0;
while (count2<=4) {
    console.log(count2);
    count2++
    
}




console.log(".................................");

//While Loop
 
let count=0;
while (true) {
    console.log(count);
    if (count==5) break;
    count++;
    
}

console.log("2nd Phase");
//retry Untill get Response
let count1=1;
let ResponseFetched=true;
while(ResponseFetched===true){
    console.log(count1);
    if(count1===5){
        ResponseFetched=false; //it means This Program Will now Ended
    }
    count1++;

}