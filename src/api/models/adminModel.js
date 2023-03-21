const db = require('../config/database');
const moment = require('moment');
moment.locale('fr');

class Admin{
    constructor(c){
        if(c==null){
            this._id = null;
            this._pincode = null;
            this._created_at = null;
            this._modified_at = null;
        }else{
            this._id = c.id;
            this._pincode = c.pincode;
            this._created_at = c.created_at;
            this._modified_at = c.modified_at;
        }
    }
    get id(){
        return this._id;
    }
    get pincode(){
        return this._pincode;
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
    set pincode(x){
        this._pincode = x;
    }
    set created_at(x){
        this._created_at = x;
    }
    set modified_at(x){
        this._modified_at = x;
    }
    
    // static all(callback){
    //     db.query('SELECT * from admin', 
    //     function(err, datas){
    //         callback(datas.map((c)=>new Admin(c)));
    //     })
    // }
    static create(pincode, callback){
        db.query('INSERT INTO admin (pincode) VALUES (?)', [pincode], (err, res)=>{
            callback(res);
        })
    }

}
module.exports = Admin;