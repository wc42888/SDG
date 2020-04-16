import axios from 'axios';
import {BASE_URL} from '../config';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {Accept: 'application/json'},
});

export const getGoals = () => client.get('/Goal/List');
