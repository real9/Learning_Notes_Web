// 检查一个字符串是否为回文，最简单的就是将其倒序再和原来的比较是否相等
//但是以上方法太弱智了
//使用双端队列来解决回文的判断
import Deque from './deque.mjs';

function palindromeChecker(aString){
    if (aString === undefined || aString === null){
        return false;
    }
    const deque = new Deque();
    //将所有字母转换为小写，便于判断，其实还需要处理特殊字符，这里不考虑
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;

    for( let i = 0; i < lowerString.length; i ++){
        //所有字符进队列，从队尾进去
        deque.addBack(lowerString.charAt(i));
    }

    //队列长度为1时，直接不执行while，直接返回true就行了
    //isEqual可以及时判断是否还需要继续判断了
    while (deque.size() > 1 && isEqual){
        //队列头部删除
        firstChar = deque.removeFront();
        //队列尾部删除
        lastChar = deque.removeBack();
        if( firstChar !== lastChar ){
            isEqual = false;
        }
    }
    return isEqual;
}

//其实还是觉得双指针更简单一点
