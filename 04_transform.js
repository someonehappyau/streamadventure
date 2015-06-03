var through=require('through2');

var ts=through(function(buffer, encoding, next){
		this.push(buffer.toString().toUpperCase());
		next();
	},
	function(done){
		done();
	});

process.stdin.pipe(ts).pipe(process.stdout);
