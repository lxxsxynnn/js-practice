// function factorial(n){
//     return n * factorial(n-1);
// }

//아무 조건도 걸지 않으면 제귀 호출을 무한으로 반복해서 stack overflow 발생
// console.log(factorial(5));

//언젠가 재귀 호출을 멈출 수 있게 조건을 걸어줘야 함(보통은 If문 활용)
function factorial(n){

    if(n <= 1) return 1;

    return n * factorial(n-1);
}

console.log(factorial(5));