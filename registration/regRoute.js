var createMgr= require('./regMgr');


module.exports= function(app){
    app.route('/create').post(createMgr.create);

}