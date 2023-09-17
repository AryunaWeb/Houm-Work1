//задание 1
let a = 10;
alert (a);

//задание 2
let date = prompt ('год выпуска первого iPhone');
alert (date);

//задание 3
let name = prompt ('имя создателя языка JavaScript');
alert (name);

//задание 4
let b = 10;
let c = 2;
alert (b+c);
alert (b-c);
alert (b*c);
alert (b/c);

//задание 5
let result = 2**5;
alert (result);

//задание 6
let d = 9;
let e = 2;
alert (d/e);

//задание 7
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);

//задание 8
let age = prompt("Сколько вам лет?");
alert (age);

//задание 9
const user ={name: 'Aryuna', age: '33', isAdmin: true};
alert (user.name);

//задание 9.1
user ["city of residence"] = true;
alert (["city of residence"]);

//задание 9.2
user.name = "Mary";
alert (user.name);

//задание 9.3
delete user["city of residence"];

//задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?")
alert (user[info]);

//задание 10
let userName = prompt('Ваше имя?');
alert ('Привет,' + userName + '!');
