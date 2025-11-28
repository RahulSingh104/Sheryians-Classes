console.log("Hello, World!");
console.warn("This is a warning message.");
console.error("showing the error1")
console.info("Showing the info0");

console.table({name:"rahul", age:21})

console.log(65 +7);


console.log(typeof "123")
console.log(typeof 123);
console.log(typeof true);
console.log(typeof null);


// typeof aak typetag pe work karta hai 

// “Because of a legacy bug.Null and objects shared the same memory tag (000) in early JavaScript.So typeof null still incorrectly returns 'object'.”


var a = 12;
var b = 13;
var c;

c = a;
a = b;
b= c;

console.log(a,b)

//  second type of solution

var a = 12;
var b = 13;

[a,b] = [b ,a];

console.log(a,b);

//  third type of solution
var a = 12;
var b = 13;

a = a + b; // 25 
b = a-b ; // 12
a = a - b; // 13


console.groupCollapsed("Aaj ka hisab");
  console.log(" daal chawaal 50 ");
  console.log("neebu paani 20");
  console.log("paani puri 50");
console.groupEnd();



// variables

//   const obj = {
//     name :"rahul",
//     age:26,

//   } 

//   obj.age = 23
//   console.log(obj)


  const obj = {
    name :"rahul",
    age:26,

  } 

 Object.freeze(obj);
 obj.name  = saloni;
  console.log(obj)
