class Set{
    constructor() {
        //对象
        this.items = {};
    }
    has(element){
        //简单的写法
        // return element in this.items;
        //不是所有的对象都继承了Object.prototype，甚至hasOwnProperty方法被覆盖
        // return Object.prototype.hasOwnProperty(this.items, element);
    //    保险的写法
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    add(element){
        //判断集合中是否有这个元素
        if(!this.has(element)){
            //元素同时作为键值来保存
            this.items[element] = element;
            return true;
        }
        return false;
    }
    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }
    clear(){
        this.items = {};
    }
    size(){
        //法一：Object类的key方法，key是包含给定对象所有属性的数组
        //古早的浏览器不支持
        // return Object.keys(this.items).length;
    //    法二：
    //    在每次add和delete时，对一个变量进行操作，就像之前的栈、队列、链表数据结构一样
    //    法三：手动提取items的每个属性进行计数
        let count = 0;
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                //需要验证对象是都有该属性
                //对象中除了集合部分的属性，还有一些自身的属性
                //所以不能简单的直接for-in循环然后直接加count
                count += 1;
            }
        }
        return count;
    };
    values(){
        //法一：对象内置的values方法，返回对象所有属性值
        // return Object.values(this.items);
    //    法二：支持任何浏览器
        let values = [];
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                values.push(key)
            }
        }
        return values;
    }

//    一些运算方法
    union(otherSet){
        const unionSet = new Set(); // 并集
        this.values().forEach( value => unionSet.add(value)); // 当前的set实例，就是谁调用这个方法，谁就是当前的Set实例
        otherSet.values().forEach( value => unionSet.add(value)); // 另外一个集合
        return unionSet;
    }
    intersection(otherSet){
        //交集
        //法一：默认迭代当前的set实例，如果很长，那就浪费时间
        //可以改进，迭代较短的一个集合
        // const intersectionSet = new Set();
        // const values = this.values();
        // for(let i = 0; i < values.length; i ++){
        //     if(otherSet.has(values[i])){
        //         intersectionSet.add(values[i]);
        //     }
        // }
        //改进，迭代较短的一个集合
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if(otherValues.length - values.length > 0){
            biggerSet = otherSet;
            smallerSet = values;
        }
        smallerSet.forEach( value => {
            if(biggerSet.includes(value)){
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
}

// const set = new Set();
// set.add(1);
// console.log(set.values());
// console.log(set.size());
// console.log(set.has(1));
// console.log(set.has(100));
//
// set.add(2);
// set.add(3);
// console.log(set);
//
// set.delete(1);
// console.log(set)
