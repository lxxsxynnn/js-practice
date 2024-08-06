console.log('apple' || 'banana');
console.log(false || 'banana');
console.log('apple' || false);


console.log('apple' && 'banana');
console.log(false && 'banana');
console.log('apple' && false);

var num = 1;

if(num % 2 == 0) {
    console.log('Even Number');
} else {
    console.log('Odd Number');
}

num % 2 == 0 && console.log('Even Number');
num % 2 == 0 || console.log('Odd Number');

var obj = null;

// var val = obj.value;

var val = obj && obj.value;