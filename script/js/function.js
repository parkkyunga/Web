function sum(num1,num2) {
    let result = num1 + num2;
    return document.write(result);
}
sum(11,22);

function makeTd(val){
    return '<td>'+val+'</td>'
}
function makeTr(val){
    return '<tr>'+val+'</tr>'
}

let values = ['hong','park','kim'];
let str = '<table>'
for(let val of values){
    let td = makeTd(val);//<td>hong</td>
    str += makeTr(td);
}
str += '</table>'
document.write(str)