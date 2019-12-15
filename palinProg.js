function isPalin(word){
    let start=0;
    let end=word.length-1;
    while(start<end){
        if(word.charAt(start)!=word.charAt(end)){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalin(""));


function palindrome (str){
    var rev=str.toLowerCase().replace(' ','').split('').reverse().join('');
    if (rev==str)
        console.log("true");
    else
        console.log("false");
}
palindrome("manam");
palindrome("man");


