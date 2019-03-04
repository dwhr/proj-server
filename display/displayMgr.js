var displayDA = require('./displayDA');

exports.display=function(req,res)
{
    try{
        displayDA.display(req,res);
    }
    catch(error){
        console.log(error);
    }
}