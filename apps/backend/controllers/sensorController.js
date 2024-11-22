import SensorData from '../models/sensor.js';

export const saveSensorData = async (request, reply) => {
  try {
    const sensorPayload = request.body;

    if (!sensorPayload.sensor_id || !sensorPayload.timestamp || !sensorPayload.data) {
      return reply.status(400).send({ message: 'Dados incompletos.' });
    }

    const newSensorData = new SensorData(sensorPayload);

    await newSensorData.save();

    reply.status(200).send({ message: 'Dados do sensor salvos com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar os dados:', error);
    reply.status(500).send({ message: 'Erro ao salvar os dados', error: error.message });
  }
};

export const getAllSensors = async (request, reply) => {
  try {
    const sensors = await SensorData.find({});
    reply.status(200).send(sensors);
  } catch (error) {
    reply.status(500).send({ message: 'Erro ao buscar os dados dos sensores', error: error.message });
  }
};

export const getSensorById = async (request, reply) => {
  try {
    const { id } = request.params;
    const sensor = await SensorData.findOne({ sensor_id: id });

    if (!sensor) {
      reply.status(404).send({ message: `Sensor com ID ${id} não encontrado.` });
      return;
    }

    reply.status(200).send(sensor);
  } catch (error) {
    reply.status(500).send({ message: 'Erro ao buscar os dados do sensor', error: error.message });
  }
};

export const getSensorStats = async (request, reply) => {
  try {
    const { id } = request.params;
    const sensorData = await SensorData.find({ sensor_id: id });

    if (sensorData.length === 0) {
      reply.status(404).send({ message: `Nenhum dado encontrado para o sensor ${id}.` });
      return;
    }

    const stats = {
      averageTemperature: sensorData.reduce((sum, data) => sum + data.data.temperature, 0) / sensorData.length,
      averageHumidity: sensorData.reduce((sum, data) => sum + data.data.humidity, 0) / sensorData.length,
      averageAQI: sensorData.reduce((sum, data) => sum + data.data.aqi, 0) / sensorData.length,
    };

    reply.status(200).send(stats);
  } catch (error) {
    reply.status(500).send({ message: 'Erro ao calcular estatísticas', error: error.message });
  }
};

export const getAlerts = async (request, reply) => {
  try {
    const alerts = await SensorData.find({ 'alerts.status': { $ne: 'ok' } });

    if (alerts.length === 0) {
      reply.status(200).send({ message: 'Nenhum alerta ativo no momento.' });
      return;
    }

    reply.status(200).send(alerts);
  } catch (error) {
    reply.status(500).send({ message: 'Erro ao buscar alertas', error: error.message });
  }
};

export const updateSensorData = async (request, reply) => {
  try {
    const { id } = request.params; 
    const sensorPayload = request.body;

    const updatedSensorData = await SensorData.findOneAndUpdate(
      { _id: id },
      { $set: sensorPayload }, 
      { new: true, upsert: true } 
    );

    reply.status(200).send({
      message: 'Dados do sensor atualizados com sucesso!',
      data: updatedSensorData,
    });
  } catch (error) {
    reply.status(500).send({ message: 'Erro ao atualizar os dados', error: error.message });
  }
};
