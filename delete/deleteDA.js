var deleting = require('../model/reg.model');

exports.delete= function(req,res){
    deleting.findByIdAndRemove(req.params.id,function(err,result){
        if(err){
            res.status(500).send({
                'message':'something error'
            })
        }else{
            deleting.find({},function(err,result){
                if(err)
                {
                    res.status(500).send({
                        'message':'something error'
                    })
                }
                else{
                    res.status(200).JSON(result);
                }
            })
        }
    })
}