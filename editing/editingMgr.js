var editingDA = require('./editingDA');

exports.edit = function(req,res)
{
    try{
        editingDA.edit(req,res);
    }
    catch(error){
        console.log(error);
    }
}