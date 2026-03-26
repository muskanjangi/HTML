/*
//VARIABLES AND DATATYPES
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
            * BigInt (2^53 1)
            * Symbol


let age = 56;
let marks = 78.8
console.log(age);
console.log(marks);

let nameOfStudent;
console.log(nameOfStudent); // throws ubdefined error

let value = null;
console.log(value);   // print null

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
*/


//OPEARTORS AND CONDITIONALS IN JS 
// operators are the specific symbols to perform operations like +,-,...
//unary and binary operators-having 1 operand like ++a,--a
                           // having 2 operands like 5+3;
//Types of operators- 1)Arithmetic operators like +,-,/,*,%,**
let a = 90;
let b = 80;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
 //preincrement is first increase value and then use it like a=5,first , 6 then a=6
 //postincrement is first use it and then increase it like a=5 , first a=5, then 6 , as same for decrement

                    //2)Assignment operators
console.log(a += 10);
console.log(a -= 10);
console.log(a *= 10);
console.log(a /= 10);

                  //3)Comparision operators
console.log(10> 5);
console.log('5' == 5);
console.log('5'=== 5);
console.log(5 === 5);
                 //4)Ternary operators
let age = 12;
let rightToVote = age>18 ? 'Ican vote' : ' I cannot vote' ;
console.log(rightToVote);