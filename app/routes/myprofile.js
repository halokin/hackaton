// ROUTES myprofile
var Myprofile = require('../models/myprofile.js');
module.exports 	= function(app) {
	app.get('/myprofiles', Myprofile.findAll);
	app.post('/myprofiles', Myprofile.create);
	app.put('/myprofiles/:id', Myprofile.update);
	app.delete('/myprofiles/:id', Myprofile.delete);
    
}
