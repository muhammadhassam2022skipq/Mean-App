const express= require ('express');
const mongoose = require ('mongoose');
 const bodyParser= require ('body-parser');
 const cors = require ('cors');
 const route = require('./routes/routes')
 
 const app = express ();

 app.use(cors());
 app.use(bodyParser.json());
 app.get ('', (req,res,next)=> {
    res.send("Home")
 })
 app.use ('/api', route)
//  


 mongoose.connect('mongodb://cmdlhrltx03:27017/hassamMeanApp').then(() => {
    app.listen(4000, () => {
        console.log("Listening on port 4000");
    })
}).catch((err) => {
    console.log("The error is: " + err);
});