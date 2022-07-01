function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(10, 20));
console.log(sum('10', '20'));

function minus(v1, v2) {
    return v1 - v2;
}
console.log(minus(10, 2));
console.log(minus('10', '2')); //문자열로들어왔지만 숫자로알아들음 = 자동형변환

function sumAry(ary) {
    let sum = 0;
    for(let i of ary){
        sum += i
    }
    return sum;
}
let numAry = [20, 21, 4, 75, 3, 14, 300];
let result = sumAry(numAry);
console.log('배열의 합 : ' + result)

result = 0;
numAry.forEach(function(val,idx,ary) {//익명함수
    console.log('hi');
    console.log(val,idx,ary)
    if(val % 2 == 1){
        result += val;
    }
}); // 메소드의 매개값으로 함수:콜백함수.
console.log('배열 홀수값의 합 : '+result);    
