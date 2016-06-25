
var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(filePath, function(err, files){
	if(err){
		throw err;
	} else {
		for(i = 0; i < files.length; i++){
			if(path.extname(files[i]) === "." + fileExt) {
				console.log(files[i]);
			}
		}
	}	
});


	





