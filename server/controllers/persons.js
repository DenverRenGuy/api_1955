var mongoose = require('mongoose')
var Person = mongoose.model('Person')

module.exports = {
    showAll: function(req, res) {
        Person.find({}, function(err, persons){
            res.json({persons:persons});
        });
    },
    show: function(req, res){
        Person.find({name:req.params.name}, function(err, person){
            console.log(person);
            res.json({person:person[0]});
        })
    },
    add: function(req, res){
        var person = new Person({name: req.params.name});

        person.save(function(err){
            if(err){
                console.log('Error saving to the database: ' + err);
                res.redirect('/');
            }
            else{
                console.log('Successfuly Added Person to Database');
                res.redirect('/');
            }
        })
    },
    destroy: function(req, res){
        Person.remove({name:req.params.name}, function(err){
            if(err){
                console.log('Unable to destroy Person');
            }
            else {
                res.redirect('/');
            }
        })
    }
}
