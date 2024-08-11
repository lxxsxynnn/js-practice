console.log(hello);
console.log(hi);

console.log(hello(`송은석`));
console.log(hi(`송은석`));

function hello(name){
    return `${name}님 안녕하세요`;
}

var hi = function(name){
    return `${name} 안녕`;
};