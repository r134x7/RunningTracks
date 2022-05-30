const router = require('express').Router();

const userRoutes = require('./user-routes');
const homeRoutes = require('../homeRoutes');

router.home('/', homeRoutes);
router.use('/users', userRoutes);

module.exports = router;