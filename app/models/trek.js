// MODEL INVITES
var mongoose = require('mongoose');


var trekSchema= new mongoose.Schema({
    description: String,
    distance: Number,
    badge: String,
    time: Number,
    image: String
});

var Trek = {

    model: mongoose.model('Trek', trekSchema),

    create: function (req, res) {
        Trek.model.create(req.body, function () {
            res.sendStatus(200);
        })
    },

    findAll: function (req, res) {
        Trek.model.find(function (err, data) {
            res.send(data);
        });
    },

    update: function (req, res) {
        Trek.model.findByIdAndUpdate(req.params.id, req.body, function () {
            res.sendStatus(200);
        })
    },

    delete: function (req, res) {
        Trek.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    }
}

module.exports = Trek;
