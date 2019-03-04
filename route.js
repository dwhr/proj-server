var regisRoute = require('./registration/regRoute');
var editRoute = require('./editing/editingRoute');
var deleteRoute = require('./delete/deleteRoute');
var displayRoute = require('./display/displayRoute');

exports.loudeRoutes = function(app){
regisRoute(app);
editRoute(app);
deleteRoute(app);
displayRoute(app);
}