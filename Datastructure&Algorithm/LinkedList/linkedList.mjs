import {defaultEquals} from "../util.mjs";
import {Node} from "./models/linked-list-models.mjs";
//助手类：Node，表示要添加到链表中的项

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0; // 链表的元素数量
        this.head = undefined;//将第一个元素的引用保存，使用head元素保存引用
        this.equalsFn = equalsFn;//内部调用的函数，比较链表中的元素是否相等
    }
//    向链表尾部添加新元素
    push(element){
        const node = new Node(element);
        let current;
        if(this.head == null){  //链表为空
            this.head = node;
        }else{  // 链表不空
            current = this.head;
            //找到最后一个元素
            while (current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.count += 1;
    }
    //移除下标index处的元素
    removeAt(index){
        //检查越界，如果越界就返回undefined
        if(index >= 0 && index < this.count){
            let current = this.head;
            //移除第一项
            if(index === 0){
                // 也可以直接head = head.next
                this.head = current.next;
            }else {
                //移除后面的项
                // let previous;
                // //迭代到达目标
                // for(let i = 0; i < index; i ++){
                //     //还需要一个变量对当前元素的前一个元素的引用
                //     previous = current;
                //     //移除的是current
                //     current = current.next;
                // }
                //使用getElementAt函数进行重构
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                //链接
                previous.next = current.next;
            }
            this.count -= 1;
            return current.element;
        }
        return undefined;
    }
//    获取index下标位置的元素
    getElementAt(index){
        //index参数合法性检测
        if(index >= 0 && index <= this.count){
            let current = this.head;
            for(let i = 0; i < index && current != null; i++){
                current = current.next;
            }
            //结束循环时，current时对index位置元素的引用
            return current;
        }
        return  undefined;
    }
    //在任意位置插入元素
    insert(element, index){
        if(index >= 0 && index <= this.count){
            const node = new Node(element);
            if(index === 0){
                //在头部添加元素
                const current = this.head;
                node.next = current;
                this.head = node;
            }else {
                const pre = this.getElementAt(index - 1);
                const cur = pre.next;
                node.next = cur;
                pre.next = node;
            }
            this.count += 1;
            return true;
        }
        return false;
    }
    //返回元素下标
    indexOf(element){
        let cur = this.head;
        for(let i = 0; i < this.count && cur != null; i ++){
            if(this.equalsFn(element, cur.element)){
                return i;
            }
            cur = cur.next;
        }
        return -1;
    }
    //移除元素
    remove(element){
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.count === 0;
    }
    getHead(){
        return this.head ;
    }
    toString(){
        if(this.head == null){
            return 'LinkedList: null';
        }
        let objString = `${this.head.element}`;
        let cur = this.head.next;
        for(let i = 1; i < this.size() && cur != null; i ++){
            objString = `${objString},${cur.element}`;
            cur = cur.next;
        }
        return objString;
    }
}

// const list = new LinkedList();
// list.push(1);
// list.push(2);
// console.log(list.toString());
// console.log(list.getElementAt(list.size()))

