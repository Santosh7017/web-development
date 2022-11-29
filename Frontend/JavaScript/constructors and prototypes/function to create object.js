// var student1 = {
//     name: AbortController,
//     rollNo: 10,
//     marks: 80
// };

// var student2 = {
//     name: "xya",
//     rollNo: 20,
//     marks:85
// };


function createStudent(name, rollNo, marks){
    var student = {}; // new object;
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
}



var student1 = createStudent("xya",29,93);

var student2 = createStudent("pqrs",20,87);

console.log(student1);