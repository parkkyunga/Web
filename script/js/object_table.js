let data = [
    {sname:'park',age:14,height:164},
    {sname:'kim',age:20,height:170}
]
class Table {
    //생성자
    constructor(ary){
        this.aryData = ary; //[{},{}]
    }
    //메소드
    createTable(){
        this.tag = '<table><tr>';
    //header <thead>...</thead>
        for(let field in this.aryData[0]) {// {sname:park,age:14}
            this.tag += '<th>'+field+'</th>';
        }
        //this.tag += '<th>이름</th><th>나이</th>'이렇게해도되긴됨
        this.tag += '</tr>';
    //body <tbody>...</tbody>
        this.aryData.forEach((val,idx)=>{
            this.tag += '<tr>'
            for(let field in val){
                this.tag += '<td>'+val[field]+'</td>'
            }
            this.tag += '</tr>'
        })
        this.tag += '</table>';
        return this.tag;
    }
}
let table = new Table(data);
let str = table.createTable(); //표 형식으로 화면에 출력
document.write(str);
console.log(str)

console.log('hong'.length);//4
let names = ['hong','hwang','kim','park'];
names.push('choi'); //push배열에 새로운 정보 추가
let searchName = names.find(function(val){
    return val == 'hwang' ; //true이면 반환하겠다할때 find()메소드씀
    // return val.length == 4; 길이기4이면 반환(단첫번째꺼)
});
console.log(searchName);