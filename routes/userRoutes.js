const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.use(adminMiddleware); 
/**
* @swagger
* tags:
*   name: User
*   description: User management operations
*/

/**
* @swagger
* /users:
*   get:
*     summary: Retrieve a list of users
*     tags: [User]
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: A list of users
*/
router.get('/', userController.getAll);
/**
* @swagger
* /users/{id}:
*   get:
*     summary: Retrieve a specific user
*     tags: [User]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*     responses:
*       200:
*         description: A specific user
*/
router.get('/:id', userController.getById);

/**
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       properties:
*         username:
*           type: string
*           description: The user's name
*         password:
*           type: string
*           description: The user's password
*         role:
*           type: string
*           description: The user's role (admin or user)
*/

/**
* @swagger
* /users:
*   post:
*     summary: Create a new user
*     tags: [User]
*     security:
*       - bearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/User'
*     responses:
*       201:
*         description: User created
*/
router.post('/', userController.create);
/**
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       properties:
*         username:
*           type: string
*           description: The user's name
*         password:
*           type: string
*           description: The user's password
*         role:
*           type: string
*           description: The user's role (admin or user)
*/

/**
* @swagger
* /users/{id}:
*   put:
*     summary: Update a user
*     tags: [User]
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
*             $ref: '#/components/schemas/User'
*     responses:
*       201:
*         description: User updated
*/
router.put('/:id', userController.update);
/**
* @swagger
* /users/{id}:
*   delete:
*     summary: Delete a specific user
*     tags: [User]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*     responses:
*       200:
*         description: User Deleted
*/
router.delete('/:id', userController.remove);

module.exports = router;