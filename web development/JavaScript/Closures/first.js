
// closures are the combinations of the function and lexical environment in which the funtion is created

var i = 10;
function outer(){
    var j = 20;
    // console.log(i,j); 
   var inner =  function (){
        var k = 30;
        console.log(i,j,k);
        i++;
        j++;
        k++;
    }
    return inner;   
}
var inner = outer();
// console.log(inner);
inner();
inner = outer();
inner();
