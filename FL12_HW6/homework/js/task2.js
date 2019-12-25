let a = prompt('Enter value triangle side a');
let b = prompt('Enter value triangle side b');
let c = prompt('Enter value triangle side c');
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers');
} else if (a <= 0 || a === '' || b <= 0 || b === '' || c <= 0 || c === '') {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    if (!(+a < +b + +c && +b < +a + +c && +c < +a + +b)) {
        alert('Triangle doesn’t exist');
    } else if (a === b && a === c) {
        console.log('Equilateral triangle');
    } else if (a === b && a !== c || b === c && b !== a || a === c && a !== b) {
        console.log('Isosceles triangle')
    } else {
        console.log('Scalene triangle');
    }
}
