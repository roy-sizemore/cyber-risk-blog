const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./homeRoutes.js');
const blogRoutes = require('./blogRoutes.js');

router.use('/', homeRoutes);
router.use('/blog', blogRoutes);
router.use('/api', apiRoutes);

module.exports = router;
