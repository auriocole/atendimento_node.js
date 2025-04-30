const redisClient = require('../utils/cache');
const { User } = require('../models');

const cacheKey = 'users:all';

// Listar todos
exports.getAll = async (req, res) => {

  try {
    const cached = await redisClient.get(cacheKey);

    if (cached) {
      return res.json(JSON.parse(cached));
    }
  
    const users = await User.findAll();

    await redisClient.setEx(cacheKey, 3600, JSON.stringify(users));

    res.json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

// Buscar por Id
exports.getById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(user);
};

// Criar novo
exports.create = async (req, res) => {
  
  try {
    const cached = await redisClient.get(cacheKey);
    
    if (cached) {
      await redisClient.del(cacheKey);
    }

    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

// Atualizar
exports.update = async (req, res) => {

  try {

    const cached = await redisClient.get(cacheKey);
    
    if (cached) {
      await redisClient.del(cacheKey);
    }

    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    await user.update(req.body);
    res.json(user);
    
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

// Deletar
exports.remove = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

  await user.destroy();
  res.status(204).send();
};
