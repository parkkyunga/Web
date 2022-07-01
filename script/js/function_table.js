//테이블생성함수
function createTable(aryData){
    let fields = ['sname','age','height','weight'];
    let tag = '<table>';

    let head = createHead(fields);
    tag += head;

    let body = createBody(aryData);
    tag += body;

    tag+='</table>'
    return tag;
}

//헤더생성함수
function createHead(fields){
    let tag = '<thead><tr>';
    for(let i in fields){
        tag += '<th>'+fields[i]+'</th>'
    }
    tag += '</tr></thead>';
    return tag;
}

//바디생성함수
function createBody(aryData){
    let tag = '<tbody>'
    aryData.forEach(val => {
        tag += '<tr>'
        for(let i in val){
            tag += '<td>'+val[i]+'</td>'
       }
        tag += '</tr>'
    });
    tag += '</tbody>'
    return tag;
}

let data = [
    {sname:'kim',age:14,height:164,weight:60},
    {sname:'park',age:20,height:170,weight:50},
    {sname:'lee',age:27,height:183,weight:70}]
   
let str = createTable(data);
document.write(str);


