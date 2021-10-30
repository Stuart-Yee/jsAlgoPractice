//- "{ [] ( ) }" should return **`true`**
//- "{ [(] ) }" should return **`false`**
//- "{ [ }" should return **`false`**

var openers = ["{", "[", "("];
var closers = ["}", "]", ")"];

function checkNest(myString){
    var expect = [];
    for(var i = 0; i < myString.length; i++){
        for(var o = 0; o < 3; o++){
            if (myString[i] == openers[o]){
                expect.push(closers[o]);
            } else if(myString[i] == closers[o]){
                if (myString[i] == expect[expect.length-1]){
                    expect.pop();
                } else {
                    return false;
                }
            }
        }
    }
    if(expect.length > 0){
        return false;
    } else {
        return true;
    }   
}


//testing
var true1 = "{ [] ( ) }";
var false1 = "{ [(] ) }";
var false2 = "{ [ }";
var myTest = "{mucho} [ado] (1-2) gotcha([{])"
//console.log("start true1")
//console.log(checkNest(true1));
//console.log("start false1")
//console.log(checkNest(false1));
//console.log("start false2")
//console.log(checkNest(false2));
console.log(checkNest(myTest))
