// 循环队列
import Queue from "./queue.mjs";
function hotPotato(elementList, num){
    const queue = new Queue();
    const eliminatedList = [];

    for (let i = 0; i < elementList.length; i ++){
        queue.enqueue(elementList[i]);  // 所有名字加入队列
    }

    while (queue.size() > 1){
        for (let i = 0; i < num; i ++){
            queue.enqueue(queue.dequeue());  // 队列开头的被移除，并且添加至队尾
        }
        // 每次都循环num次，这时的队列头是谁（拿花了）就会被淘汰，直到queue的size为1
        eliminatedList.push(queue.dequeue());  // 在到达指定次数之后，拿花的人被淘汰
    }

    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()  // 最后只剩下一个人时就是胜者
    };
}

const names = ['john', 'jack', 'camila', 'ingrid', 'carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name}在击鼓传花游戏中淘汰。`);
})
console.log(`胜利者：${result.winner}`);
