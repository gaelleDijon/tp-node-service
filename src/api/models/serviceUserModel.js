const db = require('../config/database');

class ServiceUser{
    static create(id_service, id_user, callback){
        db.query('INSERT INTO FROM serviceuser (id_service,id_user) VALUES (?,?)', [id_service,id_user],  (err, res) => {
            callback(res);
        })
    }

    static all(callback){
        db.query('SELECT * FROM serviceuser',  (err, res)=>{
            callback(res);
        })
    }
    //get all services by user
    static allServicesByUser(id, callback){
        db.query('SELECT * FROM serviceuser',  (err, res)=>{
            callback(res);
        })
    }
    //get user by service
    static getServiceUser(id, callback){
        db.query('SELECT * FROM serviceuser WHERE id_service = ?', [id], (err, res)=>{
            callback(res);
        })
    }
    
    //ne nado
    static updateByUser(id_service, id_user, callback){
        db.query('UPDATE serviceuser SET `id_service`= ? WHERE `id_user`=? ', [id_service, id_user],  (err, res)=>{
            callback(res);
        })
    }
    //ne nado
    static delete(id_service, id_user, callback){
        db.query('DELETE FROM serviceuser WHERE `id_service`= ? AND `id_user`=? ', [id_service, id_user],  (err, res)=>{
            callback(res);
        })
    }
}
module.exports = ServiceUser;