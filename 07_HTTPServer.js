var http=require('http');
var through=require('through2');

var ts=through(function(buffer,encoding,next){
	this.push(buffer.toString().toUpperCase());
	next();
},
function(done){
	done();
});

var server=http.createServer(function(req,res){
	if (req.method==='POST'){
		req.pipe(ts).pipe(res);
	}
});
server.listen(process.argv[2]);

