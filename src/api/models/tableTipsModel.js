const db = require('../config/database');
const moment = require('moment');
moment.locale('fr');

class TableTips{
    constructor(c){
        if(c==null){
            this._id = null;
            this._id_service = null;
            this._id_restaurantTable = null;
            this._tips = null;
            this._created_at = null;
            this._modified_at = null;
        }else{
            this._id = c.id;
            this._id_service = c.id_service;
            this._id_restaurantTable = c.id_restaurantTable;
            this._tips = c.tips;
            this._created_at = c.created_at;
            this._modified_at = c.modified_at;
        }
    }
    get id(){
        return this._id;
    }
    get id_service(){
        return this._id_service;
    }
    get id_restaurantTable(){
        return this._id_restaurantTable;
    }
    get tips(){
        return this._tips;
    }
    get created_at(){
        return moment(this._created_at);
    }
    get modified_at(){
        return moment(this._modified_at);
    }
    set id(x){
        this._id = x;
    }
    set id_service(x){
        this._id_service = x;
    }
    set id_restaurantTable(x){
        this._id_restaurantTable = x;
    }
    set tips(x){
        this._tips = x;
    }
    set created_at(x){
        this._created_at = x;
    }
    set modified_at(x){
        this._modified_at = x;
    }
    
    static all(callback){
        db.query('SELECT * from tabletips', (err, res) => {
            callback(res.map((c)=>new TableTips(c)));
        })
    }
    //get tips by service
    static findByService(id, callback){
        db.query('SELECT * FROM tabletips WHERE id_service = ?', [id], (err, res) => {
            callback(res.map((c)=>new TableTips(c)));
        })
    }
    //get tips by table
    static findByTable(id, callback){
        db.query('SELECT * FROM tabletips WHERE id_restaurantTable = ?', [id], (err, res) => {
            callback(res.map((c)=>new TableTips(c)));
        })
    }
    static create(id_s, id_rt, tips, callback){
        db.query('INSERT INTO tabletips (id_service, id_restaurantTable, tips) VALUES (?,?,?)', [id_s, id_rt, tips], (err, res)=>{
            callback(res);
        })
    }
    //update tips
    static update(id_s, id_rt, tips, callback){
        db.query("UPDATE tabletips SET `tips` = ? WHERE `id_service` = ? AND id_restaurantTable=? ", [tips,id_s, id_rt], (err, res)=>{
            callback(res);
        })
    }

}
module.exports = TableTips;