const rtModel = require('../models/restaurantTableModel');

exports.createTable = (req, res) => {
    rtModel.create((err, table) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json(table);
        }
    });
}
exports.getTable = (req, res) => {
    rtModel.getTable(req.params.id, (err, table) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json(table);
        }
    });
}

exports.getAllTables = (req, res) => {
    rtModel.all((err, tables) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json(tables);
        }
    });
}

exports.updateTable = (req, res) => {
    rtModel.update(req.params.id,req.body.name, (err, table) => {
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json(table);
        }
    });
}

exports.deleteTable = (req, res) => {
    rtModel.delete(req.params.id, (err, del) =>{
        if(err){
            res.status(401);
            console.log(err);
            res.json({message: err});
        }else{
            res.status(201);
            res.json({message: del});
        }
    });
}