let arr = []; //new Array();
arr[0] = 'hello'
arr[1] = 100;
arr[2] = true;

delete arr[1];
console.log(arr.length)

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

for(let val of arr){
    console.log(val);
}

arr.push('apple') //젤뒤에추가
arr.unshift('banana') //젤앞에추가
arr.pop(); //젤마지막부터삭제
arr.shift();//첫번째부터삭제
arr.splice(0,3,'apple')//0번쨰인덱스에 0개의 크기만큼을 ''로 대체하겟다

arr.forEach((val,idx) => {
    console.log(`${idx} => ${val}`) //foreach에서는 delete한거 안보임
});
