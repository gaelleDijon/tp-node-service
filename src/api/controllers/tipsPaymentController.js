const tpModel = require('../models/tipsPaymentModel');

exports.create = (req, res) => {
    tpModel.create(req.body.id_service, req.body.id_user, req.body.tips, (err, tips) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(200);
            res.json(tips);
        }
    })
    
}

exports.getAllByUser = (req, res) => {
    tpModel.findByUser(req.param.id, (err, tips) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(200);
            res.json(tips);
        }
    })
}

exports.all = (req, res) => {
    tpModel.all((err, tips) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(200);
            res.json(tips);
        }
    })
}

exports.update = (req, res) => {
    tpModel.update(req.body.amount, req.param.id, (err, tips) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(200);
            res.json(tips);
        }
    })
}