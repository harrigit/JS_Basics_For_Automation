///promise in js 
//if you want to Use Run The Many Function at Same time Then Promise.all() Will Use

//Intaialze The promise Object
//Resolve
let obj=new Promise((resolve,reject)=>{
    console.log("Looking Into it Wait For a While!");
    setTimeout(() => {
        resolve("Problem Resolved");//Async Action that Return Some Value After 5 Seconds
    }, 2000);
    
})

//consuming the Promise
obj.then((res)=>{
    console.log(res);
})

//Reject
let obj1=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        console.log("Looking Into it Wait For a While!");
        reject("Problem Reject");//Async Action that Return Some Value After 5 Seconds
    }, 5000);
    
})

//consuming the Promise
obj1.catch((rej)=>{
    console.log(rej);
})


//Now Combine Use of Bhot of This Resolve And  Reject

let pro=new Promise((resolve,reject)=>{
    
    if (1>2) {
        setTimeout(() => {
            resolve("Resolving The Issue!")
            
        }, 10000);
       
        
    } else {
        setTimeout(() => {
            reject("Reject Your issue!")
            
        }, 10000);
        
    }

})
pro.then((res)=>{
    console.log(res);

}).catch((rej)=>{
    console.log(rej);

})