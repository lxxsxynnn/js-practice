var hello = function() {
    return `Hellooooooooooo!`;
}

var obj = { hello };

function repeat(func, count) {
    for(var i = 0; i < count; i++) {
        console.log(func());
    }

    return function() {
        console.log(`${count}번 반복 완료`);
    }
}

var returnFunction = repeat(obj.hello, 5);
returnFunction();

//함수는 값으로 취급될 수 있는 1급 객체
//변수에 저장될 수도, 객체에 포함될 수도
//매개변수로 사용될 수도, 리턴 값으로도 사용될 수 있음