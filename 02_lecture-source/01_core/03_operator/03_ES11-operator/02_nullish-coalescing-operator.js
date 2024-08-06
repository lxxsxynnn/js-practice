var test = null ?? '기본값';
console.log(test);

var value = '' ?? '기본값';
console.log(value);

var value = '' || '기본값'; // or를 쓰면 ''를 null로 봐서 '기본값이 출력됨
//-> ''를 빈 문자열로 취급하고 싶으면 ??를 써야 함
console.log(value);