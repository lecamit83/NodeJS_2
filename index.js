var fileStream = require("fs", "UTF-8");

fileStream.readFile("input.txt", function ( error , data ){
	if( error ) {
		console.log(error.stack);
		return;
	} 
	console.log(data.toString());
});

console.log("Ending Programing");