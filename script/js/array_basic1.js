let names = [];
names.push('이희수')
names.push('인은지')
names.unshift('박소현')
names.splice(1, 0, '오지민')
names.splice(4, 0, '가윤', '경아')

console.log(names) //'박소현', '오지민', '이희수', '인은지', '가윤', '경아'

let newNames = []
names.forEach(function (val, idx) {
    if (idx % 2 == 0) //홀수만 보여줘
        newNames.push(val);
})

console.log(newNames)

//맵핑
let mapAry = names.map(function (val, idx, ary) {
    if (idx % 2 == 0) {
        return val;
    }
}); //mapping A -> B
console.log('mapAry -> ' + mapAry)

//필터,조건에 만족하는 값들만 새로운배열생성 undefined제거
let filterAry = mapAry.filter(function (val, idx) {
    return val;
});
console.log('filterAry -> ' + filterAry)

//map() + filter()
let resultAry = names.map((val, idx) => {
    if (idx % 2 == 0) 
    newNames.push(val);
}).filter((val,idx) => {
    return val;
})
console.log('resultAry -> ' + resultAry)