var editing = require ('../model/reg.model');

exports.edit=function(req,res){
    editing.findById({'_id':req.params.id}).select().exec(function(err,result){
        if(err){
            res.status(500).send('something error');
        }
        else{
            result.name=req.body.name;
            result.phone=req.body.phone;
            result.email=req.body.email;
            result.password=req.body.password;
            result.save(function(err,detail){
                if(err){
                    res.status(500).send({
                        'message':'something error'
                    });
                    
                    }
                    else{
                        res.status(200).JSON(detail);

                    
            
                }
            })
        }}
    )
}