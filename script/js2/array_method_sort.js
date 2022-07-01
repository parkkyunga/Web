result = [6, 4, 3, 21, 14].sort(function (a, b) {
    return b-a; 
    //-오름차순 +내림차순
    if (a < b) {
        return -1; //오름차순정렬
    } else {
        return 1;
    }
});
console.log(result)
//object array
let objAry = [{name:'홍길동',age:18},{name:'김민수',age:20},{name:'박세민',age:19}];
console.log('홍' > '박');
result = objAry.sort(function (a, b) {
   // return a.age < b.age ? -1 : 1; //나이 오름차순
    if(a.name < b.name){ //이름 오름차순정렬
        return -1;
    }else{
        return 1;
    }
})
console.log(result)