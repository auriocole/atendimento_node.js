const sequelize = require('../config/database');
const Atendimento = require('./atendimento');
const User = require('./user');

const db = {
  sequelize,
  Atendimento,
  User
};

module.exports = db;