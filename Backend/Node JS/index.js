// // console.log("Hello world");
function add(a,b){
    return a+b;
}
console.log(add(2,8));
console.log(process.argv);
var args = process.argv.slice(2);
console.log("adding the numebrs: ", add(parseInt(args[0]),parseInt(args[1])));

