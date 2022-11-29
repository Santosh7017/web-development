"use strict"
/*
there are 6 primitive datatype in javascript :
number : 64bit
String
boolean
null
undefined
symbol

One non-primitive:
1. Object
*/



/*
Null vs Undefined :-

*/





/*
Math.pow(10,200);

Math.pow(10,100000000000000000000000000000);
Infinity

to get the max value can be stored in javaScript  = Number.MAX_VALUE;
1.7976931348623157e+308


*/


/*
NaN - Not a number

EX: 
    Math.sqrt(-1);
    Nan


    parseInt("aaaa");
    Nan


*/

/*
typeof 10;
"answer"

var a = "fdf";
typeof a;
string

typeof null;
object     (It is a bug in java script)

typeof Infinity
"number"

typeof Nan;
"number"
*/




// let hello  = document.querySelector('button');
// hello.addEventListener('click', input);
// // function show() {
// //     alert("Hello world");
// // }

// function input(){
// let name = prompt('Enter Name of student');
// hello.textContent = 'Roll No. 1:' + name;
// }

// var Button = document.getElementById('btn');
// Button.addEventListener('click',function(){
//     alert("helo");
// });


var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
 count = 0;
box.addEventListener('click',function(){
    
    count++;
    console.log(count);
    clickCount.innerText = count + " ";

})