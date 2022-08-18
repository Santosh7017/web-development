function createStudent(name, rollNo, marks){
    // var student = {}; // new object;
    // student.name = name;
    // student.rollNo = rollNo;
    // student.marks = marks;
    // return student;
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
}

var student1 = new createStudent("abcd",32,53);

var student2 = new createStudent("efgh",32,53);
console.log(student1);
console.log(student2);