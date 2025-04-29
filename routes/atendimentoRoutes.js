const express = require('express');
const router = express.Router();
const atendimentoController = require('../controllers/atendimentoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

/**
* @swagger
* tags:
*   name: Atendimento
*   description: Atendimento management operations
*/

/**
* @swagger
* components:
*   schemas:
*     Atendimento:
*       type: object
*       properties:
*         service:
*           type: string
*           description: The service's name
*         client:
*           type: string
*           description: The client's name
*         status:
*           type: string
*           description: The status of the atendimento
*/

/**
* @swagger
* /atendimentos:
*   get:
*     summary: Retrieve a list of atendimentos
*     tags: [Atendimento]
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: A list of atendimentos
*/
router.get('/', atendimentoController.getAll);

/**
* @swagger
* /atendimentos/{id}:
*   get:
*     summary: Retrieve a specific atendimento
*     tags: [Atendimento]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*     responses:
*       200:
*         description: A specific atendimento
*/
router.get('/:id', atendimentoController.getById);

/**
* @swagger
* /atendimentos:
*   post:
*     summary: Create a new atendimento
*     tags: [Atendimento]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Atendimento'
*     responses:
*       201:
*         description: Atendimento created
*/
router.post('/', atendimentoController.create);
/**
* @swagger
* components:
*   schemas:
*     Atendimento:
*       type: object
*       properties:
*         service:
*           type: string
*           description: The service's name
*         client:
*           type: string
*           description: The client's name
*         status:
*           type: string
*           description: The status of the atendimento
*/

/**
* @swagger
* /atendimentos/{id}:
*   put:
*     summary: Update a atendimento
*     tags: [Atendimento]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Atendimento'
*     responses:
*       201:
*         description: Atendimento updated
*/
router.put('/:id', atendimentoController.update);
/**
* @swagger
* /atendimentos/{id}:
*   delete:
*     summary: Delete a specific atendimento
*     tags: [Atendimento]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*     responses:
*       200:
*         description: Atendimento Deleted
*/
router.delete('/:id', atendimentoController.remove);

module.exports = router;