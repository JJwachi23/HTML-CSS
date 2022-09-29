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

console.log(typeof(myArray1));

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
console.log(typeof(myArray[3]));

myArray.push("black");
console.log(myArray);
console.log(myArray.length);

let obj = {
    name: "Wachirawit",
    lastName: "Mool-ang", 
    age: 20
}

console.log(obj);
console.log(typeof(obj));
console.log(obj["name"]);
console.log(obj.name, obj.lastName);

let un = undefined;
console.log(typeof(undefined));

let nu = null;
console.log(typeof(null));

console.log(un == nu);
console.log(un === nu);

function math (x, y) {
return x + y;
}

console.log("result", math(10, 20));
function log(data) {
    console.log(data);
    return;
}