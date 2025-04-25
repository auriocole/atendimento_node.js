require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const db = require('./models');
const atendimentoRoutes = require('./routes/atendimentoRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/atendimentos', atendimentoRoutes);
app.use('/api/users', userRoutes);

db.sequelize.sync().then(() => {
  console.log('DB conectado e sincronizado.');
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
});