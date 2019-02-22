var http=require('http');
var fs=require('fs');

var MyreadStream = fs.createReadStream(__dirname +'/readme.txt');
var MywriteStream = fs.createWriteStream(__dirname+ '/writeme.txt');

MyreadStream.on('data',function(chunk){
    console.log('receive new chunk');
    console.log(chunk);
    MywriteStream.write(chunk);
    console.log(fs.readFileSync('writeme.txt','utf-8'));

    
});