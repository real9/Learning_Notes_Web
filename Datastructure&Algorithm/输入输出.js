//单行输入
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', function(line) {
    //line为输入的单行字符串，split函数--通过空格将该行数据转换为数组。
    var arr= line.split(' ')
    //数组arr的每一项都是字符串格式，如果我们需要整型，则需要parseInt将其转换为数字
    console.log(parseInt(arr[0]) + parseInt(arr[1]));
})

//多行输入
var _readline = require('readline')
const r2 = _readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var inputs = []
rl.on('line', function(line){
    //trim()去除字符串两边的空白,line表示一行输入，最终得到的inputs数组的每一个元素表示一行输入。
    inputs.push(line.trim());
    //下面再根据要求对每一行数据进行处理，比如类似于单行输入将每一行数据按照空格转换为数组等
// ...
})
