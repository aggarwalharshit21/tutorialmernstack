function reverseNumber(num) {
    let reversed = parseInt(num.toString().split('').reverse().join(''));
    return reversed;
}

let x = 32243;
let result = reverseNumber(x);
console.log(result); // Output: 34223
