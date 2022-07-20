// 基于对象的栈
class Stack{
    constructor() {
        this.count = 0; // count记录栈的大小
        this.items = [];
    }
    push(element) {
        this.items[this.count] = element;
        this.count += 1;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    pop() {
        if(this.isEmpty()){
            return undefined;
        }
        this.count -= 1;  // count是大小，和下标有区别
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear() {
        this.items = [];
        this.count = 0;
    }
    print() {
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i ++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
for(let i = 0; i < 6; i ++){
    stack.push(i);
}
console.log(stack.items);
console.log(stack.print());
console.log(stack.size());
console.log(stack);
