let str = 'hello';//문자열 string
let str1 = new String('hello');//문자열객체 object

console.log(str == str1) //값
console.log(str === str1) //타입&값
console.log(str === str1.valueOf()) //객체->문자열


let num = new Number(123);
let num1 = 123;
console.log(num.valueOf() === num1)
console.log((123).valueOf()) //객체 -> 기본원시데이터타입으로
console.log('123')

//원시타입:string,number,boolean
//객체타입:함수,object{name:?,age:?},배열

//alert('hello'.substring(0,3))
console.log(' hello '.trim());
console.log(' hello '.trimStart());
console.log('this is the only story'.slice(10,11));

let strr = 'this is the only one story';
console.log(strr.slice(8,11));
console.log(strr.slice(30));
console.log(strr.slice(0,-10));
console.log(strr.slice(8,100));
console.log(strr.slice(8,100));

console.log(strr.substring(11,-8));
console.log(strr.substring(10,4));

let strr2 = 'good morning, good afternoon. good evening, and good night';
console.log(strr2.indexOf('even'));
console.log(strr2.indexOf('dawn'));
console.log(strr2.charAt(30));
console.log(strr2.replace('good','GOOD'));
console.log(strr2.replace(' ','^'));
console.log(strr2.replace(/and\s/gi,'^'));
console.log(strr2.replace(/ /g,'^'));
console.log(strr2.toUpperCase())

let regStr1 = 'ABC';
let regStr2 = 'DEF'
console.log(regStr1.concat(regStr2,regStr2))

let regStr3 = ['good',' ','morning','!']
console.log(''.concat(...regStr3))