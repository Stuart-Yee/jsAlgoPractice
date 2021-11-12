function alternate(str){
    return str.split("").forEach((element, index) => {
        if(index%2 ==1){
            element = element.toLowerCase();
            
        } else {
            element = element.toUpperCase();
        }
        console.log(index, element);
        return str;
    });
}

stringA = "Hello Dear!"

console.log(alternate(stringA));