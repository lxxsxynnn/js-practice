console.log(10 + '20');

console.log(`10 + 20 : ${10 + 20}`);

console.log(1 + '');
console.log(typeof(1 + ''));

console.log(NaN + '');
console.log(typeof(NaN + ''));

console.log(true + '');
console.log(typeof(true + ''));

console.log(null + '');
console.log(typeof(null + ''));

console.log(undefined + '');
console.log(typeof(undefined + ''));

//Symbol()은 String으로 변환이 불가함
// console.log(Symbol() + '');
// console.log(typeof(Symbol() + ''));

console.log({} + '');
console.log(typeof({} + ''));

console.log([] + '');
console.log(typeof([] + ''));

console.log(function() {} + '');
console.log(typeof(function() {} + ''));