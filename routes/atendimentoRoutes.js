const express = require('express');
const router = express.Router();
const atendimentoController = require('../controllers/atendimentoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware); 

router.get('/', atendimentoController.getAll);
router.get('/:id', atendimentoController.getById);
router.post('/', atendimentoController.create);
router.put('/:id', atendimentoController.update);
router.delete('/:id', atendimentoController.remove);

module.exports = router;