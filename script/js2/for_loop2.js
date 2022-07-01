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

let ary = JSON.parse(data);
console.log(ary);
//forEach
ary.forEach(elem => {
    if (elem.id % 2 == 1 && elem.gender == 'Male') console.log(elem)
});

//1
let femaleAry = ary.filter(elem => elem.gender == 'Female');
console.log(femaleAry);
//2
femaleAry = ary.filter(elem => {
    if (elem.gender == 'Female') console.log(elem)
})
console.clear()
//map,filter
let newCompany = ary.map(elem => {
    let newElem = {};
    newElem.nId = elem.id;
    newElem.name = elem.first_name + ',' + elem.last_name;
    newElem.nSalary = elem.salary * 1.5;
    newElem.isNew = elem.salary > 4000 ? false : true;
    return newElem;
}).filter(elem => elem.isNew);
//.forEach(elem => console.log(elem));
console.log(newCompany);

//newCompany 급여의 합
let result = newCompany.reduce((accum, curr) => {
    //console.log(accum,curr)
    return accum + curr.nSalary;
}, 0);
console.log("급여의 합 : " + result)