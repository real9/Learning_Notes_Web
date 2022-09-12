import {Node} from "./models/linked-list-models.mjs";
import LinkedList from "./linkedList.mjs";
import {defaultEquals} from "../util.mjs";

//双向链表
//部分代码考研复用，所以继承
//双向链表是一种特殊的链表

class DoubleNode extends Node{
    constructor(element, prev, next) {
        super(element, next);
        this.prev = prev;
    }
}

export default class DoubleLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count){
            const node = new DoubleNode(element);
            let cur = this.head;
            if( index === 0 ){
                //空链表
                if(this.head == null){
                    this.head = node;
                    this.tail = node;
                } else {
                    //有一个元素的链表
                    node.next = cur; // node的下一个是原先的head
                    cur.prev = node; // 新增的 cur的prev指向node
                    this.head = node; // 把head的引用改为node
                }
            }else if(index === this.count){
            //    在最后一项插入元素
                cur = this.tail;
                cur.next = node;
                node.prev = cur;
                this.tail = node;
            }else {
            //    在中间插入新元素
                const previous = this.getElementAt(index - 1);
                cur = previous.next;
                node.next = cur;
                previous.next = node;
                cur.prev = node; // 新增的
                node.prev = previous; // 新增的
            }
            this.count += 1;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count){
            let cur = this.head;
            if(index === 0){
                //移除头部
                this.head = cur.next;
                if(this.count === 1){
                    this.tail = undefined;
                }else{
                    this.head.prev = undefined;
                }
            }else if(index === this.count - 1){
                //移除尾部
                cur = this.tail;
                this.tail = cur.prev;
                this.tail.next = undefined;
            }else {
                //从中间移除
                cur = this.getElementAt(index);
                const prev = cur.prev;
                prev.next = cur.next;
                cur.next.prev = prev;
            }
            this.count --;
            return cur.element;
        }
    }
}

const d = new DoubleLinkedList();
d.insert(1,0);
d.insert(2,1);
d.insert(3,2);
console.log(d);
