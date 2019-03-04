var createDA = require('./regDA');

exports.create= function(req,res){
    try{
        createDA.create(req,res);
    }
    catch(error){
        console.log(error);
    }
}
