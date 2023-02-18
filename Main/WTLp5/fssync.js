const readline = require(`readline-sync`);
const fs = require(`fs`);
var flag = true;

const readfile =()=>{
    var filename = readline.question("Enter filename")
    var output = fs.readFileSync(filename).toString();
    console.log(output);


}

const writefile = ()=>{
    var filename  = readline.question("Enter filename");
    var input = readline.question("Enter input");
    fs.writeFileSync(filename, input);
    console.log(input);
    console.log(filename);
}

const deletefile = ()=>{
    var filename = readline.question("Enter filename");
    fs.unlinkSync(filename);
    console.log(filename);
}

const appendfile = ()=>{
    var filename = readline.question("Enter filename");
    var input = readline.question("Enter input");
    fs.appendFileSync(filename, input);
    console.log(input);
    console.log(filename);
}

const renamefile = ()=>{
    var filename = readline.question("Enter Filename:");
    var input = readline.question("Enter input");
    fs.renameSync(filename, input);
    console.log(input);
    console.log(filename);
}

while(flag){
    var ch=readline.question(
        `Enter your choice:
        1.Read File
        2.Write File
        3.Append File
        4.Delete File
        5.Rename File
        6.Exit\n`
    );

    switch(ch){
        case `1`:
            readfile();
            break;
        case `2`:
            writefile();
            break;
        case `3`:
            deletefile();
            break;
        case `4`:
            appendfile();
            break;
        case `5`:
            renamefile();
            break;
        case `6`:
            flag = false;
            break;

    }


}
