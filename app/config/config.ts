import { config } from 'dotenv';
config();

const configuration = {
  appname: 'artist-app',
  web: {
    environment: process.env.NODE_ENV,
    port: parseInt(process.env.PORT) || 6678,
  },
  dezeerApi: {
    url: 'https://api.deezer.com'
  }
};

export default configuration;
