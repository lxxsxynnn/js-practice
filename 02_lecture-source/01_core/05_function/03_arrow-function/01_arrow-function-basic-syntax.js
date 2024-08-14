var message;

message = function () {
    return "hello world!";
};
console.log(message());

message = () => {
    return "Arrow Function";
};

console.log(message());

//실행문이 한 줄이면 중괄호 블럭도 생략 가능
message = () => "Arrow Functions are simple";
console.log(message());

//매개변수를 전달받을 때의 화살표 함수
message = (val1, val2) => "Arrow " + val1 + val2;
console.log(message('Function', '!'));

//매개변수가 한 개일 경우 매개변수 선언 괄호 생략 가능
message = val => "Arrow " + val;
console.log(message('Funcions are good'));