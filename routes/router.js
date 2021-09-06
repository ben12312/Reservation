const router = require('express').Router();
const roomRouter = require('./roomRouter');

router.use('/', roomRouter);

module.exports = router