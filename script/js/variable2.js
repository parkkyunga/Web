let ary = new Array();
ary = [13, 26, 38, 49, 52]; //선언 , 초기화
console.log(ary[0]);

ary[ary.length] = 100;
ary[ary.length] = 200;
ary[10] = 111;
console.log(ary);
console.log(typeof ary[7]); //undefined 찾을수없음..

for (let i in ary) {
    document.write(ary[i] + ' ');
}
for (let i = 0; i < ary.length; i++) {
    console.log(i + '번째 ' + ary[i]);
}
console.clear();
ary = ['apple','banana','goguma','watermelon',12];
document.write('<ul>')
for (let val of ary) {
    console.log(val);
    document.write('<li>' + val + '</li>');
}
document.write('</ul>')

ary=[
    {name:'gil dong',age:20,phone:'010-1234-1234'},
    {name:'jung kuk',age:20,phone:'010-1234-2222'},
    {name:'seok jin',age:31,phone:'010-1234-3333'},
    {name:'nam joon',age:29,phone:'010-1234-4444'},
]
document.write('<ul>');
for (let person of ary) {
    document.write('<li>' + person.name + ' , ' + person['phone'] + '</li>');
}
document.write('</ul>');

let str = '';
str += '<ul>';
for(let person of ary){
    str += '<li> 이름 : '+person.name +' , 연락처 : '+person.phone+'</li>'
}
str += '</ul>';

str = '<table border=1>';
for(let person of ary){
    str += '<tr>'
    str += '<td>'+person.name+'</td>';
    str += '<td>'+person.age+'</td>';
    str += '<td>'+person['phone']+'</td>';
    str += '</tr>'
}
str += '</table>'

document.write(str);
console.log(str)

const v1 = 'helllo';

//원시타입 vs 참조타입
let n1 = 10;
let n2 = n1;
n1 = 20;
document.write(n1+' '+n2);

let o1 = {name:'one'};
let o2 = o1;
o2.name = 'two';
o1.name = 'three'
document.write(o1.name+' '+o2);
console.log(o1,o2)

const obj={
    sno:'22-12345',sname:'kim'
}
obj.sno = '0000'; //obj상수변수에 값을 새롭게선언x,obj참조하는속성값을변경
//obj = '';//새로운값할당--에러남
console.log(obj.sno);

//var vs. let
//var 변수선언 : (변수의 scope) 전역변수 or 지역변수
var var1 = 'HELLLLLO';
function localFnc(){
    var var2 = 'nice'; //local,지역변수
    console.log(var2);
}
localFnc();
//console.log(var2+'-------------');
console.clear();
let var3 = 'HELLLLLO';
{
    let var3 = 'new helloooo';
    console.log(var3);
}
function localFnc2(){
    let var4 = 'nice'; //local,지역변수
    console.log(var4);
    console.log('fnc : '+var3);
}
localFnc2();
console.log('var3 : '+var3);

for(var i of ary){
    console.log(i);
}
console.log(i);