// MODEL INVITES
var mongoose = require('mongoose');


var invitesSchema = new mongoose.Schema({
    description: String,
    distance: number,
    badge: String,
    time: number,
    image: String
});

var Treks = {

    model: mongoose.model('Treks', treksSchema),

    create: function (req, res) {
        Treks.model.create(req.body, function () {
            res.sendStatus(200);
        })
    },

    findAll: function (req, res) {
        Treks.model.find(function (err, data) {
            res.send(data);
        });
    },

    update: function (req, res) {
        Treks.model.findByIdAndUpdate(req.params.id, req.body, function () {
            res.sendStatus(200);
        })
    },

    delete: function (req, res) {
        Treks.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    }
}

module.exports = Invites;
