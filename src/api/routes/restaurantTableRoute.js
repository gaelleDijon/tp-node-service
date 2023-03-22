module.exports = (server) => {
    const rtController = require('../controllers/restaurantTableController');
    
    server
        .route('/table')
        .get(rtController.getAllTables)
        .post(rtController.createTable);
    server
        .route('/table/:id')
        .get(rtController.getTable);
    server    
        .route('/tables')
        .get(rtController.getAlltables);
    server
        .route('table/delete/:id')
        .put(rtController.deleteTable);
}