const { clear } = require('console');
var process = require('process');

var Multiplication = (num)=>{
    for(let i =1;i<=10;i++){
        console.log(num,"*",i,num*i);
    }
}

var CheckLeapyear = (year)=>{
    if((year%400!=0 && year%4==0)||(year%400==0)){
        console.log("Leap Year")
        return;
    }
    console.log("Not a leap year");
}


const checkpallindrome = (pallindrome)=>{
let len = pallindrome.length;
let half = len / 2;

for(let i=0; i<half; i++){
    if(pallindrome[i]!==pallindrome[len-i-1]){
        console.log("Not a pallindrome");
        return;
    }
    console.log("Pallindrome");


}

}



process.nextTick(Multiplication,13);
setImmediate(CheckLeapyear,2020);
const setIntervals = setInterval(checkpallindrome,500,"sanas");
setTimeout(()=>{
    clearInterval(setIntervals);
},600)