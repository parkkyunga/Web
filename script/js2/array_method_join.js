let result = ['홍길동','백민규','감상우'].join('-');

let names = '권소정,김하은,유선희,김가윤' //->가나다순 split - sort - join

result = names.split(',').sort(function (a,b){
    return a < b ? -1 : 1;
}).join(', ')

console.log(result);
