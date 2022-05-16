// alert("Hello");

// var FirstName = "Wachirawit";
// var LastName = "Mool-ang";
// var age = 20;
// console.log(typeof age);
// console.log(typeof false);
// console.log(typeof FirstName );

// console.log(FirstName + LastName);

// console.log(FirstName - LastName);
// NaN: Not a Number ไม่ใช่ค่าตัวเลข

// {
//     var FirstName = "wachirawit"; 
//     // console.log(FirstName);
// }

// alert(FirstName);
//  var  จะไม่มี Scope หรือเวลาประกาศตัวแปร ถ้าจะเรียกใช้ก็สามารถเรียกใช้ได้เลยโดยไม่ต้องทำงานภายใน {}

// /............................................../ 
// {
//     let LastName = "mool-ang" 
// }
// alert(LastName);
// let มี Scope ในการทำงาน หรือเวลาประกาศตัวแปรทำงานภายใน {}


// ****************** Random Number Program and store values

// let name = prompt("Please enter a message..");
// console.log(name);

// let lotto_number = prompt("Please enter a number");
// console.log(lotto_number);
// console.log(Math.floor(Math.random() * 100));

// let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ");
// document.getElementById("value").innerHTML = lotto_number;
// console.log(lotto_number);

// document.getElementById("result").innerHTML = Math.floor(Math.random() * 100)



// ******************Boolean true, false การเปรียบเทียบค่า
// console.log(10 == 10);
// console.log(10 == 20);

// console.log("10" == 10);
// ในภาษา Javascript == เป็นการเปรียบเทียบค่า ฝั่งซ้าย เท่ากับ ฝั่งขวา โดยจะไม่สนชนิดของข้อมูล

// console.log("10" === 10);
// ในภาษา Javascript === เป็นการเปรียบเทียบค่า ฝั่งซ้าย เท่ากับ ฝั่งขวา และชนิดของข้อมูล

// console.log("hello" == "Hello");
// ในภาษา Javascript ตัวพิมพ์เล็กพิมใหญ่ คือคนละตัวกัน

// console.log("5" != "5");
// != คือเครื่องหมาย ไม่เท่ากับ

// console.log("hello" != "Hello");
// console.log("4" != 4);

// console.log("5" !== 5);
// !== เป็นการเปรียบและ ชนิดของข้อมูล

// console.log(10 > 5);
// console.log(10 < 5);

// console.log(10 >= 5);
// console.log(10 <= 5);

// ******************เกี่ยวกับการกำจัดอายุ if 
// let age = prompt("Please enter your Age to continue.");
// console.log(age);
// if(age >= 13){
//     document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/EHQ6fyGrdfg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"

    // HTML iframe ถ้า copy มาจะต้องใส่เครื่องหมาย \ (backslash) 
// }

// ***********************
let lotto_number = prompt("Please enter a number");
document.getElementById("random").innerHTML = (Math.floor(Math.random() * 100));

