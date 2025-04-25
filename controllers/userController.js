const { User } = require('../models');

// Listar todos
exports.getAll = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

// Buscar por Id
exports.getById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(user);
};

// Criar novo
exports.create = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

// Atualizar
exports.update = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

  await user.update(req.body);
  res.json(user);
};

// Deletar
exports.remove = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

  await user.destroy();
  res.status(204).send();
};
