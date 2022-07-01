let idx = "This is a story".indexOf("is");
idx = [1, 2, 3, 4, 5].indexOf(8);

let str = `Below you can find hand picked combinations of 2 colors that look good together. Use them for your next web/desing project.`
let strAry = str.split(' ') //공백을기준으로나눈다 반환타입:배열
idx = strAry.indexOf('you')
console.log(strAry)

let names = ['박은지', '윤정은', '박지혜', '김나희'];
idx = names.indexOf('김나희'); //lastindexof()
console.log(idx)

