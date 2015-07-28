var concat=require('concat-stream');
var through=require('through2');

var ts=through(function(buffer,encoding,next){
	var s=buffer.toString().split('').reverse();
	console.log(s.pipe(concat(function(buffer){})));
	this.push(s.join());
	next();
},function(done){
	done();
});	

process.stdin.pipe(concat(function(buffer){
	var s=buffer.toString().split('').reverse().join('');
	console.log(s);
}));
