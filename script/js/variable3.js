let str = '';
str = '<table>';
for (let i = 1; i < 10; i++) {
    str += '<tr>'
    str += '<td>' + 2 + '</td>';
    str += '<td> x </td>';
    str += '<td>' + i + '</td>';
    str += '<td> = </td>';
    str += '<td>' + (2 * i) + '</td>';
    str += '</tr>'
};
str += '</table>';
document.write(str);


let mon = 5;
showCalendar(mon);
function showCalendar(month){
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    let num = '';
    num = '<br><table><caption>'+month+'월달력</caption><tr>';
    for (let day of days) {
        num += '<th>' + day + '</th>'
    }
    num += '</tr><tr>';
    let vtd = getFirstDay(month);
    for (let i = 1; i < vtd; i++) {
        num += '<td></td>'
    }
    
    for (let i = 1; i <= getLastDay(month); i++) {
        num += '<td>' + i + '</td>'
        if ((vtd-1+i) % 7 == 0) {
            num += '<tr>'
        }
    }
    num += '</tr></table><br>';
    document.write(num);
}


console.log(getFirstDay(6));

function getLastDay(mon){
    //1,3,5,7,8,10,12월 --31
    //4,6,9,11월 -- 30
    //2월 --28
    switch (mon) {
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;   
        default: 
            return 31;     
    }
}

function getFirstDay(mon) {
    switch (mon) {
        case 1:
        case 10:
        case 12:     
            return 7;
        case 2:
        case 3:
        case 11:        
            return 3;
        case 4:
        case 7:
            return 6;
        case 5:
            return 1;    
        case 6:
            return 4;    
        case 8:
            return 2;      
        case 9:
            return 5;  
    }
}