//객체 == 인스턴트(클래스의 구조 실체를 만든것)
const student = {
    sno: '22-0123',
    sname: 'kim',
    mathScore: 80,
    engScore: 90,
    age: 20,
    showInfo: function () {
        return 'name:' + this.sname + ', age:' + this.age;
    }
}
const student2 = {
    sno: '22-0321',
    sname: 'park',
    mathScore: 83,
    engScore: 92,
    age: 21,
    showInfo: function () {
        return 'name:' + this.sname + ', age:' + this.age;
    }
}

//이렇게 학생1 , 학생2,,,계속 객체정의할수있지만 우리는 클래스만들어서해보자
class Student{
    constructor(sno,sname,age){//생성자
        this.sno = sno;
        this.sname = sname;
        this.age = age;
    }
    //method
    setMathScore(mathScore){
        this.mathScore = mathScore;
    }
    setEngScore(engScore){
        this.engScore = engScore;
    }
    showInfo(){
        return 'name:' + this.sname + ', age:' + this.age;    
    }
}
const student3 = new Student('22-0111','min',30);
student3.setMathScore(10);
student3.setEngScore(20);
console.log(student2);
console.log(student3);


