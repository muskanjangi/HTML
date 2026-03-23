/*
var age = 22;
if(true){
    console.log(22);
}
    
function example(){
    var age = 22;
    console.log(age);
}   
example();

{
let age = 22;
console.log(age);
}
let age = 22;
let name = "muskan";
age = 56;
let age =  25;   //throws error

const age = 22;
const name = "m";
age = 56; // throws error
const age = 89; // throws error

Variable naming convention -
1) start with number,_,$
2)no space b/w variables
3)camel case like age of students , the variable should lool like , ageOfStudents
4)meaningful
5)do not use reserved keywords

DataTypes- Primitive and Non-Primitive 
Primitive-  *Number(-(2^53 -1) to (2^53 -1))
            *String
            *boolean
            *undefined
            * null
            * BigInt (2^53 -1)
            * Symbol


let age = 56;
let marks = 78.8
console.log(age);
console.log(marks);

let nameOfStudent;
console.log(nameOfStudent); // throws ubdefined error

let value = null;
console.log(value);   // print null
*/
marks = 56;
console.log(typeof(marks));  //number

marks = "muskan";
console.log(typeof(marks));   //string

marks = 56.01;
console.log(typeof(marks));   //number

marks = true;
console.log(typeof(marks));   //boolean

marks = null;
console.log(typeof(marks));   //object

let marks ;            //undefined
console.log(typeof(marks));