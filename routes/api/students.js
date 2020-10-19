var express = require('express');
var router = express.Router();
var studentsCtrl = require('../../controllers/api/students');

router.use(require('../../config/auth'));
router.get('/', studentsCtrl.index);
router.post('/', studentsCtrl.create);
router.delete('/:id', studentsCtrl.delete);
router.put('/:id', studentsCtrl.update);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;