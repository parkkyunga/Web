let str = 'hello';
str = `hello`;
let person = {
    name: 'hong',
    age: 20,
    showInfo: function () {
        //return '이름은 '+this.name+' , 나이는 '+this.age;
        return `이름은 ${this.name}, 나이는 ${this.age}`
    }
}
console.log(person.showInfo());
console.log(`나의 이름은 ${person.name}`);
console.log(`${person.age >= 20 ? '성인' : '청소년'}`)

let strings = 'this\nis\na\nboy';
strings = `this
is
a
girl`
console.log(strings);

let jm = '990101-2234567';
jm = '9901012234567';
let gender = '';

function checkGender(num = '') {
    let jnum = num.replace('-', '');
    console.log(jnum)
    switch (jnum.charAt(7)) {
        case 1:
        case 3:
            return gender = 'male'
        case 2:
        case 4:
            return gender = 'female'
    }
    console.log(gender)

    // if (!num.match('-')) {
    //     if (num.charAt(7) == 1 || num.charAt(7) == 3) {
    //         gender = 'male'
    //     } else {
    //         gender = 'female'
    //     }
    // }
    // if (num.charAt(8) == 1 || num.charAt(8) == 3) {
    //     gender = 'male'
    // } else {
    //     gender = 'female'
    // }
    // return gender
}
let result = checkGender(jm);
console.log(result)