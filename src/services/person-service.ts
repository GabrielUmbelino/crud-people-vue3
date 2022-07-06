import axios from 'axios'
import { Person } from './../models/person.type';
const baseURL = 'https://krat.es/47bda48c0a4206bba405';

function createInstance(baseURL: string) {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

const axiosInstance = createInstance(baseURL)

export const create = async (person: Person) => {
  const response = await axiosInstance.post("", person);

  return response.data;
}

export const update = async (person: Person) => {
  const response = await axiosInstance.put(`${person._id}`, person);

  return response.data;
}

export const remove = async (_id: Person['_id']) => {
  const response = await axiosInstance.delete(`${_id}`);

  return response.data;
}

export const get = async (skip: number = 0, limit: number = 10): Promise<Person[]> => {
  const params = `?skip=${skip}&limit=${limit}`;
  const response = await axiosInstance.get(`${params}`);

  return response.data as Person[];
}
