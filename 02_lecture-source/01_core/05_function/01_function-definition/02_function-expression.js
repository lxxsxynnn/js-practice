function hello(name){
    return `${name}님 안녕하세요`;
}
console.log(hello('송은석'));

var calc = function add(a, b){
    return a + b;
};
console.log(calc(3, 18));
console.log(add(3, 18)); //함수의 호출은 변수의 이름으로 이루어짐