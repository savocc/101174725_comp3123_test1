const fs = require("fs");

process.chdir(__dirname);
const newDir = dirPath => {
    const pathToDir = process.cwd()+dirPath;
     if(fs.existsSync(pathToDir)){
        console.log('Directory exists!');
    } else{
    fs.mkdir(pathToDir,{recursive:true},(error)=>{
    if(error){
        console.error('Error!',error);
    }
    else{
        console.log('Directory was created.');
    }
});
    }
    process.chdir(pathToDir);
    for(var i = 1; i<=10; i++) {
        var filename = 'logFile'+i+'.txt';
        var logmessage = 'log'+i+'!';
        fs.writeFile(filename, logmessage, function (err) {
            if (err) throw err;

        });
        console.log(filename)
    }
}
newDir(`\\Logs`)

