module.exports = (server) => {
    const ttController = require('../controllers/tableTipsController');
    
    server
        .route('/tabletips')
        .get(ttController.all)
        .post(ttController.create);
    server
        .route('/tabletips/:id')
        .put(ttController.updateTableTips);
}