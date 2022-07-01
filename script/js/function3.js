function sumNumber() {
    console.log(arguments);//함수가호출되면 args객체
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    return console.log(result);
}
sumNumber(1, 2, 3, 4, 5);

//나머지파라미터
function sumParam(...args){ //갯수가 가변적으로 처리, 배열요소
    let result = 0;
    args.forEach((val,idx) => {
        result += val
    });//callback함수
    return result;
}
console.log(sumParam(1,2,3,4,5));

//일반함수
function orderSet(burger,beverage){
    console.log('burder: '+burger+', drink: '+beverage)
}
orderSet('치즈버거','콜라')
//curring
function orderSet_curring(burger){
    return function(beverage){//함수리턴가능
        console.log('burder: '+burger+', drink: '+beverage)
    }
}
let beverageFnc = orderSet_curring('치킨버거');
beverageFnc('환타'); // ()함수실행
beverageFnc('환타2')

orderSet_curring('불고기버거')('사이다');

function orederBurgerSet(burger){
    return function orderDrink(drink){
        return function orderSide(side){
            return function orderKetchup(yn){
                return function orderChicken(count){
                    console.log(burger+drink+side+yn+count)
                }
            }
        }
    }
}
let order = orederBurgerSet('더블치즈버거')
order('물')('감자튀김')('yes')(2)

//펼침연산자
let args = [1,3,5];
//function anyFnc(...args){}
let otherArgs = [-1,-2,...args,-0];//두배열요소합쳐서 새로운배열
let another = [4,5,6]
console.log(otherArgs);
console.log(args.concat(another));//배열합치기

let obj1 = {name : 'park' , age : 20}
let newObj = {name:'kim',height:169.0,age:25}
let obj3 = {sno:'12345'}
let obj2 = {...newObj,...obj1,...obj3};
//let obj2 = {}; --> new Object(); 선언
console.log(obj1,obj2) //2가 1전부 머지해버림,height~는 없는 속성이라 그대로

let comObj ={
    sno:'22-12345',
    sname:'park',
    score:40,
    hobby:['reading book','listening music'],
    pet:[{cname:'냥냥이',age:2},{dname:'멈뭄이',age:3}]
}
comObj.sname;
comObj.hobby[0];
comObj.pet[0].age;
console.log(comObj.pet[1].dname);


//나머지파라메타
function restparams(...args){
    console.log(args)
}
restparams(1,2,3,4);

const rest2 = (arg1,arg2,...args)=>{
    console.log([arg1,arg2,args]);
}
rest2(1,2,3,4)
rest2(1,2)
rest2(1)

function sum(a,b,...args){
    let result = 0;
    if(a != undefined){result = a;}else{return 0}
    if(b != undefined){result += b}
    args.forEach(function(arg){result += arg})
    return result
}
console.log(sum(1,2,3,4))
console.log(sum(1,2))
console.log(sum(1))

//화살표함수
function add(a,b){return a+b}
//이렇게 쓸수있음 let add = (a,b) => a+b

let multiply = (a,b,...args)=>{
    let result = a*b;
    for(let i=0;i<args.length;i++){result *= args[i]}
    return result;
}
console.log(multiply(1,2,3))

//고차함수
const arr = [1,2,3,4,5];
const arr2x = [];
for(let i=0;i<arr.length;i++){
    arr2x.push(arr[i]*2)
}
console.log(arr2x);

const arr2xx = arr.map(item=>item*2);
console.log(arr2xx);



