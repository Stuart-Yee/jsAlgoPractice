//How about this one: return the average value of an array of unsorted numbers.

function avgUnsorted(arr) {
    var sum = 0;
    for(var i of arr){
        sum += i;
    }
    return sum/arr.length;
}

testArr = [8, 9, 12];

console.log(avgUnsorted(testArr));

// Write a function that returns whether the given array has a balance point between indices, 
//where one side’s sum is equal to the other’s. 
//Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.

var balanceTrue = [1,2,3,4,10];
var balanceFalse = [1,2,4,2,1];

function isBalanced(arr){
    for(var i = 0; i < arr.length; i++){
        var sumA = 0
        for(var j = 0; j <= i; j++){
            sumA += arr[j];
        }
        var sumB = 0
        for(var x = i+1; x < arr.length; x++){
            sumB += arr[x];
        }
        if(sumA == sumB){
            return true;
        } else if(sumA > sumB) {
            return false;
        } else {
            continue;
        }
    }
}

console.log(isBalanced(balanceTrue));
console.log(isBalanced(balanceFalse));

//Here, a balance point is on an index, not between indices. 
//Return the balance index where sums are equal on either side 
//(exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.

var bal2 = [-2,5,7,0,3];
var balNone = [9,9];

function isBalancedAt(arr){
    if(arr.length == 1){
        return arr[0];
    }
    for(var i = 1; i < arr.length; i++){
        var sumA = 0
        for(var j = 0; j < i; j++){
            sumA += arr[j];
        }
        var sumB = 0
        for(var x = i+1; x < arr.length; x++){
            sumB += arr[x];
        }
        if(sumA == sumB){
            return i;
        } else if(sumA > sumB) {
            return -1;
        } else {
            continue;
        }
    }
}

console.log(isBalancedAt(bal2));
console.log(isBalancedAt(balNone));