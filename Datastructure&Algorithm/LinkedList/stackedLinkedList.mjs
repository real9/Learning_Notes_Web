// 使用链表来实现栈
import DoubleLinkedList from "./doubleLinkedList.mjs";

class StackedLinkedList{
    constructor() {
        this.items = new DoubleLinkedList();
    }
    push(element){
        //push方法是单链表的方法，所以无法访问tail
        // this.items.push(element);
        //自己重写：
        this.items.insert(element, this.stackSize()); // 尾插法
    }
    pop(){
        if(this.isStackEmpty()){
            return undefined;
        }
        return this.items.removeAt(this.stackSize() - 1);
    }

    isStackEmpty(){
        return this.items.isEmpty();
    }
    stackSize(){
        return this.items.size();
    }

    peek(){
        if(this.isStackEmpty()){
            return undefined;
        }
        // return this.items.getElementAt(this.stackSize() - 1).element;
        return this.items.tail.element;
    }

    // clear(){
    //     this.items.clear();
    // }

    toString(){
        return this.items.toString();
    }
}

const s = new StackedLinkedList();
s.push(2);
s.push(4);
s.push(1);
console.log(s.pop())
console.log(s)
