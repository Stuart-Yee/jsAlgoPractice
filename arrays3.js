// Arrays To Do 3


// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, 
// and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

function removeNegatives(myArray){
    var len = 0;
    for (var i = 0; i < myArray.length; i++){
        if(myArray[i] >= 0){
            len++;
            continue;
        } else {
            for(var x = i+1; x < myArray.length; x++){
                if(myArray[x] >= 0){
                    myArray[i] = myArray[x];
                    myArray[x] = -1;
                    len++;
                    break;
                }
            }
        }
    }
    myArray.length = len;
    return myArray;
}

var testArr = [-1, -2.5, 3.65, -5, 78];
console.log(removeNegatives(testArr))



// Second-to-Last
// Return the second-to-last element of an array. 
// Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

function secondToLast(myArr){
    if (myArr.length > 1){
        return myArr[myArr.length-2];
    } else {
        return null
    }
}

console.log(secondToLast(testArr));
console.log(secondToLast([1,2, false, "beer"]))
console.log(secondToLast([1]))
console.log(secondToLast([]))



// Second-Largest
// Return the second-largest element of an array. 
// Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.

function secondLargest(myArr){
    if (myArr.length < 2){
        return null;
    } else {
        var largest = myArr[0];
        var nextLargest = myArr[1];
        for(var i = 1; i < myArr.length; i++){
            if(myArr[i] > largest){
                nextLargest = largest;
                largest = myArr[i];
            } else if (myArr[i] > nextLargest){
                nextLargest = myArr[i];
            }
        }
        return nextLargest
    }
}

var test2 = [3, 5];
var test2a = [5, 3];
var test5 = [1,2,Math.PI,7];

console.log(secondLargest(test2));
console.log(secondLargest(test2a));
console.log(secondLargest(test5));



// Nth-to-Last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. 
// If the array is too short, return null.

function nthElementEnd(myArr, steps){
    if (steps > myArr.length || steps == 0){
        return null;
    } else {
        return myArr[myArr.length - steps];
    }
}

var testArr1 = [5,2,3,6,4,9,7];
console.log(nthElementEnd(testArr1, 6));



// Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. 
// Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.

function nthLargest(myArr, n){
    if(n > myArr.length || n == 0){
        return null;
    } else {
        for(var i = 0; i < myArr.length; i++){
            var numLarger = 0;
            for(var y = 0; y < myArr.length; y++){
                if(myArr[y] > myArr[i]){
                    numLarger++;
                } 
            }
            if(numLarger == n-1){
                return myArr[i];
            }
        }
    }
}

console.log(nthLargest(testArr1, 3))



// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. 
// Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. 
// Array [-1,7,3] would represent three buildings: first is actually out of view below street level, 
// behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). 
// You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. 
// As always with challenges, do not use built-in array functions such as unshift().

function skyline(myArr){
    var view = [];
    for(var i = 0; i < myArr.length; i++){
        if(myArr[i] < 1){
            continue;
        } else if(view.length == 0 || myArr[i] > view[view.length-1]){
            view[view.length] = myArr[i];
        }
    }
    return view;
}

var testArr2 = [-1,0,5,2,3,6,4,9,7];
var skytest1 = [-1,1,1,7,3];
var skytest2 = [0,4];
console.log(skyline(testArr2));
console.log(skyline(skytest1));
console.log(skyline(skytest2));