
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

/*
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

//                5)Logical Operators:it is used to connect 2 or more conditions/expressions to make decisions based on criteria employed.
//  AND(&&)
//  OR(||)
//  NOT(!)
/*let ans=(true && true && true)
console.log(ans);
let ans1= !(true)
console.log(ans1);
//working with non-booleans- ans2=(false ||'MUSKAN') what should be tehy answer, so study falsey and truthy, falsey-undefined,0,null,false,NaN,' ' and truthey - anything which is not falsey.
ans2=(false ||'MUSKAN')
ans3=(0 ||'MUSKAN')
ans4=(null ||'MUSKAN')
ans5=(NaN ||'MUSKAN')
ans6=(undefined ||'MUSKAN')
ans7=(' ' ||'MUSKAN')
console.log(ans3);
console.log(undefined || 7 || 10 )


//           6)Bitwise operators-  Bitwise AND -> & , Bitwise OR -> | ,Bitwise NOT ->  ,Bitwise >> ,Bitwise <<,Bitwise XOR -> ^
console.log(0 & 0 & 1);
console.log(0 | 1 | 0);
console.log(2^1);  
console.log(2 & 5);
console.log(2 | 5);
console.log(10 << 2);  // num << a = num * 2^a
console.log(100 >> 2); // nums << a = num / 2^a


//CONDITIONALS : 1)if-else 2)Switch
let his_age = 100;
if(his_age < 18){
    console.log("cannot vote");
}
else{
    console.log("can vote");
}


let number = 1;
if(number <= 100){
     console.log("number is lessernthan 100");
}
else if(number <= 11){
    console.log("number is lessernthan 11");
    
}
else if(number >= 2){
    console.log("number is greater than 2");
}
else{
    console.log("number is 10");
}
*/
// 2)Switch

switch(number = 2){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default : console.log('D');
    
}

                                   


