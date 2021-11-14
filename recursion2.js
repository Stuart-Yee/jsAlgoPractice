// Recursive Fibonacci
// Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 

// rFib(2) = 1 (0+1); 

// rFib(3) = 2 (1+1); 

// rFib(4) = 3 (1+2); 

// rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.

function rFib(Num){
    Num = Math.floor(Num)
    if(Num <= 0){
        return 0;
    } else if (Num == 1){
        return 1;
    } else {
        return rFib(Num - 1) + rFib(Num - 2);
    }
}

// for(var i = 0; i <= 10; i++){
//     console.log("Nth = " + i);
//     console.log(rFib(i));
// }

// console.log(rFib(3.6))
// console.log(rFib(-2))

// Recursive “Tribonacci”
// Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two. 
// First three Tribonacci numbers are 0, 0, 1, so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). 
// Handle negatives and non-integers appropriately and inexpensively.

function rTrib(Num){
    Num = Math.floor(Num)
    if(Num <= 1){
        return 0;
    } else if (Num == 2){
        return 1;    
    } else {
        return rTrib(Num -1) + rTrib(Num-2) + rTrib(Num-3);
    }
}

// console.log(rTrib(3));
// console.log(rTrib(4));
// console.log(rTrib(5));
// console.log(rTrib(6));

// Paging Dr. Ackermann
// The Ackermann function is among the earliest examples of a computable but not primitive-recursive function. 
// It grows rapidly and hence can overflow the JavaScript stack frame even at very low values. 
// This function accepts two non-negative integer values, num1 and num2, and follows these rules:

// 1. ackermann(0,num2) == num2+1;
// 2. ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (de lo contrario, ver #1);
// 3. ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)).

// Don’t be dismayed if a num1 value as low as 4 “blows your stack”. That’s the nature of this function!   

function ackermann(num1, num2){
    if (num1 == 0){
        return num2 + 1;
    } else if (num2 == 0){
        return ackermann(num1-1, 1);
    } else {
        return ackermann(num1-1, ackermann(num1, num2-1))
    }
}

// console.log(ackermann(1, 2))

// Zibonacci

// This function borrows ideas from the Fibonacci series, 
// but the calculated results appear to zig and zag, hence the name. 
// A so-called ‘Zibonacci’ series would be defined by the following rules:

// Zib(0) == 1;
// Zib(1) == 1;
// Zib(2) == 2;
// Zib(2n+1) == Zib(n)+Zib(n-1)+1, if n > 0 (i.e. odd values 3 and higher);
// Zib(2n) == Zib(n)+Zib(n+1)+1, if n > 1 (i.e. even values 4 and higher).
// Create the Zibonacci(num) function. What is Zibonacci(10)? Zibonacci(100)?

// Second: For a given number that might be a Zibonacci result, 
// find the largest index that maps to that result. bestZibNum(3186) == 2467, bestZibNum(3183) == null.

function zib(n){
    if(n < 0){
        n = 0;
    }
    n = Math.floor(n);
    if (n<2) {
        return 1;
    } else if (n == 2){
        return 2;
    } else if (n%2 == 0){
        return zib(n/2) + zib(n/2+1) + 1;
    } else {
        n2 = (n-1)/2
        return zib(n2) + zib(n2-1) +1
    }
}

console.log(zib(10));
console.log(zib(100));

function bestZib(number) {
    var max;
    for(var i = 0; i < number; i++){
        if (zib(i) == number){
            max = i;
        }
    }
    return max;
}

console.log(bestZib(15));
console.log(bestZib(3186));
console.log(bestZib(3183));
console.log(zib(2467))