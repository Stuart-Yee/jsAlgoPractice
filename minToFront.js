// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr) {
    arrLength = arr.length;
    min = [0,arr[0]];
    for (var i = 1; i < arrLength; i++){
        if(arr[i] < min[1]){
            min[0] = i;
            min[1] = arr[i];
        }
    }
    for (var x = min[0]-1; x >= 0; x--){
        arr[x+1] = arr[x];
    }
    arr[0] = min[1];
    return arr;
}

testArr = [4,2,1,3,5]
console.log(minToFront(testArr))