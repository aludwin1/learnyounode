var module = require('./module.js');
module(process.argv[2], process.argv[3], function(err, files) {
	if(err) {
		return err;
	} else {
		for(i = 0; i < files.length; i++) {
			console.log(files[i]);
		}
	}
});
