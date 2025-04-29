require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const prefix = "api/v1";

const db = require('./models');
const atendimentoRoutes = require('./routes/atendimentoRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use(cors())
app.use(`/${prefix}/auth`, authRoutes);
app.use(`/${prefix}/atendimentos`, atendimentoRoutes);
app.use(`/${prefix}/users`, userRoutes);

// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
      openapi: '3.0.0',
      info: {
          title: 'Atendimento  API ',
          version: '1.0.0',
          description: 'Atendimento API with Node and Express documentation using Swagger',
      },
      servers: [
          {
              url: `http://localhost:${port}/${prefix}`,
          },
      ],
 components: {
   securitySchemes: {
       bearerAuth: {
           type: 'http',
           scheme: 'bearer',
           bearerFormat: 'JWT', 
       },
   },
},
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use(`/${prefix}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

db.sequelize.sync().then(() => {
  console.log('DB conectado e sincronizado.');
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});