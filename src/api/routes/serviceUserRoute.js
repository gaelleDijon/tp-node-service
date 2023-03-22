module.exports = (server) => {
    const suController = require('../controllers/userController');
    
    server
        .route('/serviceUser')
        .get(suController.allServiceUsers)
        .post(suController.createServiceUser);
    server
        .route('/serviceUser/:id')
        .get(suController.getServiceUser)
        .put(suController.updateServiceUser);
    server    
        .route('/serviceUser/user')
        .get(suController.allServiceUsers);
    server
        .route('serviceUser/delete/:id ')
        .delete(suController.deleteServiceUser);
}