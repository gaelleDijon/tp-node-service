const db = require('../config/database');
const moment = require('moment');
moment.locale('fr');

class Service{
    constructor(c){
        if(c==null){
            this._id = null;
            this._shiftType = null;
            this._shiftClosed = null;
            this._created_at = null;
            this._modified_at = null;
        }else{
            this._id = c.id;
            this._shiftType = c.shiftType;
            this._shiftClosed = c.shiftClosed;
            this._created_at = c.created_at;
            this._modified_at = c.modified_at;
        }
    }
    get id(){
        return this._id;
    }
    get shiftType(){
        return this._shiftType;
    }
    get shiftClosed(){
        return this._shiftClosed;
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
    set shiftType(x){
        this._shiftType = x;
    }
    set shiftClosed(x){
        this._shiftClosed = x;
    }
    set created_at(x){
        this._created_at = x;
    }
    set modified_at(x){
        this._modified_at = x;
    }
    
    static all(callback){
        db.query('SELECT * from service', (err, datas) => {
            callback(datas.map((c)=>new Service(c)));
        })
    }
    static create(shiftType, shiftClosed, callback){
        db.query('INSERT INTO service (shiftType, shiftClosed) VALUES (?,?)', [shiftType, shiftClosed], (err, res) => {
            callback(res);
        })
    }
    static getService(id, callback){
        db.query('SELECT * FROM service', (err, res) =>{
            callback(res.map((c)=>new Service(c)));
        })
    }
    static update(id, shiftClosed, callback){
        db.query('UPDATE service SET shiftClosed = ? WHERE id = ?', [shiftClosed, id], (err, res) => {
            callback(res);
        })
    }
    static delete(id, callback){
        db.query('DELETE FROM service WHERE id = ?', [id], (err, res) => {
            callback(res);
        })
    }
    


}

module.exports = Service;