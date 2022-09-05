/* var b = 0;
var c = add(50, 100);
function message(a){
    var b = 0;
    b++;
    var output = a + ' ' + b;
    document.querySelector('h2').innerHTML = output;
    console.log(a);
}

function add (a, b){
    return a + b;
} */

var person = {};
person.first = "Laurence";
person.last = "Svekis";
person.message = function(){
    return 'Hello' + this.first;
}

person.age = 30;
person.alive = true;

function fun1(){
    console.log('fun1');
}

var fun2 = function (){
    console.log('fun2');
}

