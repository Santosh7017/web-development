
'use strict';
function demo(a,b){
    console.log(this);
    console.log(a,b);
}

// var demo2 = function (){
//     console.log(this);
// }

var obj = {
    'prop1': 12,
    // 'prop2' : 90,
    'print' : function(){
        console.log(this);
    }
}
// demo.call(obj); // bound the object and because of strict  it will not pick any default value
// demo.call(obj, 3,4);
demo.apply(obj, [3,4]); // difference between call and argument is in case of arguments
// obj.print();

// console.log(this);
// demo();
// demo2();