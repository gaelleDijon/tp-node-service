const ServiceModel = require('../models/serviceModel');

exports.createService = (req, res) => {
    const service = new ServiceModel(req.body);
    
}