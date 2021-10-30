function removeBlanks(myString){
    return myString.replace(/ /g, "")
}

//Testing
//console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

function convertToNumber(myString){
    return parseInt(myString.replace(/\D/g, ""), 10 );
}

//testing
//console.log(convertToNumber("0s1a3y5w7h9a2t4?6!8?0"))

function toAcronym(myString){
    var acronym = ""
    var strArr = myString.trim().split(" ");
    for(var i in strArr){
        acronym += strArr[i][0].toUpperCase();
    }
    return acronym;
}

//testing
//console.log(toAcronym(" there's no free lunch - gotta pay yer way. "));
//console.log(toAcronym("Live from New York, it's Saturday Night!"));

function countNonSpace(myString){
    myString = myString.replace(/ /g, "");
    return myString.length;
}

//testing
//console.log(countNonSpace("Honey pie, you are driving me crazy"));

function shortStrings(myStringArr, length){
    for(var i = 0; i < myStringArr.length; i++){
        if(myStringArr[i].length < length){
            myStringArr.splice(i);
        }
    }
    return myStringArr;
}

//test
myStrArray = ["Tabatha", "Stuart", "Wyatt", "Mom", "Dad", "Jo"]
console.log(shortStrings(myStrArray, 4));