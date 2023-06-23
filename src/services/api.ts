import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://192.168.0.109:3001/'
});

export default httpRequest;