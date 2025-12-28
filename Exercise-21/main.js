

const numbers = [1,2,3,4,5,6,7,8,9];

const times = numbers.reduce((total, num)=> total * num, 1);

console.log(times);