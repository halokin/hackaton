// ROUTES TODOS
var Bike = require('../models/bike.js');
module.exports 	= function(app) {
	app.get('/bikes', Bike.findAll);
	app.post('/bikes', Bike.create);
	app.put('/bikes/:id', Bike.update);
	app.delete('/bikes/:id', Bike.delete);
    
}
