

function demo(){
    console.log(this);
}

var demo2 = function (){
    console.log(this);
}

var obj = {
    'prop1': 12,
    'prop2' : 90,
    'print' : function(){
        console.log(this);
    }
}
obj.print();

// console.log(this);
// demo();
// demo2();