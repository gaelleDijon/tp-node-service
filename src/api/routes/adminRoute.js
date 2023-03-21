module.exports = (server) => {
    const adminController = require('../controllers/adminController');
    server.post('/admin/register', adminController.register);
    server.post('/admin/login', adminController.login);
}