const express = require('express');

module.exports = function(server){
    const router = express.Router();
    server.use('/api', router);

    const taskManagerService = require('../api/task/taskService');

    taskManagerService.register(router, '/tasks');
}