var fs = require('fs');//fs used for read and write on file
//console.log(fs.readFileSync('readme.txt','utf-8'));
var print = fs.readFileSync('readme.txt','utf-8');
console.log(print);

console.log('writing and creating in the file read from thr first file');
var readme = 'Graduating badge 2019';//fs.readFileSync('readme.txt','utf-8');
fs.writeFileSync('writeonfile.txt',readme);
var print1 = fs.readFileSync('writeonfile.txt','utf-8');
console.log(print1);


//assynchronous version
console.log('');
console.log('aschronous versoin');//it is not blocking the code below
fs.readFile('readme.txt','utf-8',function(err,data){
    //console.log(data);
    fs.writeFile('writefile.txt',data ,function(errw,dataw){
        //var o = fs.readFileSync('writefile.txt','utf-8');

        console.log(data);
    });
    
});
console.log('testing');