//forEach : void 
//map : [배열] A -> A' 
//filter : [배열] A -> B
//reduce : 문자열,number,[ary],{}

let ary = [3, 5, 8, 9, 12]; //배열객체 : new Array();
ary.push(5); // pop()
ary.unshift(7) // shift()
//7, 3, 5, 8, 9, 12, 5
ary.splice(3, 1) //3번째값 1개를 삭제,대체값넣으면 대체
//7, 3, 5, 9, 12, 5
ary.forEach(elem => console.log(elem));


let newAry = [];
//1.forEach
let result = ary.forEach(firstCallBack)

function firstCallBack(elem) {
    //console.log(elem)
    newAry.push(elem)
}
console.log(newAry)

//2.map
//A -> A'(A*2)
result = ary.map(elem => elem * 2);
console.log(result)

//3.filter
//A -> a
result = ary.filter((elem, ind, arry) => elem % 2 == 0) //12
result = ary.filter((elem, ind, arry) => ind > 3) //12,5
console.log(result)

//4.reduce A->문자열,숫자,배열,오브젝트,,,
result = ary.reduce((accum, curr, currIdx, arry) => {
    console.log(accum, curr, currIdx);
    return accum + curr; //리턴값적어줘야됨
}, 0);
//accum 초기값,누적값,다음초기값이되는값?
console.log(result)

//reduce - map기능
result = ary.reduce((accum, curr) => {
    console.log(accum, curr);
    accum.push(curr * 2);
    return accum;
}, []);
console.log(result);

//reduce - filter,map
result = ary.reduce((accum,curr,currIdx) => {
    if(currIdx > 3){
        accum.push(curr*2);
    }
    return accum;
},[]);
console.log(result);
