import LinkedList from "./linkedList.mjs";
import {defaultEquals, defaultCompare} from "../util.mjs";

//有序链表
class SortedLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }
    insert(element, index = 0) {
        //插入的下标无法被更改，因为是有序的，就算传了index的只也没用，因为用不到哈哈哈
        if(this.isEmpty()){
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }
    getIndexNextSortedElement(element){
        let cur = this.head;
        let i = 0;
        for (; i < this.size() && cur; i ++){
            const comp = this.compareFn(element, cur.element);
            //element < cur.element，从小到大排列。
            if(comp === -1){
                //包含了相等元素的插入，插在相等元素的后面的位置
                return i;
            }
            cur = cur.next;
        }
        return i;
    }
}

const list = new SortedLinkedList();
list.insert(20);
list.insert(1);
list.insert(10);
list.insert(90);
list.insert(1);
console.log(list)
console.log(list.toString())
