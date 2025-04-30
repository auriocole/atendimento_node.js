const { createClient } = require('redis');

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    tls: true,
  },
});

redisClient.on('error', (err) => console.error('Erro Redis:', err));
redisClient.connect();

module.exports = redisClient;
