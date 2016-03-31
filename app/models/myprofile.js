// MODEL MYPROFILE
var mongoose = require('mongoose');
var myprofileSchema = new mongoose.Schema({
myprofile: Object
});
var Myprofile = {

    model: mongoose.model('Myprofile', myprofileSchema),

    create: function(req, res) {
		Myprofile.model.create({
        firstname: req.body.firstname,
      			lastname: req.body.lastname,
            email: req.body.email,
      			homme: req.body.homme,
            femme:req.body.femme,
            password: req.body.password,
      			image: req.body.image,
      			city:req.body.city,
      		  zip:req.body.zip,
      		  street:req.body.street,
      		  country:req.body.country

		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Myprofile.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Myprofile.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Myprofile.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}
module.exports = Todo;
