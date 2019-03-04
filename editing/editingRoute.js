var editingMgr = require('./editingMgr');

module.exports= function(app){
    app.route('/edit').put(editingMgr.edit);

}