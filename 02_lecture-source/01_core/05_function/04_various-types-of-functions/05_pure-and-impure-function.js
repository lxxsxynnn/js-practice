var cnt = 0;

function increase(n){
    return ++n;
}

cnt = increase(cnt);
console.log(cnt);

cnt = increase(cnt);
console.log(cnt);

function decrease(n){
    return --n;
}

//이렇게 직접적으로 cnt를 감소시키면 cnt 값이 어떻게 변경되었는지 함수만 보고 파악하기 어려움
//=> 외부 상태를 변경시키는 함수는 사용을 지양하는 것이 좋음
cnt = decrease(cnt);
console.log(cnt);

cnt = decrease(cnt);
console.log(cnt);