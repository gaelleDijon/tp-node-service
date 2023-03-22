const db = require('../config/database');
const moment = require('moment');
moment.locale('fr');

class RestaurantTable{
    constructor(c){
        if(c==null){
            this._id = null;
            this._name = null;
            this._created_at = null;
            this._modified_at = null;
        }else{
            this._id = c.id;
            this._name = c.name;
            this._created_at = c.created_at;
            this._modified_at = c.modified_at;
        }
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
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
    set name(x){
        this._name = x;
    }
    set created_at(x){
        this._created_at = x;
    }
    set modified_at(x){
        this._modified_at = x;
    }
    
    static create(id, callback){
        db.query('INSERT INTO restauranttable (id) VALUES (?)', [id], (err, res)=>{
            callback(res);
        })
    }
    static getTable(id, callback){
        db.query('SELECT * FROM restauranttable WHERE id = ?', [id], (err, res)=>{
            callback(res);
        })
    }
    static all(callback){
        db.query('SELECT * FROM restauranttable',  (err, res)=>{
            callback(res.map((c)=>new RestaurantTable(c)));
        })
    }
    static update(id, name, callback){
        db.query('UPDATE restauranttable SET `name`= ? WHERE `id`=? ', [name, id],  (err, res)=>{
            callback(res);
        })
    }
    static delete(id, callback){
        db.query('DELETE FROM restauranttable WHERE `id`=? ', [id],  (err, res)=>{
            callback(res);
        })
    }

}
module.exports = RestaurantTable;