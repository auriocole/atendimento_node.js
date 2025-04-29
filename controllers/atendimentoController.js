const { Atendimento } = require('../models');

// Listar todos
exports.getAll = async (req, res) => {
  const atendimentos = await Atendimento.findAll();
  res.json(atendimentos.map(atendimento => {
    return {
      id: atendimento.id,
      service: atendimento.service,
      client: atendimento.client,
      status: atendimento.status,
      createdAt: atendimento.createdAt.toISOString().replace('T', ' ').replace('Z', ''),
      updatedAt: atendimento.updatedAt.toISOString().replace('T', ' ').replace('Z', ''),
    };
  }));
};

// Buscar por Id
exports.getById = async (req, res) => {
  const atendimento = await Atendimento.findByPk(req.params.id);
  if (!atendimento) return res.status(404).json({ message: 'Atendimento não encontrado' });
  res.json(atendimento);
};

// Criar novo
exports.create = async (req, res) => {
  const novo = await Atendimento.create(req.body);
  res.status(201).json(novo);
};

// Atualizar
exports.update = async (req, res) => {
  const atendimento = await Atendimento.findByPk(req.params.id);
  if (!atendimento) return res.status(404).json({ message: 'Atendimento não encontrado' });

  await atendimento.update(req.body);
  res.json(atendimento);
};

// Deletar
exports.remove = async (req, res) => {
  const atendimento = await Atendimento.findByPk(req.params.id);
  if (!atendimento) return res.status(404).json({ message: 'Atendimento não encontrado' });

  await atendimento.destroy();
  res.status(204).send();
};
