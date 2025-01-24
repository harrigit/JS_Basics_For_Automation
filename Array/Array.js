//Array in Js
let Numbers=[1,5,6,7];
let String="Muhammad Haris Khan Niazi";
Numbers.push(10)//Mutable 
console.log(Numbers);
console.log(Numbers[2]);

console.log("-----------------------------------------------");
console.log(String.toUpperCase());
console.log(String.toLowerCase());
console.log("-----------------------------------------------");
//Assignment Operators
Numbers[2]="Muhammad";
console.log(Numbers);
console.log("Total Length of Array Is:",Numbers.length);


//Different Type OF In Array
let a=[1,"Muhammad",5,9,"Haris"];
console.log(a);
console.log(a.length);

//Array of Objects in JS Means Multiple Objects In Array
let obj=[{
    name:"hassan",
    id:2
},{
    name:"haris",
    id:3
},{
    name:"Moeez",
    id:4
}]
console.log(obj);
console.log(obj.length);
console.log(obj[0].name);

//Array Within Array
let Ar=[[1,3],[2,6],["Haris","hassan"]]
console.log(Ar);

console.log(Ar[1][0]); 


//traverse
 //i Need To access The Price Of All Books
let book=[{
    Name:"Book1",
    Auther:"Hassan",
    price:200
},{
    Name:"Book2",
    Auther:"Haris",
    price:300
},{
    Name:"Book3",
    Auther:"Moeez",
    price:400
}];
console.log(book);
console.log("Now Accessing The just price of Books.................");
for (let i = 0; i < book.length; i++) {
    const price = book[i].price;
    console.log(`Price:${price}`);
    
}

console.log("merging 2 Arrays in one Array------------------------------------------");
//merging Array in Js
let book6=[...Numbers,...Ar]
console.log(book6);

//Map Method In Arrray

console.log("Map Method In Array-------------------------------");
let b=["1","3","7","8",9,0];
console.log(b);
let modified=b.map(val=>{
 return parseInt(val)
})
   
console.log(modified);


//filter method 
let book4=[{
    Name:"Book1",
    Auther:"Hassan",
    price:200
},{
    Name:"Book2",
    Auther:"Haris",
    price:300
},{
    Name:"Book3",
    Auther:"Moeez",
    price:400
}];

let filter=book4.filter(val=>{
   return val.price>300
})
console.log(filter);