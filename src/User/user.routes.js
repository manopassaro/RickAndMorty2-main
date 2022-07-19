const express = require('express');
const Controller = require('./user.controller');
const router = express.Router();

router.post('/creation', Controller.createUser);
router.get('/', Controller.findAll);

module.exports = router;
