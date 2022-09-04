var b = 0;
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
} 