// MODEL BIKE
var mongoose = require('mongoose');


var bikeSchema = new mongoose.Schema({
	description: String,
	description: String,
	distance: Number,
	badge: String,
    time: Number,
    image: String


});


var Bike = {
    
    model: mongoose.model('Bike', bikeSchema),
    
    create: function(req, res) {
		Bike.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Bike.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Bike.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Bike.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}
module.exports = Bike;
