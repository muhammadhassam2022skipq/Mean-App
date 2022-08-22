const express = require ('express');
const router = express.Router();
const item = require ('../models/shopping-model');

router.get ('/items', (req,res,next)=> {
   item.find((err,items) => {
    if (err) {
        res.json(err);
    }
    else {
        res.send (items)
    }
   }) 
});
router.post ('/items', (req,rex,next)=> {
     newShppingItem = new item ({
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
         
     })

});
router.put ('/put_route', (req,rex,next)=> {

});
router.delete ('/delete_route', (req,rex,next)=> {

});
module.exports= router;