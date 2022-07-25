/* document.write("<h2>Hello World!</h2>");    //แสดงเป็นประเภท string หรือ HTML 

alert("Hello Wachirawit!"); // เป็นการแจ้งเตือนผู้ใช้งานเว็บ

console.log("wachirawit mool-ang"); // เป็นการพิมพ์ข้อความหรือตัวแปร ใช้ debug ค่าต่างๆ 

let name //สร้างตัวแปรแต่ไม่มีการกำหนดค่า
name = "wachirawit" //กำหรดข้อความลงไปในตัวแปร 

let _for = "JavaScript", age = 20, Name = "wachirawit";

console.log(_for);
console.log(age);
console.log(Name);

console.log("อายุ = ", age);*/

/*let _for = "Jele", age = 20, Name = "Wachirawit";
console.log("Before", _for);

_for = "สอนเขียนเว็บ";
console.log("After", _for); // let สามารถเปลี่ยนค่าตัวแปรได้ */

/* const Name = "wachirawit"   // const: constant หมายถึง ค่าคงที่
console.log(Name);

Name = "jele"
console.log(Name);  */

/* ***** ชนิดของตรวจข้อมูล
let FirstName = "wachirawit"
let CheckName = true;
let age = 20;
let Name = "20"+10;

console.log(typeof(FirstName)); // typeof เป็นคำสั่งเช็คประเภทของข้อมูล
console.log(typeof (CheckName));
console.log(typeof(age));
console.log(Name); */

//แปรงชนิดข้อมูล Type Conversion
let money = 100;
let FirstName = "wachirawit";
let price = parseInt("199.99"); //parseInt() คือการแปรงข้อมูลประเภท string --> number
let price1 = +"199.99"; // เครื่องหมาย + เติมด้านหน้าคือการแปรงข้อมูลประเภท string --> number
let price2 = 99.99+""; // +"" เป็นการแปลง number --> string
let price3 = 99.99.toString() // .toString() แปรง number --> string

console.log(typeof(price));
console.log(typeof(price1));
console.log(typeof(price2));
console.log(typeof(price3));
