

var firstName = 'narendra';
var lastName = 'nari';
var yearOfBirth = 1994;


function Calcu(year)
{
        return 2018 - year;
}


console.log('he is mr.'+firstName + lastName+'and he`s age is '+Calcu(yearOfBirth));

//es6


console.log('he is mr.'${firstName} + ${lastName}+'and he`s age is '+${Calcu(yearOfBirth)});


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));

