let data = `[{"id":1,"first_name":"Yettie","last_name":"Wyldbore","email":"ywyldbore0@china.com.cn","gender":"Female","salary":3190},
{"id":2,"first_name":"Sonnie","last_name":"Andrusov","email":"sandrusov1@quantcast.com","gender":"Male","salary":2265},
{"id":3,"first_name":"Towney","last_name":"Mangenet","email":"tmangenet2@intel.com","gender":"Male","salary":4884},
{"id":4,"first_name":"Fowler","last_name":"Tolchar","email":"ftolchar3@mapy.cz","gender":"Male","salary":2062},
{"id":5,"first_name":"Jerri","last_name":"Saylor","email":"jsaylor4@bandcamp.com","gender":"Male","salary":2318},
{"id":6,"first_name":"Raine","last_name":"Trout","email":"rtrout5@instagram.com","gender":"Female","salary":4128},
{"id":7,"first_name":"Sybila","last_name":"Rittmeyer","email":"srittmeyer6@shinystat.com","gender":"Female","salary":2392},
{"id":8,"first_name":"Augie","last_name":"Caine","email":"acaine7@fema.gov","gender":"Male","salary":2726},
{"id":9,"first_name":"Ty","last_name":"Scryne","email":"tscryne8@skyrock.com","gender":"Male","salary":4609},
{"id":10,"first_name":"Ninette","last_name":"Marcos","email":"nmarcos9@uol.com.br","gender":"Female","salary":1597},
{"id":11,"first_name":"Carlynne","last_name":"Rushworth","email":"crushwortha@geocities.com","gender":"Female","salary":4868},
{"id":12,"first_name":"Genevieve","last_name":"Jikylls","email":"gjikyllsb@printfriendly.com","gender":"Female","salary":4645},
{"id":13,"first_name":"Humfrid","last_name":"Towsie","email":"htowsiec@wsj.com","gender":"Male","salary":2109},
{"id":14,"first_name":"Marcy","last_name":"Haithwaite","email":"mhaithwaited@technorati.com","gender":"Non-binary","salary":2470},
{"id":15,"first_name":"Edouard","last_name":"Ramelot","email":"eramelote@senate.gov","gender":"Male","salary":1087}]`

let objAry = JSON.parse(data); //json.parse() : 문자열->오브젝트
console.log(data)
console.log(objAry)
console.clear()
let over3000 = objAry.filter((val, idx) => {
    return val.salary >= 3000 //조건에 맞는걸필터링하겠다
}).map((val, idx) => {
    //A->B
    let obj = {};
    obj.name = `${val.last_name},${val.first_name}`
    obj.sal = val.salary
    return obj
})
console.log(over3000)

//gender female값가져와서 sal평균값
let avg, sum, cnt;
sum = 0;
cnt = 0;
objAry.filter(val =>
    val.gender == 'Female'
).forEach(val => {
    sum += val.salary
    cnt++
});
avg = sum / cnt
console.log(`여자사원의 급여평균 ${avg}`)

let salaries = [];
salaries = objAry.map(val => val.salary)
console.log(salaries)

function getMaxValue(ary) {
    //배열중가장큰값
    let max = 0;
    for (let i of ary) {
        if (i > max) {
            max = i
        }
    }
    return max;
}
let maxVal = getMaxValue(salaries);
console.log(`가장 큰 값 : ${maxVal}`)

function sortAscend(ary) {
    //오름차순정렬
    let tmp = 0;
    for (let i = 0; i < ary.length; i++) {
        for (let j = 0; j < ary.length; j++) {
            if (ary[i] < ary[j]) {
                tmp = ary[i]
                ary[i] = ary[j]
                ary[j] = tmp;
            }
        }
    }

    return tmp;
}
sortAscend(salaries)
console.log("오름차순정렬 : " + salaries)

//reduce()
//map,filter method;
salaries.reduce(function (accum, curr, curIdx, ary) {
    console.log(accum, curr, curIdx, ary)
    return curr;
}, 0)

//console.clear()
result = salaries.reduce(function (accum, curr) {
    accum.push(curr); //배열에추가
    return accum
}, []) //accum = [1],[1][2],[1][2][3]
console.log(result)

console.clear()

result = ['apple', 'banana', 'cherry'].reduce((accum, curr, currIdx, ary) => {
    console.log(accum, curr);
    if (currIdx == 0) {
        accum = '<ul>'
    }
    accum += `<li>${curr}</li>`
    if (currIdx == ary.length - 1) {
        accum += '</ul>'
    }
    console.log(accum)
    return accum;
}, '')
document.write(result);

//exam최대값반환
result = [3, 2, 4, 1, 5].reduce(function (accum, curr) {
    let max = 0;
    if (max < curr) {
        max = curr
    }
    console.log('accum ' + accum + ' , curr ' + curr);
    return max;
}, Number.MIN_SAFE_INTEGER);
console.log('배열의 최대값 : ' + result);

//배열값의 합
result = [3, 2, 4, 1, 5].reduce((accum, curr) => accum + curr, 0);
console.log('배열의 합 : ' + result);

//평균
result = [3, 2, 4, 1, 5].reduce(function (accum, curr, idx, ary) {
    if (idx == ary.length - 1) {//마지막순번일경우에만
        return (accum + curr) / ary.length
    }
    return accum + curr
})
console.log('배열의 평균 : ' + result)