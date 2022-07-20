import Stack from "./stack-array.mjs";

function decimalToBinary(decNum) {
    const remStack = new Stack();
    let num = decNum;
    let rem;
    let binaryString = '';

    while(num > 0){
        //使用向下取整是因为js只有Number类型，这里要取的是整数部分。
        rem = Math.floor(num % 2);
        remStack.push(rem);
        num = Math.floor(num / 2);
    }

    while (!remStack.isEmpty()){
        binaryString += remStack.pop();
    }
    return binaryString;
}

console.log(decimalToBinary(10))
