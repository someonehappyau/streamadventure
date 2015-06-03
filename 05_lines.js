var through=require('through2');
var split=require('split');

var iLine=1;

function isOdd(number){
	return number % 2;
}

var ts=through(function(buffer, encoding, next){
		if (iLine % 2 ===0)
			this.push(buffer.toString().toUpperCase()+'\n');
		else
			this.push(buffer.toString().toLowerCase()+'\n');
		iLine++;	
		next();
	},
	function(done){
		done();
	});

process.stdin.pipe(split()).pipe(ts).pipe(process.stdout);
