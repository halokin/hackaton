// ROUTES TODOS
var Bike = require('../models/bike.js');
module.exports 	= function(app) {
	app.get('/bike', Bike.findAll);
	app.post('/bike', Bike.create);
	app.put('/bike/:id', Bike.update);
	app.delete('/bike/:id', Bike.delete);
    
}
