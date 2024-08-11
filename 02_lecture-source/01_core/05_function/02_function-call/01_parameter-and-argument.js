function hello(name){

    console.log(name);
    
    return `${name}님 안녕하세요`;
}

// console.log(name);

hello('송은석');
console.log('test');

// function hello(name){
//     console.log(name);
// }

var result = hello('송은석');
console.log(result);

result = hello();
console.log(result);


function hello(name){

    console.log(arguments[1]);
    
    return `${name}님 안녕하세요`;
}

result = hello('송은석', '서강준');
console.log(result);

function hi(name){
    // if(arguments.length !==1 || typeof name !== 'string'){
    //     throw new TypeError('Parameter should be the one and is a string Value')
    // }
    return `${name} 안녕`;
}

result = hi();
console.log(result);