// ROUTES TODOS
var Trek = require('../models/trek.js');
module.exports 	= function(app) {
	app.get('/treks', Trek.findAll);
	app.post('/treks', Trek.create);
	app.put('/treks/:id', Trek.update);
	app.delete('/treks/:id', Trek.delete);
    
}
