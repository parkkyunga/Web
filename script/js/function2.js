//==>> const sumAry= function(){}와 같음
function sumAry(ary) { //매개변수
    let result = 0;
    for (let i = 0; i < ary.length; i++) {
        result += ary[i];
    }
    return document.write(result);
};
let args = [1, 2, 3, 4, 5]; //매개값
sumAry(args); //실행문호출

let arrNum = [1, 2, 3];
sumAry(arrNum);

//함수표현식
const sum = function (num1, num2) {
    if (!num1) { //undefined일때 -> null,0,'' ...-> false의미함
        num1 = 0;
    }
    num2 = num2 == undefined ? 0 : num2; //삼항연산자
    return num1 + num2;
};
console.log(sum(9)); //함수정의문()

const sum2 = sum; //함수정의문
console.log(sum2(1, 2));

console.log(sumAry);

//함수표현식
const sayHello = function (name) {
    return 'hello ' + name;
}
//화살표함수
const sayHello2 = name => 'hello ' + name
//매소드의 매개값(콜백함수)
console.log(sayHello('jin'));

let arr = ['namjoon', 'hope', 'jung kook'];
arr.forEach(function (val /*, idx, ary*/ ) { //arr의 각각의 요소에 대해서 ~ 하시오
    console.log(sayHello2(val));
})
//화살표함수
arr.forEach(val => console.log(sayHello2(val)));

//문제풀어보기
arrNum = [29, 34, 12, 55, 29, 42];
//1.배열각요소중 짝수의값만 더하도록 sumEven(args)
function sumEven(arrNum) {
    let sum = 0;
    arrNum.forEach(function (val) {
        if (val % 2 == 0) {
            sum += val;
        }
    })
    return sum;
}
//2.배열 인덱스중 홀수번째 요소의 합 sumOdd(args)
function sumOdd(arrNum) {
    let sum = 0;
    arrNum.forEach(function (val, idx) {
        if (idx % 2 == 1) {
            sum += val
        }
    })
    return sum;
}
console.log(sumEven(arrNum));
console.log(sumOdd(arrNum));
