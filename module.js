var fs = require('fs');
var path = require('path');
module.exports = function(filePath, fileExt, callback){
		var listOfFiles = [];
		fs.readdir(filePath, function(err, files){
		if(err){
			return callback(err);
		} else {
			for(i = 0; i < files.length; i++){
				if(path.extname(files[i]) === "." + fileExt) {
					listOfFiles.push(files[i]);
				}
			}
		}
		callback(null, listOfFiles);	
	});
};

	