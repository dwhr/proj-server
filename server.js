const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const app = express();
const port =3009;
const routes = require('./route');

app.use(cors());
app.use(bodyparser.json({limit:'10mb'}));
app.use(bodyparser.urlencoded({extended:true}));
routes.loudeRoutes(app);
app.listen(port,()=>{
    console.log('server started successfully');
});
/* app.post('/create',function(req,res){
    res.status(200).send(req.body);
}) */
console.log('server successfull started'+port);