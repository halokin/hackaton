// ROUTES TODOS
var Trek = require('../models/trek.js');
module.exports 	= function(app) {
	app.get('/trekes', Trek.findAll);
	app.post('/trekes', Trek.create);
	app.put('/trekes/:id', Trek.update);
	app.delete('/trekes/:id', Trek.delete);
    
}
