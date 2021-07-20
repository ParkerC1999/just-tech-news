const router = require('express').Router();

const userRoutes = require('./user_routes.js');
const postRoutes = require('./post-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;