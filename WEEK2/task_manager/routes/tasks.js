const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/tasks');

router.get('/stats', ctrl.taskstats);
router.get('/', ctrl.getAllTasks);
router.get('/:id', ctrl.getTask);
router.post('/', ctrl.createTask);
router.put('/:id', ctrl.updateTask);
router.patch('/:id/complete', ctrl.toggleTask);
router.delete('/:id', ctrl.deleteTask);

module.exports = router;