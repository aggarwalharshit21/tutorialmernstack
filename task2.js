function sortStringAlphabetically(str) {
    let sortedString = str.toLowerCase().split('').sort().join('');
    return sortedString;
}

let inputString = 'webmaster';
let sortedString = sortStringAlphabetically(inputString);
console.log(sortedString); // Output: 'abeemrstw'
