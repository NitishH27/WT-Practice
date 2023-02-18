const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter number of terms:"));
let n1=0,n2=1,nextterm;

console.log("Fibonacci Series..:");

for(let i=1;i<=number;i++){
    console.log(n1);
    nextterm = n1+n2;
    n1=n2;
    n2=nextterm;
}