/* symbol > 변경 불가능한 원시 타입의 값
 * 다른 값과 중복되지 않는 유일무이한 값, 이름 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용
 * Symbol 이외의 원시 값은 리터럴을 통해 생성하지만 심벌은 Symbol 함수를 통해 호출해 생성함
 * */

var key = Symbol('key');

console.log(key);
console.log(typeof key);

var obj = {};

/* 객체 타입
 * number, string, boolean, undefined, null, symbol 6가지 데이터 타입 이외의 값은 모두 객체 타입
 * */

console.log(obj);
console.log(typeof obj);