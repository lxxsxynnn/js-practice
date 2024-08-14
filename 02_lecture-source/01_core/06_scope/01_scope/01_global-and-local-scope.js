var x = 'global x';
var y = 'global y';

function outer() {
    var z = "outer's local z";

    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        var x = "inner's local x";

        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();
}

outer();

// console.log(x);
// console.log(y);
//z는 outer() 안에 선언된 변수에서 그 외부에서는 사용 불가
// console.log(z);