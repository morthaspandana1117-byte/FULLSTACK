const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/notes');

router.get('/', ctrl.getAllNotes);
router.post('/', ctrl.createNote);

module.exports = router;