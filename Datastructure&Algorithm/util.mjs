// 一些工具函数
export function defaultEquals(a, b) {
    return a === b;
}

export function defaultCompare(a, b){
    if( a === b){
        return 0;
    }else {
        return a < b ? -1 : 1;
    }
}
