import Fastify from 'fastify';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes/index.js';

dotenv.config();

const fastify = Fastify({ logger: true });

mongoose.connect(process.env.DB_URL, {
  connectTimeoutMS: 30000,
})
  .then(() => {
    console.log('Conexão com MongoDB bem-sucedida!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

fastify.register(routes, { prefix: '/api' });

const start = () => {
  try {
    fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
    console.log(`Servidor rodando em http://localhost:${process.env.PORT || 3000}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
