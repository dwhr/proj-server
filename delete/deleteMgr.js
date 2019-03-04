var deletingDA = require('./deleteDA');

exports.delete=function(req,res){
    try{
        deletingDA.delete(req,res);
    }
    catch(error){
        console.log(error);
    }
}