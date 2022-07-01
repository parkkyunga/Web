let today = new Date('2022-06-19');
today = new Date(2022, 5, 0); // 5월마지막날

console.log(`올해는 ${today.getFullYear()}년도`)
console.log(`이번달은 ${today.getMonth()+1}월 입니다`) //1월이 0부터 시작 
console.log(`오늘은 ${today.getDate()}일 입니다`)
console.log(`오늘은 ${today.getDay()}요일 입니다`) //0~6 , 0일요일 6토요일

let day = '';
switch (today.getDay()) {
    case 0:
        day = '일'
        break
    case 1:
        day = '월'
        break
    case 2:
        day = '화'
        break
    case 3:
        day = '수'
        break
    case 4:
        day = '목'
        break
    case 5:
        day = '금'
        break
    case 6:
        day = '토'
        break
}
console.log(`오늘은 ${day}요일 입니다`)

let year = 2021; //2021년
let month = 6; // 6월
makeCalender(year, month);

function makeCalender(y, m) {
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    let str = '';
    let dayInfo = new Date(y, m - 1).getDay();
    let lastDateInfo = new Date(y, m, 0).getDate();
    str += `<table><caption>${m}월 달력</caption>`
    str += '<tr>'
    for (let day of days) {
        str += '<th>' + day + '</th>'
    }
    str += '</tr><tr>'
    for (let i = 0; i < dayInfo; i++) {
        str += '<td></td>'
    }
    for (let i = 1; i <= lastDateInfo; i++) {
        str += '<td>' + i + '</td>'
        if ((dayInfo + i) % 7 == 0) {
            str += '<tr></tr>'
        }
    }

    str += "</tr></table>"
    document.write(str)
}