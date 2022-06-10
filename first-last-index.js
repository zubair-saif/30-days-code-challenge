

let fun = function (str) {
    let first = ''
    let last = '';
    let len = str.length;
    for (let i = 0; i < len; i++) {

        if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
            first += str.charAt(i);
            last += str[len - 2];
            break;
        }
    }
    console.log('first=' + ' ' + first, 'last=' + ' ' + last);

}
fun('kamrank');

// write a function that finds the first and last non repeating alphabets from a string