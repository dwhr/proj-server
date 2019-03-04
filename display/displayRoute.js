var displayMgr = require ('./displayMgr');

module.exports= function(app){
    app.route('/display').get(displayMgr.display);

}