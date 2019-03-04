var registration = require('../model/reg.model');

exports.create= functaion(req,res)
{
    var reg = new registration();
    reg.name=req.body.name;
    reg.phone=req.body.phone;
    reg.email=req.body.email;
    reg.password=req.body.password;
    reg.save(
        function(err,result)
        {
            if(err){
                res.status(500).send({
                    'message':"error"
                })
            }
            else{
                res.status(200).JSON(result);
            }
        }
        )
        
    
}