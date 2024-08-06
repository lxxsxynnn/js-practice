var obj = null;

var val = obj?.value; //obj가 null이 아닐 때만 참조 연산 수행

console.log(val);

var str = '';
// var len = str && str.length; 대신에
var len = str?.length; //사용 가능(단축 표현식의 업그레이드 된 문법)
console.log(len);