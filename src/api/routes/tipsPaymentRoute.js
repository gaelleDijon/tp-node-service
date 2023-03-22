module.exports = (server) => {
    const tpController = require('../controllers/tipsPaymentController');
    
    server
        .route('/tipspayment')
        .get(tpController.all)
        .post(tpController.create);
    server
        .route('/tipspayment/:id')
        .get(tpController.getAllByUser)
        .put(tpController.update);
}