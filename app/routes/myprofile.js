// ROUTES TODOS
var myprofile = require('../models/myprofile.js');
module.exports 	= function(app) {
	app.get('/myprofiles', myprofile.findAll);
	app.post('/myprofiles', myprofile.create);
	app.put('/myprofiles/:id', myprofile.update);
	app.delete('/myprofiles/:id', myprofile.delete);
    
}
