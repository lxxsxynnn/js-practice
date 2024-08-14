function outer(){
    var outerVal = '외부 함수';
    
    function inner() {
        var innerVal = '내부 함수';

        console.log(outerVal, innerVal);
    }

    //innerVal은 inner() 안에 있기 때문에 스코프가 일치하지 않아 inner() 외부에서 접근 불가
    // console.log(outerVal, innerVal);
    inner();
}

outer();

//inner()는 outer() 내부에 있기 때문에 이것도 outer() 외부에서 접근 불가
//outer()의 helper 함수로 사용됨
// inner();