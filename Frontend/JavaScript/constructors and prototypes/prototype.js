// Key benifets of prototype
// Share the data and behaviour  among bojects
// add data or behavious at runtime

function vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    // this.getPrice = function(){
    //     return this.price;
    // }
}

vehicle.prototype.getPrice= function(){
    return this.price;
}
var vehicle1 = new vehicle(2,50000); 
var vehicle2 = new vehicle(4,50000);
vehicle.prototype.color = "black";
console.log(vehicle.prototype);
console.log( vehicle1.color);
console.log(vehicle2.color);
console.log(vehicle.__proto__ === vehicle.prototype); //dunder
console.log(vehicle1.__proto__ === vehicle.prototype);
console.log(vehicle.prototype.isPrototypeOf(vehicle1));