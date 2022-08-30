function removeExtraSpaces(arr) {
    let slow = 0;
    for( let fast = 0; fast < arr.length; fast ++){
        if (arr[fast] === ' ' && (fast === 0 || arr[fast-1] === ' ')){
            continue;
        }else{
            arr[slow] = arr[fast];
            slow += 1;
        }
    };
    if(arr[slow] === ' '){
        arr.length = slow;
    }
};
let s = '  hello  world  ';
let arr = s.split("");
removeExtraSpaces(arr);
console.log(arr);
