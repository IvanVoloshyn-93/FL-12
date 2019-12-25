/* eslint-disable no-magic-numbers */
let a = +prompt("Enter number 'a'");
let b = +prompt("Enter number 'b'");
let c = +prompt("Enter number 'c'");
if (a === 0) {
    console.log('Invalid input for *a*');
}
if (isNaN(a || b || c) === true) {
    console.log('Invalid input data');
} 
let D = b * b - 4 * a * c;
if (D === 0) {    
    let x = -b / 2 * a;
    console.log('x = ' + x);
} else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log('x1 = ' + x1 + ' x2 = ' + x2);
} else {
    console.log('no solution');
}