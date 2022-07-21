// 双端队列
// 运行同时从队列前端和后端添加or移除元素的特殊队列
class Deque{
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.item = {};
    }
    //isEmpty、clear、size和toString方法与队列部分相同
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
    addFront(el){
        if (this.isEmpty()){
            this.addBack(el); // 空的双端队列，直接从尾部加上新元素
        }else if (this.lowestCount > 0) {  // 双端队列头部存在空位的情况
            this.lowestCount -= 1;
            this.item[this.lowestCount] = el;  // 直接在头部加上
        }else {  // 双端队列里面有元素，并且从0开始的
            for (let i = this.count; i > 0; i --){
                this.item[i] = this.item[i-1];  // 所有元素后移一位
            }
            this.count += 1;  // 长度+1
            this.lowestCount = 0;  // 初始位归0
            this.item[0] = el;  // 第一位是空闲状态，用新元素覆盖
        }
    }
    addBack(el) {  // 和队列的enqueue方法相同
        this.item[this.count] = el;
        this.count += 1;
    }
    removeFront () {  // 和队列的dequeue相同
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.item[this.lowestCount];
        delete this.item[this.lowestCount];
        this.lowestCount += 1;
        return result;
    }
    removeBack(){  // 和stack的pop方法相同
        if(this.isEmpty()){
            return undefined;
        }
        this.count -= 1;  // count是大小，和下标有区别
        const result = this.item[this.count];
        delete this.item[this.count];
        return result;
    }
    peekFront () {  // 和queue的peek相同
        if (this.isEmpty()) {
            return undefined;
        }
        return this.item[this.lowestCount];
    }
    peekBack () {  // 和stack的peek方法相同
        if(this.isEmpty()){
            return undefined;
        }
        return this.item[this.count - 1];
    }
}

const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('101');
deque.addBack('202');
console.log(deque.toString());
deque.addFront('303');
console.log(deque.toString());
console.log(deque.peekFront(),'|||',deque.peekBack());
console.log(deque.removeFront());
console.log(deque.removeBack());
console.log(deque.size())
// deque.clear();
console.log(deque)
