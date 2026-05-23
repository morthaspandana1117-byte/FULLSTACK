const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/books');

router.get('/', ctrl.getAllBooks);
router.get('/:id', ctrl.getBook);
router.post('/', ctrl.createBook);
router.put('/:id', ctrl.updateBook);
router.delete('/:id', ctrl.deleteBook);

module.exports = router;