//varible.js
console.log('hello world');
document.write('<h1>HELLO WORLD</h1>');
let num = 0;
num = 'hellooo';
num = null;
num = 10;

let num1;
console.log(num);
console.log(typeof num1);
num1 = 100;
let num2 = 200; //변수선언없이 사용: 전역객체(window)의 속성
console.log(num1 + num2);
console.log(window);

// window.alert('hi');

//변수: 학생이름,번호,영어,수학
let student = new Object();
student.sno = '22-0123';
student.name = '홍길동';
student.engScore = 90;
student.mathScore = 80;
console.log(student);
document.write(student.name);

let person = {
    fname: 'kim min su',
    age: 20,
    height: 175.5,
    showInfo: function () {
        return this.fname + ' , ' + this.age + ' , ' + this.height;
    }
};
document.write(person.showInfo());
console.log(person.showInfo());
console.log(person.fname);
console.log(person['age']);
var field = 'height';
console.log(person[field]);

//전체필드를 for loop .. in
for (let field in person){
    console.log(field,' => ',person[field]);
}