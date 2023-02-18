var intervals = setInterval(()=>{
    console.log("hell");
},500)
setTimeout(()=>{
    console.log("Executed 10 times");
    clearInterval(intervals);
},5000)