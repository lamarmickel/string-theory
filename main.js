function xify(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr = newStr + "x";
    }
    return newStr;
}
console.log(xify("hi there"));
//xify


function yellingChars(str){
    let newStr = "";
    for(let i = 0; i < str.length; i ++){
        let yelling = "!";
        newStr = newStr + str[i] + yelling;
    } return newStr
} console.log(yellingChars("goodness"));
//yellingChars



function indexedChars(str){
    let newStr = "";
    for(let i =0; i < str.length; i++){
        newStr = newStr + i + str[i];
    }
    return newStr;
}
console.log(indexedChars("hello"));
//indexedChars



function exclaim(str){
    let newStr = "";
    for(let i =0; i < str.length; i++){
        if (str[i] === "?" || str[i] === "."){
            newStr = newStr + "!"
        } else {
            newStr = newStr + str [i]
        }
    } return newStr
} console.log(exclaim("What are you doing? Are you a fool? "))
//exclaim


function reverse(str){
    let newStr = "";
    for(let i =0; i < str.length; i++){
        
    }
}





function ciEmailify(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        if(str[i] === " "){
            newStr += ".";
        } else {
            newStr += str[i];
        }
    } return newStr + "@codeimmersives.com"

} console.log(ciEmailify("lamar mickel"))
//ciEmailify












