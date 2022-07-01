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

//let gender = prompt('Male or Female 을 입력');
let gender = 'Female'
console.log(gender);

let objAry = JSON.parse(data); //string -> object
console.log(objAry);

//표 table 형태로 출력
let result = objAry.reduce(function (accum,curr,idx) {
    //방법1
    accum = '<table>'
    for (let i of objAry) {
        if (gender == i.gender) {
            accum += '<tr>'
            accum += '<td>' + i.last_name + '</td>'
            accum += '<td>' + i.email + '</td>'
            accum += '<td>' + i.gender + '</td>'
            accum += '<td>' + i.salary + '</td>'
            accum += '</tr>'
        }
    }
    accum += '</table>'

    //방법2
    // if(idx == 0){
    //     accum += '<table>'
    // }
    // if(curr.gender == gender){
    //     accum += '<tr>'
    //     for(let field in curr){
    //         accum += '<td>'+curr[field]+'</td>'
    //     }
    //     accum += '</tr>'
    // }
    // if(idx == objAry.length -1){
    //     accum += '</table>'
    // }
    return accum;
}, '');
document.write(result)