/*
some():조건을 만족하는 요소가 하나라도 있으면 true/false
every():조건을 만족하는 요소 true/false
find():찾기 ,findIndex():idx값반환
indexOf():배열요소->인덱스값반환
sort():정렬
split(구분자): 문자열 -> 배열
join(구분자) : 배열 -> 문자열
*/



//find
let result = names.find(function (elem, idx, ary) {
    return elem == '김나희'
})
console.log(result)
result = [6, 4, 3, 21, 14].find(elem => {
    return elem % 7 == 0;
})
console.log(result)
//some
result = [6, 4, 3, 21, 14].some((elem, idx, ary) => {
    console.log(elem, idx, ary)
    return elem > 20;
})
console.log(result) //만족하는값 하나라도 있으면true
//every
result = [6, 4, 3, 21, 14].every((elem, idx, ary) => {
    console.log(elem, idx, ary)
    return elem % 2 == 0;
})
console.log(result) //3,21만족못하기에 false
//math
console.clear()
let tempAry = [];
for (let i = 0; i < 5; i++) {
    let temp = parseInt(Math.random() * 10) + 1; //1~10까지임의의수

    console.log(temp);
    tempAry.push(temp);
}
//1.tempAry 배열값이 다 짝수인지 체크
result = tempAry.every(elem => {
    return elem % 2 == 0
})
console.log('전부 짝수인가요 : ' + result);
//2.tempAry 배열값중에서 3의배수존재하는지확인
result = tempAry.some(elem => {
    return elem % 3 == 0
})
console.log('3의 배수가 존재하나요 : ' + result);
//3.5보다 큰값있으면 그값을반환
result = tempAry.filter(elem => { //find는 하나만가져옴
    return elem > 5
})
console.log('5보다 큰 값 : ' + result);



//split
strAry = 'combinations'.split('');
let cnt = 0;
strAry.forEach(elem => {
    cnt += elem == 'n' ? 1 : 0;
    //console.log(cnt)
})
//reduce
cnt = strAry.reduce((accum, curr) => {
    accum += curr == 'n' ? 1 : 0;
    return accum;
}, 0)
//console.log('cnt : ' + cnt);