// var score = 100;

// if(score >= 50) {
//     var score = 50;
// }

// console.log(score);


/* const score = 100;

if (score >= 50) {
    console.log("Pass");
}
else {
    console.log( "Fail");
} */
//โดยการเขียนเงื่อนไขแบบนี้ทำให้เขียนเยอะ



//ternary operator คือการเขียนเงื่อนไขให้สั้นลง

/*const score = 100;
console.log(result);
let result = score >= 50 ? 'Pass' : 'Fail' */

//ประกาศตัวแปรที่ชื่อว่า result มารับค่า score >= 50 (ในที่นี้ให้ conditions = score >= 50) ตามด้วยเครื่องหมาย ? (ถ้า conditions เป็น true ให้แสดง 'Pass' ) และถ้าอื่นๆตามด้วยเครื่องหมาย : (ถ้า conditions เป็น Fail ให้แสดง 'Fail')


//การประกาศ function แบบแรก (fail)
/* const score = 40;
function calculateGrade(score) {
    return score >= 50 ? 'pass': 'fail';
}
const result = calculateGrade(score)
console.log(result) */

//ตัวแปร result ให้มารับค่าของ function calculateGrade

//การประกาศ function แบบที่สอง (pass)
/* const score = 100;
const calculateGrade = function(score) {
    return score >= 50 ? 'pass' : 'fail';
}

const result = calculateGrade(score);
console.log(result); */



//การเขียน arrow function 
/* const score = 100;
const calculateGrade = (score) => score >= 50 ? 'pass' : 'fail'
 

const result = calculateGrade(score);
console.log(result); */

//การเขียน function arrow ที่ซับซ้อนแบบแรก
/* const score = 40;
const calculateGrade = (score) => score >= 50 ? 'pass' : 'fail';
const calculateArea = (width, height) => width * height

//การใส่ค่า paramitter สองตัว

const result = calculateArea(5, 5);
console.log(result); */

//การเขียน function arrow ที่ซับซ้อนแบบที่สอง
/*const score = 40;
const calculateGrade = (score) => score >= 50 ? 'pass' : 'fail';
const calculateArea = (width) => (height) => width * height

//การใส่ค่าหลัก paramitter สองตัวคือการใช้ function ซ้อน function

const result = calculateArea(5)(6);
console.log(result); */

//Object
/* const person = {
    id: 1,
    name: 'wachirawit',
    age: 20 
}

person.isRich = true; //คือการเพิ่มค่าเข้าไปใน Obj


console.log(person.name);
console.log(person);

//การนับค่าใน Obj นำไปใช้ต่อหรือต้องการใช้ค่าแค่ค่านั้นตัวเดียว นั้นเราเรียกว่า Destructuring
const {name } = person;
console.log(name); */

/* 
const {name, age, id} = person;
console.log(name);
console.log(age);
*/


//Spread & rest operator คิอการใช้ ...


//Ex.1 spread operator คือการเข้าถึงตัว paramitter ของ function
/* const person = {
    id: 1,
    name: 'wachirawit',
    age: 20 
}
//การจะสร้างตัวแปรใหม่ที่มี isRich อยู่ด้วยโดยที่เราไม่ต้องการจะแก้ไขตัวแปรเดิม
const newPerson = {...person, isRich: true} //สร้างตัวแปร newPerson จากนั้น ...person (คือการเอาค่าใน Obj มาใส่แทน)ตัวแปรเก่า (ในที่นี้คือ person) และตามด้วยค่าใหม่ที่ต้องการเพิ่มคือ isRich: true

console.log(newPerson); */

//Ex.2 rest operator คือการส่งค่าตัว Array มาทำงานใน function
/*const person = {
    id: 1,
    name: 'wachirawit',
    age: 20 
}
const newPerson = {...person, isRich: true} 
const {name, isRich,...other } = newPerson;
console.log(name);
console.log(isRich);
console.log(other);
console.log(other.id);



const nums = [1,2,3,4]
const numsWithFive = [...nums, 5]
console.log(numsWithFive)*/

//class
/*class Person {
    constructor(id,name,age){
    this.id = id;
    this.name = name;
    this.age = age;
    }
}

const person = new Person(1, 'jele', 20);
console.log(person); */


//pure function
/* const depth = 100;
const calculateArea = (width, height) => {
    return width * height * depth;
}

const result = calculateArea(8, 8);
console.log(result); */


// arrow function (pure function)
/*const lastName = 'Mool-ang'
const fullName = (name) => {
    return name + ' ' + lastName;
}

const result = fullName('Wachirawit');
console.log(result); */

//Method --> map, filter, find/findindex, reduce

//array.map
//Ex.1
/*const nums = [1, 2, 3, 4];
for(let i = 0; i < nums.length; i++) {
    nums [i] += 5;
}

console.log(nums); */
//โดยการเขียนแบบนี้ไม่ใช่การเขียนแบบ functional programming เพราะว่าค่า nums มีการเปลี่ยนแปลงซึ่งอยู่นอก scope

const nums = [1, 2, 3, 4]
const newNums = nums.map(num => num += 5);

console.log(nums);
console.log(newNums);

const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);

const numberTwo = nums.find(num => num ===4);
console.log(numberTwo);

const index = nums.findIndex(num => num ===4);
console.log(index);

const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum);

//asynce await
const requestData = async () => {
    const result = await fetch('htt://jsonplaceholder.typicode.com/posts');
    const data = await result.json()

    console.log(data);
    return data;
}

const data = requestData