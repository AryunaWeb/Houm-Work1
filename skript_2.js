// задание 1
let password = '147852';
let enterPassword = prompt ("Введите пароль");
if (password === '147852') {
    alert ("Пароль введен верно");
} else {
    alert ("Пароль введен неправильно");
}

// задание 2
let c = Namber(prompt('любое число больше 0 и меньше 10'));
if (с > 0 && c < 10) {
    alert ('верно');   
} else {
    alert ('неверно');
}

// задание 3

let d = Namber(prompt('число больше 100'));
let e = Namber(prompt('любое число'));
if ('d > 100 || e > 100') {
    alert ('верно');
} elso {
    alert ('неверно')
}

// задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Namber (a) + Namber(b));

// задание 5

let month = String(prompt('введите номер месяца'));

switch (month) {
    case 'monthNumber = 1':
        console.log ('зимний месяц')
        break;

    case 'monthNumber = 2':
        console.log ('зимний месяц')
        break;
    
    case 'monthNumber = 3':
        console.log ('весенний месяц')
        break;

    case 'monthNumber = 4':
        console.log ('весенний месяц')
        break;

    case 'monthNumber = 5':
        console.log ('весенний месяц')
        break;

    case 'monthNumber = 6':
        console.log ('летний месяц')
        break;

    case 'monthNumber = 7':
        console.log ('летний месяц')
        break;

    case 'monthNumber = 8':
        console.log ('летний месяц')
        break;

    case 'monthNumber = 9':
        console.log ('осенний месяц')
        break;  
            
    case 'monthNumber = 10':
        console.log ('осенний месяц')
        break;

    case 'monthNumber = 11':
        console.log ('осенний месяц')
        break; 
        
    case 'monthNumber = 12':
        console.log ('зимний месяц')
        break;  

    default:
        console.log ('ввод не верный')    
        break;
}