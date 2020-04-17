import axios from 'axios';
import {BASE_URL} from '../config';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {Accept: 'application/json'},
});

export const getGoals = () => client.get('/Goal/List');

export const getTargets = (goalCode) =>
  client.get(`/Goal/${goalCode}/Target/List?includechildren=true`);
