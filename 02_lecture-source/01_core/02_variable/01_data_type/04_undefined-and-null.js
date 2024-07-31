/* var로 선언한 변수는 암묵적으로 undefined로 초기화 
 * > 변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined 반환
 * 기본자료형에서 직접 자료를 저장하는 상황에서 아무것도 저장하지 않을 떄 
 * undefined는 자바스트립트 엔진이 변수를 초기화할 때 사용하는 값 
 * > 개발자가 의도적으로 변수에 할당하는 것은 지양할 것
 * */

var undef;

console.log(undef);
console.log(typeof undef);

/* 참조형 변수에서 변수에 값이 없다는 것을 의도적으로 명시할 때 사용
 * 이전에 할당되어 있던 값에 대한 참조를 명시적으로 제거하지 않는 것을 의미
 * 자바스트립트 엔진은 누구도 참조하지 않는 메모리 공간에 대해 가비지 콜렉션을 수행
 * */

var nullVal = 'something';
console.log(nullVal);
nullVal = null;
console.log(nullVal);
console.log(typeof nullVal);