const express = require('express');
const stuffCtrl = require('../controllers/stuff');z
const router = express.Router();
const multer = require('../middleware/multer-config');

const auth = require('../middleware/auth');

router.post('/', auth, multer,stuffCtrl.createThing);

router.get('/', auth, stuffCtrl.getAllStuff);

router.get('/:id', auth, stuffCtrl.getOneThing);

router.delete('/:id', auth, stuffCtrl.deleteThing);

router.put('/:id', auth, multer,stuffCtrl.modifyThing);

module.exports = router;
