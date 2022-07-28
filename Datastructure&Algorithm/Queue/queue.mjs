export default class Queue{
    constructor() {
        this.count = 0;  // 队列初始大小（更倾向于是最后一个元素的下标+1）
        this.lowestCount = 0;  // 第一个元素位置
        this.item = {};  // 为了获取元素高效，使用键值对对象
    }
    enqueue(el) {
        this.item[this.count] = el;
        this.count += 1;
    }
    dequeue(){
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.item[this.lowestCount];
        delete this.item[this.lowestCount];
        this.lowestCount += 1;
        return result;
    }
    peek(){
        if (this.isEmpty()) {
            return undefined;
        }
        return this.item[this.lowestCount];
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.item = {};
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objStr = `${this.item[this.lowestCount]}`;  // 初始值的索引不一定是0
        for (let i = this.lowestCount + 1; i < this.count; i ++){
            objStr = `${objStr},${this.item[i]}`;  // 就是类似于a += b
        }
        return objStr;
    }
}

// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue('101');
// queue.enqueue('202');
// queue.enqueue('303');
// queue.enqueue('404');
// console.log(queue.toString());
// console.log(queue.size());
// queue.dequeue();
// console.log(queue.toString());
// console.log(queue.peek());



