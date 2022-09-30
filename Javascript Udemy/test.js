// function button() {
//     console.log("Hello JavaScript!");
// }


var car = {
    color: 'red',
    year: 2022,
    make: 'Corvette',
    brand: 'Chevrolet',
    price: 50000
};

//document.querySelector('h2').innerHTML = car.color + ' ' + car.make;

/*var myArray1 = ['wachirawit','Mool-ang','20','false']; //Array คือการเก็บหลายค่าในตัวแปรเดียว 
myArray1[myArray1.length] = "Last"; //(ชื่อ Array [myA])
myArray1[2] = 40;

const weeks = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
*/

var myArray1 = ['wachirawit', 'mool-ang', 20, true];
var varl1 = myArray1.push('test');

console.log(myArray1);
console.log(varl1);

console.log(typeof (myArray1));

const now = new Date(); {

    console.log(now);
}

var x = 20;
x = 30;
console.log(x);


let y = 40;
y = 50;
console.log(y);

let a = "10";
let b = "10";

console.log(a + b);
console.log(parseInt(a) + parseInt(b)); //parseInt เป็นคำสั่งที่แปลงข้อมูลจาก string --> number

let myArray = ["red", "green", "blue", 23, true]
console.log(myArray[3]);
console.log(myArray);
console.log(myArray.length);
console.log(typeof (myArray[3]));

myArray.push("black");
console.log(myArray);
console.log(myArray.length);

let obj = {
    name: "Wachirawit",
    lastName: "Mool-ang",
    age: 20
}

console.log(obj);
console.log(typeof (obj));
console.log(obj["name"]);
console.log(obj.name, obj.lastName);

let un = undefined;
console.log(typeof (undefined));

let nu = null;
console.log(typeof (null));

console.log(un == nu);
console.log(un === nu);

function math(x, y) {
    return x + y;
}

console.log("result", math(10, 20));
function log(data) {
    console.log(data);
    return;
}
/*บรรทัด 85 หรือจะเขียนเป็นแบบนี้ก็ได้เหมือนกัน
let u = math(10, 20);
console.log("result, u");
*/
log("test");

function plus(x, y) {
    return math(x, y);
}

function find(w, h, t) {
    if (t == "square")
        return w * h;

    else
        return Math.PI * x * x;
}

console.log(plus(3, 5));
console.log(find(4, 8, "square"));
console.log(find(10));

let myArray2 = ["string",
    20,
    true,
    null,
    { name: "wachirawit" },
    ["mool-ang"]];
//Array มีค่านับที่ index หรือที่ 0
//การเขียน Array จะเขียนแบบด้านล่างก็ได้(ไม่แนะนำ)
let myArray3 = new Array("string", 12, false);
console.log(myArray3);

console.log(myArray2[0]);
for (let i = 0;
    i < myArray2.length;
    i++) {
    console.log("index: " + i, myArray2[i]);
}

myArray2[3] = "jele"; //เป็นการแทนค่า array ตัวนั้น
// console.log(myArray2);

myArray2.push("age"); //เป็นการเพิ่มค่า array(โดยจะต่อตัวท้ายสุดขของ index)
console.log(myArray2);

myArray2.pop(); 
console.log(myArray2); //เป็นการลบค่าตัวสุดท้ายของ index ออก

myArray2.unshift("Hello add 0 index"); //เป็นการเพิ่มค่าที่ 0 ของ index(เพิ่มค่าด้านหน้าสุด)
 
myArray2.shift(); //เป็นการย้าย obj index(0)ออกไปจากนั้น obj ตัวอื่นๆก็จะขยับแทนที่

/*myArray2.map((myVal, index) =>{
    console.log("This is index:", index, "=", myVal); //Arrow function เป็นการประกาศ Function อีกแบบหนึ่ง
    //map คือการ
})*/

let myArray4 = [
    {name: "test-checking"},
    {name: "test-checking"},
    {name: "test-checking"},
    {name: "test-checking"}
]

let myNewArray4 = myArray4.map ((myVal2, index) =>{
    return myVal2.name;
})
console.log(myNewArray4);
