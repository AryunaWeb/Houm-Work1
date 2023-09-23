// задание 1
let p = 0;
while (p < 2) {
    console.log ("Привет");
    i++;
}

// задание 2
let i = 1;
while (i <= 5) {
    console.log (i);
    i++;}

// задание 3
let n = 7;
while (n <= 22) {
    console.log (n);
    i++;
}

// задание 4
const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
};

for (let name in obj) {
    console.log (`${name}, - зарплата ${obj[name]}`);
}

// задание 5

let n = 1000;
let num = 0;

while (n > 50) {
    n = n / 2;
    num++;
}
console.log(`получилось число ${n}`, число итераций ${num});

//задание 6

for (let dayMonth = 1; dayMonth <= 31; dayMonth =+ 7 ) {
    console.log(`сегодня пятница, ${dayMonth}-е число. Необходимо подготовить отчет.`);
}