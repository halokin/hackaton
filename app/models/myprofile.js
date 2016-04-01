// MODEL MYPROFILE
var mongoose = require('mongoose');
var myprofileSchema = new mongoose.Schema({
firstname: String,
lastname: String,
email: String,
password: String,
description: String,
homme: String,
femme: String,
imageFile: String,
city:String,
zip:String,
street:String,
country:String

});
var Myprofile = {

    model: mongoose.model('Myprofile', myprofileSchema),

    create: function(req, res) {
		Myprofile.model.create(
			req.body,
			function(){
			res.sendStatus(200);
		});
	},
	findAll: function(req, res) {
		Myprofile.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Myprofile.model.findByIdAndUpdate(req.params.id,
						freq.body, function(){
			res.sendStatus(200);
		});
	},
	delete: function(req, res){
		Myprofile.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		});
	}
};
module.exports = Myprofile;
