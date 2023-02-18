const process = require('process');

var Multiplication = (num)=>{
    for(let i=1;i<=10;i++){
        console.log(num,"*",i,"=",num*i);
        
    }

}

var CheckLeapyear = (year)=>{
    if((year%400!==0 && year%4==0)||(year%400==0)){
        console.log("It is a leap year");
        return;
    }
    console.log("Not a leap year");
}

var checkpallindrome =(pallindrome)=>{
    let len=pallindrome.length;
    let half = len/2;
    for(let i=0;i<half;i++){
        if(pallindrome[i]==pallindrome[len-i-1]){
            console.log("It is a pallindrome");
            return;
        }
    }
    console.log("It is not a pallindrome");
}

process.nextTick(Multiplication,13);
setImmediate(CheckLeapyear,2001);
setIntervals = setInterval(checkpallindrome,500,"SANAS")
setTimeout(()=>{
    clearInterval(setIntervals);

},600)