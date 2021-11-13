// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. 
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSignma(number) {
    number = Math.floor(number)
    if (number == 1) {
        return 1
    }
    else if(number < 1){
        return number + rSignma(number+1)
    } else {
        return number + rSignma(number-1)
    }
}

console.log(rSignma(5))
console.log(rSignma(2.5))
console.log(rSignma(-2))



// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. 
// Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function rFact(number){
    number = Math.floor(number)
    if(number<0){
        return 0
    } else if(number == 0) {
        return 1
    } else {
        return number * rFact(number-1)
    }
}

console.log(rFact(0))
console.log(rFact(3))
console.log(rFact(6.5))

function floodFill(canvas2D,startXY,newColor){
    var x = startXY[0]
    var y = startXY[1]
    var original = canvas2D[y][x];
    canvas2D[y][x] = newColor;
    if(x > 0 && canvas2D[y][x-1] == original){
        floodFill(canvas2D, [x-1, y], newColor)
    }
    if(y > 0 && canvas2D[y-1][x] == original){
        floodFill(canvas2D, [x, y-1], newColor)
    }
    if(x < canvas2D.length -1 && canvas2D[y][x+1] == original){
        floodFill(canvas2D, [x+1, y], newColor)
    }
    if(y < canvas2D.length -1 && canvas2D[y+1][x] == original){
        floodFill(canvas2D, [x, y+1], newColor)
    }

}

var test2d = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3]
]

floodFill(test2d, [2,2], 1)
console.log(test2d)