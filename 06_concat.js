var concat=require('concat-stream');

process.stdin.pipe(concat(function(buffer){
	var s=buffer.toString().split('').reverse().join('');
	console.log(s);
}));
