var trumpet=require('trumpet');
var through=require('through2');

var tr=trumpet();
tr.pipe(process.stdout);

var s=tr.select('.loud').createStream();
s.pipe(through(function(buf,_,next){
	this.push(buf.toString().toUpperCase());
	next();
})).pipe(s);

process.stdin.pipe(tr);
