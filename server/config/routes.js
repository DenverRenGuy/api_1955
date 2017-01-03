var persons = require('../controllers/persons.js');

module.exports = function(app) {
    app.get('/', function(req, res){
        persons.showAll(req, res);
    })
    app.get('/new/:name', function(req, res) {
        persons.add(req, res);
    })
    app.get('/:name', function(req, res) {
        persons.show(req, res);
    })
    app.get('/remove/:name', function(req, res) {
        persons.destroy(req, res);
    })
}
