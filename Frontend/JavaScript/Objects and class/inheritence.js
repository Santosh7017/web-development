class Vehicle {
    constructor(numWheels, price){
        this.numWheels = numWheels;
        this.price = price;
    }
    getPrice(){
        return this.price;
    }
    printDescription(){
        console.log("Vehicle", this.numWheels, this.price);

    }
}

class Car extends Vehicle{
     constructor(price,numDoors){
        super(4,price);
        this.numDoors = numDoors;
     }
     printDescription(){
        super.printDescription();
        console.log("Car",this.numDoors);
     }
}

var c = new Car(4324324,4);
// console.log(c);
console.log(c.printDescription());

// var vehicle1 = new Vehicle(2,45435);
// var vehicle2 = new Vehicle(4,435435);