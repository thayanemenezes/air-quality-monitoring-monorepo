import mongoose from 'mongoose';

const sensorDataSchema = new mongoose.Schema({
  sensor_id: {
    type: String,
    required: true, 
  },
  timestamp: {
    type: Date,
    required: true, 
  },
  data: {
    temperature: {
      type: Number,
      required: true, 
    },
    humidity: {
      type: Number,
      required: true, 
    },
    gases: {
      co2: {
        type: Number,
        required: true,
      },
      nh3: {
        type: Number,
        required: true,
      },
      nox: {
        type: Number,
        required: true,
      },
    },
    aqi: {
      type: Number,
      required: true, 
    },
  },
  alerts: {
    status: {
      type: String,
      enum: ['ok', 'warning', 'critical'],
      default: 'ok', 
    },
    messages: [String], 
  },
});

const SensorData = mongoose.model('SensorData', sensorDataSchema);

export default SensorData;
