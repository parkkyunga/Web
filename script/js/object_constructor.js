
//객체생성
function Student(sno,sname,age){
    this.sno = sno;
    this.sname = sname;
    this.age = age;
    this.showInfo = function(){
        return '이름은 '+this.sname+' , 나이는 '+this.age;  
    }
}

let s1 = new Student('22-0123','kim',20);
let s2 = s1;
s2.sno ='22-0000';
console.log(s1.showInfo())

function Table(param){
    this.data = param;
    this.tag = '';
    this.fields = ['sname','age','height','weight'];
    
    this.createTable = function(){
        this.tag += '<table>';
        this.createHead();
        this.createBody();
        this.tag += '</table>';
        return this.tag;
    }
    
    this.createHead = function(){
       this.tag += '<thead><tr>';
       //let str = this.tag;
       // for (let i in this.fields) { this.tag += '<th>' + this.fields[i] + '</th>';  }
        for(let i of this.fields){
            this.tag += '<th>' + i + '</th>';
        }
        this.tag += '</tr></thead>';
//        return this.tag
    }

    this.createBody = function () {
        this.data.forEach(element => {
            this.tag += '<tr>';
            for (let i in element) {
                this.tag += '<td>' + element[i] + '</td>';
            };
            this.tag += '</tr>';
        });
//        return this.tag
    }

}

let data = [
    {sname:'kim',age:14,height:164,weight:60},
    {sname:'park',age:20,height:170,weight:50},
    {sname:'lee',age:27,height:183,weight:70}
];

let t1 = new Table(data);
let str = t1.createTable();
document.write(str);

//function(){this -> window} / new 함수  this -> 객체(object)
//event this -> 이벤트대상