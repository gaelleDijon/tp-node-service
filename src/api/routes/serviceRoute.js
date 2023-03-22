module.exports = (server) => {
    const serviceController = require('../controllers/serviceController');
    
    server
        .route('/service')
        .get(serviceController.getAllServices)
        .post(serviceController.createService);
    server
        .route('/service/:id')
        .get(serviceController.getService)
        .put(serviceController.updateService);
    server    
        .route('/services')
        .get(serviceController.getAllServices);
    server
        .route('service/delete/:id')
        .delete(serviceController.deleteService);
}