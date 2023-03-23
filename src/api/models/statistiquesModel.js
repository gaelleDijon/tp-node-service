/**
 * Model for statistic operations
 */
const db = require('../config/database');

class Statistiques{
    static allTipsByMonth(dateM, callback){
        db.query("SELECT SUM(tips) AS sum_month FROM tabletips WHERE created_at LIKE '%-?-%' ",[] , (err, res) => {
            callback(res.map((c)=>new Statistiques(c)));
        })
    }
    static allTipsByTable(id, callback){
        db.query("SELECT SUM(tips) AS sum_table FROM tabletips WHERE id_restaurantTable LIKE ? ", [id], (err, res) => {
            callback(res.map((c)=>new Statistiques(c)));
        })
    }
    static allUserTips(id, callback){
        db.query("SELECT SUM(amount) AS amount FROM tipspayments WHERE id_user LIKE ? ",[id] , (err, res) => {
            callback(res.map((c)=>new Statistiques(c)));
        })
    }
}