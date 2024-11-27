import { getAllSensors, getSensorById, getSensorStats, getAlerts, saveSensorData } from '../controllers/sensorController.js';

export default async function (fastify) {
  fastify.get('/sensors', getAllSensors);
  fastify.post('/', saveSensorData);
  fastify.get('/sensors/:id', getSensorById);
  fastify.get('/sensors/:id/stats', getSensorStats);
  fastify.get('/alerts', getAlerts);
}
