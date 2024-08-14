//함수를 정의함과 동시에 실행할 수 있게 함
(function() {
    console.log('익명 즉시 실행 함수! 함수 정의와 동시에 호출');
})();

// 익명함수에 이름을 붙이고 매개변수 전달하기
(function hello(name){
    console.log(`Helloooooooooo ${name}!`)
})();

//이름을 붙여도 함수 재사용이 불가함
// hello('송은석');
// hello is not defined 라고 나옴

//호출 구문에 매개변수를 전달해서 사용해야 함
(function hello(name){
    console.log(`Helloooooooooo ${name}!`)
})('송은석');