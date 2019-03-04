var displaying = require ('../model/reg.model');

exports.display=function(req,res){
    displaying.find({}).select().exec(function(err,result){
        if(err){
            res.status(500).send('something error');
        }
        else{
            res.status(200).JSON(result);
        }
    })
}