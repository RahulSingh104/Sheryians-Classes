// arrays and objects 

// ek se jada values ko ek sath store karne waal data structure hai array - array 



var a = 12; 
var b = 32;
var c = [12,13 ,52]

// what is array 
//  array is a data structure which can store multiple valies all at one place .

// why array - ek se jaada values store krne ke liye 

//  who uses array -> developer 

// when to use array -> whenever you need to store multiple values 

// where to use array -> in the js code 

// how to use array 

     // how to create array ->[]
     // how to access member of array 
       


//    var arr = [1,2,3,4];

// //    arr[2]

//    var arr = []
//    var arr2 = new Array();


// var arr = new Array();  -> this way of writing array is called using constructor 

arr[0] = 12;
arr[1] = 32;



// var arr = []; ->  this way of writing array called  a using array literal   and this is better and fast ,efficent and industires 


arr[0] = 12;
arr[1] = 32;


// ex - 
   // ek blank array banao 
    var arr = [];

    // ek array banao jismein 5 value daalo 
     var arr = [1,2,3,4,5];
    //  ek array banaao jo ki 100 size ka ho 
    var arr2 = new Array(100);



//  js mein arrays mein hum log ek se jaada values store to kr skte hai par chaahe to alag data type ki value bhi store kr skte hai 

// homogeeous -> same type values
// homogeneous nahi hota hai array js mein jiska matlab hai you can store multiple tupes values  in an array 



var arr2 = ["a" , 12, function(){},{},[],NaN];



// Now Obj 
  // what is obj  -> sirf ek tareeka hai key value pairs ko hold karneka . 
   
  var obj = {
    name:"iphone 13 pro max",
    color:"green",
    cameras:3,
    processor:"m2",
    battery:5
  }
  
//   why obj -> jab bhi aapko ek se jaada value ko "ek hi element ke baare mein store karna ho " tab object banta hai 

// when to make  an obj  -> when you want to store the info of one entity

//  how to create an obj
 var obj = {};
 var obj2 = new Object();
//  how to access an obj 
   var obj3 = {
    name:'Rahul',
    age :21,
    email:"rahul@gmail.com",
    isMarried : false
   }


   obj3.isMarried

