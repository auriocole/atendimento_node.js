const { createClient } = require('redis');

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    tls: false,
  },
});

redisClient.on('error', (err) => console.error('Erro Redis:', err));
redisClient.connect();

module.exports = redisClient;
