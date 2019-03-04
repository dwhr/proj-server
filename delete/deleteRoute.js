var deletingMgr = require('./deleteMgr');
module.exports= function(app){
    app.route('delete').delete(deletingMgr.delete);

}