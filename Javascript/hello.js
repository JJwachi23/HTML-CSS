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
// let lotto_number = prompt("Please enter a number");
// let random_number = Math.floor(Math.random() * 100 );

// console.log(lotto_number);

// document.getElementById("random").innerHTML = random_number;

// if (lotto_number == random_number){
//     document.getElementById("result").innerHTML = "Congratulations you won!"
// }

// else {
//     document.getElementById("result").innerHTML = "Sorry, you didn't get the prize."
// }

// let age = prompt("อายุของคุณ :");

// if (age == 12){
//     console.log("Go back to sixth grade. ");
// }

// else if (age == 13){
//     console.log("Go back to middle school.");
// }

let score = prompt("Your score :");
if (score >= 80){
    document.getElementById("result").innerHTML = "you got a grade A"
}

else if (score >= 70){
    document.getElementById("result").innerHTML = "you got a grade B"
}

else if (score >= 60){
    document.getElementById("result").innerHTML = "you got a grade C"
}

else if (score >= 50){
    document.getElementById("result").innerHTML = "you got a grade D"
}

else if (score <= 49){
    document.getElementById("result").innerHTML = "you got a grade F"
}

