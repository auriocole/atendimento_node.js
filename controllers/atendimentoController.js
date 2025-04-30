const redisClient = require('../utils/cache');
const { Atendimento } = require('../models');

const cacheKey = 'atendimentos:all';

// Listar todos
exports.getAll = async (req, res) => {

  try {
    const cached = await redisClient.get(cacheKey);

    if (cached) {
      return res.json(JSON.parse(cached));
    }

    const atendimentos = await Atendimento.findAll();

    await redisClient.setEx(cacheKey, 3600, JSON.stringify(atendimentos));

    res.json(atendimentos);
    
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar atendimentos' });
  }
};

// Buscar por Id
exports.getById = async (req, res) => {
  const atendimento = await Atendimento.findByPk(req.params.id);
  if (!atendimento) return res.status(404).json({ message: 'Atendimento não encontrado' });
  res.json(atendimento);
};

// Criar novo
exports.create = async (req, res) => {

  try {
    const cached = await redisClient.get(cacheKey);
    
    if (cached) {
      await redisClient.del(cacheKey);
    }
    
    const novo = await Atendimento.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar atendimento' }); 
  }
};

// Atualizar
exports.update = async (req, res) => {

  try {
    const cached = await redisClient.get(cacheKey);
    
    if (cached) {
      await redisClient.del(cacheKey);
    }

    const atendimento = await Atendimento.findByPk(req.params.id);
    if (!atendimento) return res.status(404).json({ message: 'Atendimento não encontrado' });

    await atendimento.update(req.body);
    res.json(atendimento);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar atendimento' });
  }
};

// Deletar
exports.remove = async (req, res) => {
  const atendimento = await Atendimento.findByPk(req.params.id);
  if (!atendimento) return res.status(404).json({ message: 'Atendimento não encontrado' });

  await atendimento.destroy();
  res.status(204).send();
};
