import { getAllSensors, getSensorById, getSensorStats, getAlerts } from '../controllers/sensorController.js';

export default async function (fastify) {
  fastify.get('/sensors', getAllSensors);
  fastify.get('/sensors/:id', getSensorById);
  fastify.get('/sensors/:id/stats', getSensorStats);
  fastify.get('/alerts', getAlerts);
}
