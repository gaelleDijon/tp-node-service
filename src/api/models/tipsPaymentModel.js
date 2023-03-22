const db = require('../config/database');
const moment = require('moment');
moment.locale('fr');

class TipsPayment{
    constructor(c){
        if(c==null){
            this._id = null;
            this._amount = null;
            this._created_at = null;
            this._modified_at = null;
        }else{
            this._id = c.id;
            this._amount = c.amount;
            this._created_at = c.created_at;
            this._modified_at = c.modified_at;
        }
    }
    get id(){
        return this._id;
    }
    get amount(){
        return this._amount;
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
    set amount(x){
        this._amount = x;
    }
    set created_at(x){
        this._created_at = x;
    }
    set modified_at(x){
        this._modified_at = x;
    }
    
    static all(callback){
        db.query('SELECT * from tipspayments', (err, res) => {
            callback(res.map((c)=>new TipsPayment(c)));
        })
    }
    //get paiemnent by user
    static findByUser(id, callback){
        db.query('SELECT * FROM tipspayments WHERE id_user = ?', [id], (err, res) => {
            callback(res.map((c)=>new TipsPayment(c)));
        })
    }
    static create(amount, id_user, callback){
        db.query('INSERT INTO tipspayments (amount, id_user) VALUES (?,?)', [amount, id_user], (err, res)=>{
            callback(res);
        })
    }
    //update tips
    static update(amount, id, callback){
        db.query("UPDATE tipspayments SET `amount` = ? WHERE `id` = ?", [amount,id], (err, res)=>{
            callback(res);
        })
    }

}
module.exports = TipsPayment;