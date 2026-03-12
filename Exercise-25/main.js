
const Numbers = [1,2,3]
const allNumbers = [...Numbers,4,5,6]

console.log(allNumbers);

function multi (...times){
    return times.reduce((num1,num2) => num1 * num2,1);
}

console.log(multi(33,4,5,6))