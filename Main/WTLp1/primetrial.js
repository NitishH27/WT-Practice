const prompt = require(`prompt-sync`)();
let ll=1; 
let hl=100;

console.log("Prime Numbers from 1 to 100");
for(let i=ll;i<hl;i++){
    let flag = 0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0 && i>1){
        console.log(i);
    }
}