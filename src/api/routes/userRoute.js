module.exports = (server) => {
    const userController = require('../controllers/userController');
    server
        .route('/users')
        .get(userController.all)
        .post('/user/register', userController.register);
}