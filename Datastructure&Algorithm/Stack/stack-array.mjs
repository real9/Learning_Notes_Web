//基于数组的栈
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) { // 增
        this.items.push(element);
    }
    pop() { // 删
        return  this.items.pop();
    }
    peek() { // 查
        return this.items[this.items.length - 1];
    }
    isEmpty() { // 判别栈是否为空
        return this.items.length === 0;
    }
    size() { // 栈的大小（数组长度）
        return this.items.length;
    }
    clear() { // 删
        this.items = [];
    }
}
export default Stack;

// const stack = new Stack();
// console.log(stack.isEmpty());
// for(let i = 1; i < 6; i ++){
//     stack.push(i);
// }
// console.log(stack);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.size())
// stack.clear();
// console.log(stack)
