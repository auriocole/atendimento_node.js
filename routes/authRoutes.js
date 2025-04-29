const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
* @swagger
* tags:
*   name: Authentication
*   description: Authentication operations
*/

/**
* @swagger
* components:
*   schemas:
*     Authentication:
*       type: object
*       properties:
*         username:
*           type: string
*           description: The user's name
*         password:
*           type: string
*           description: The users's password
*/

/**
* @swagger
* /auth/register:
*   post:
*     summary: Register a new user
*     tags: [Authentication]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Authentication'
*     responses:
*       201:
*         description: User registed
*/
router.post('/register', authController.register);
/**
* @swagger
* components:
*   schemas:
*     Authentication:
*       type: object
*       properties:
*         username:
*           type: string
*           description: The user's name
*         password:
*           type: string
*           description: The users's password
*/

/**
* @swagger
* /auth/login:
*   post:
*     summary: Authentiate a user
*     tags: [Authentication]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Authentication'
*     responses:
*       200:
*         description: User token
*/
router.post('/login', authController.login);

module.exports = router;
