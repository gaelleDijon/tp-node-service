const ttModel = require('../models/tabletipsModel');

exports.createTips = (req, res) => {
    ttModel.create(req.body.id_service, req.body.id_user, req.body.tips, (err, tips) =>{
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

exports.getAllByService = (req, res) => {
    ttModel.findByService(req.param.id, (err, tips) =>{
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
exports.getAllByTable = (req, res) => {
    ttModel.findByTable(req.param.id, (err, tips) =>{
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
    ttModel.all((err, tips) =>{
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

exports.updateTableTips = (req, res) => {
    ttModel.update(req.body.id_service, req.body.id_restaurantTable ,req.body.tips, (err, tips) =>{
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