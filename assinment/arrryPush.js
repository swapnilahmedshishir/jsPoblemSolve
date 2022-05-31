const num = [3,5,7,8,9,10];
const newNum = [];
for(let i = 0; i<num.length ; i++){
    let number = num[i];
    let result = number*number
    newNum.push(result);

}
console.log(newNum);