
const prompt = require("prompt-sync")();
const ll=parseInt(prompt("Enter Lower Limit Number"));
const hl=parseInt(prompt("Enter Upper Limit Number"));

console.log(`Prime Numbers between ${ll} and ${hl} are:`);



for(let i=ll;i<hl;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
        }
    }
    if(flag==0 && i>1){
        console.log(i);
    }
}
