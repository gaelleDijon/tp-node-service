module.exports = (server) => {
    const userController = require('../controllers/userController');
    
    server
        .route('/user')
        .get(userController.getAllUsers)
        .post(userController.createUser);
    server
        .route('/user/:id')
        .get(userController.getUser);
    server    
        .route('/users')
        .get(userController.getAllUsers);
    server
        .route('user/delete/:id')
        .put(userController.deleteUser);
}