var A = prompt("Num 1");
var B = prompt("Num 2");
var A = parseInt(A)
var B = parseInt(B)
alert("Welcome to my first Calculator Designed with JavaScript. A for Addition , S for Substraction, M for Multiplication, MS for Modulus Operation, D for Division")
var C = prompt(" What operation do you want to perform. Both uppercase and lowercase is allowed").toUpperCase();



function calc() {
    switch (C) {
        case "A":
            return (A + B)
            break;
        case "S":
            return (A - B)
            break;
        case "MS":
            return (A % B)
            break;
        case "M":
            return (A * B)
            break;
        case "D":
            return (A / B)
            break;
    }

}


var E = calc();
document.write("The answer is = " + E);

// function check() {
//     while (C != "A", "a", "s", "ms", "m", "d",
//         "B", "S", "MS", "D", "M") {
//         alert("this is invalid ,cchoose again ");
//         var C = prompt(" What operation do you want to perform. Both uppercase and lowercase is allowed").toUpperCase();

//     }
// }
// check();