/**
 * Model for statistic operations
 */
const db = require('../config/database');

class Statistiques{
    static allTipsByMonth(dateM, callback){
        db.query('SELECT * FROM ', (err, res) => {
            callback(res.map((c)=>new User(c)));
        })
    }
    static allTipsByUser(id, callback){

    }
    static userMonthlytips(id, dateM, callback){

    }
}