const db = require('../config/database');
const moment = require('moment');
moment.locale('fr');

class User{
    constructor(c){
        if(c==null){
            this._id = null;
            this._firstname = null;
            this._lastname = null;
            this._status = null;
            this._active = null;
            this._created_at = null;
            this._modified_at = null;
        }else{
            this._id = c.id;
            this._firstname = c.firstname;
            this._lastname = c.lastname;
            this._status = c.status;
            this._active = c.active;
            this._created_at = c.created_at;
            this._modified_at = c.modified_at;
        }
    }
    get id(){
        return this._id;
    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get status(){
        return this._status;
    }
    get active(){
        return this._active;
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
    set firstname(x){
        this._firstname = x;
    }
    set lastname(x){
        this._lastname = x;
    }
    set status(x){
        this._status = x;
    }
    set active(x){
        this._active = x;
    }
    set created_at(x){
        this._created_at = x;
    }
    set modified_at(x){
        this._modified_at = x;
    }
    
    static all(callback){
        db.query('SELECT * from users', (err, res) => {
            callback(res.map((c)=>new User(c)));
        })
    }
    static findById(id, callback){
        db.query('SELECT * FROM users WHERE id=?', [id], (err, res) => {
            callback(res.map((c)=>new User(c)));
        })
    }
    static findByStatus(id, status, callback){
        db.query('SELECT * FROM users WHERE id=? AND status=?', [id, status], (err, res) => {
            callback(res.map((c)=>new User(c)));
        })
    }
    static create(firstname, lastname, status, active, callback){
        db.query('INSERT INTO users (firstname, lastname, status, active) VALUES (?,?,?,?)', [firstname, lastname, status, active], (err, res)=>{
            callback(res);
        })
    }
    static update(id, firstname,lastname, status,active, callback){
        db.query("UPDATE users SET `firstname` = ? , `lastname` = ?,  `status` = ?, `active`= ? WHERE `id` = ? ", [firstname, lastname, status, active], (err, res)=>{
            callback(res);
        })
    }
    //anonymisation
    static delete(id, callback){
        db.query("UPDATE user SET `active` = 0, `firstname` = 'anonymous', `lastname` = 'anonymous' WHERE `id` = ? ", [id], (err, res) => {
            callback(res);
        })
    }

}
module.exports = User;