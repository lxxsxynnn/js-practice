function increase(value) {
    return value + 1;
}

function decrease(value) {
    return value - 1;
}

function apply(func, value) {
    return func(value);
}

console.log(apply(increase, 5));
console.log(apply(decrease, 5));

console.log(apply(function(value) {return value **2;}, 5));

console.log([3, 2, 1, 5, 4].sort(function(left, right){ return right - left; }));