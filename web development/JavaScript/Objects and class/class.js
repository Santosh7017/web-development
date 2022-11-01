// class functions are not hoisted


class Vehicle{
    constructor(numWheels, price){
        this.numWheels = numWheels;
        this.price = price;
    }
    getprice(){
        return this.price;
    }
}
var vehicle1 = new Vehicle(2,5000);
var vehicle2 = new Vehicle(4,23324);

// console.log(Vehicle.prototype);
// console.log(vehicle1.prototype);
console.log(Object.getPrototypeOf(vehicle1));