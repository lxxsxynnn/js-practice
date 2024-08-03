var test;

console.log(typeof test);

test = 1;
console.log(typeof test);

test = 'JavaScript';
console.log(typeof test);

test = true;
console.log(typeof test);

test = null;
console.log(typeof test);

test = Symbol();
console.log(typeof test);

test = {};
console.log(typeof test);

test = [];
console.log(typeof test);

test = function(){};
console.log(typeof test);

if(typeof test === 'function'){
    console.log('test is a function')
} else {
    console.log('test is NOT a fuction')
}

/* 동적 타입 언어의 단점을 보완하기 위한 변수 사용 시 주의점 
 * 1. 변수는 꼭 필요한 경우에 한해 제한적으로 사용
 * 2. 변수의 유효 범위(스코프)를 최대한 좁게 만듦
 * 3. 전역 변수 지양
 * 4. 변수보다 상수를 사용해 값의 변경 억제
 * 5. 변수명을 통해 변수의 목적이나 의미를 파악할 수 있도록 함
 * */