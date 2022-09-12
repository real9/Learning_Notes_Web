import LinkedList from "./linkedList.mjs";
import {defaultEquals} from "../util.mjs";
import {Node} from "./models/linked-list-models.mjs";

//循环链表
class CircularLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }
    insert(element, index) {
        if(index >= 0 && index <= this.count){
            const node = new Node(element);
            let cur = this.head;
            if(index === 0){
                if(this.head == null){
                    //空链表
                    this.head = node;
                    node.next = this.head;
                }else{
                    node.next = cur;
                    cur = this.getElementAt(this.size());
                    this.head = node;
                    cur.next = this.head;
                }
            }else {
                const previous = this.getElementAt(index-1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count += 1;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if(index >= 0 && index < this.count){
            let cur = this.head;
            if(index === 0){
                if(this.size() === 1){
                    this.head = undefined;
                }else{
                    const removed = this.head; // 保存原先的头
                    cur = this.getElementAt(this.size()); // 应该是undefined
                    this.head = this.head.next; // 新头
                    cur.next = this.head; // 尾部指向新头
                    cur = removed; // 这么写，只是为了最后return方便
                }
            }else {
                //和普通的链表操作相同
                const previous = this.getElementAt(index-1);
                cur = previous.next;
                previous.next = cur.next;
            }
            this.count -= 1;
            return cur.element;
        }
        return undefined;
    }
}
