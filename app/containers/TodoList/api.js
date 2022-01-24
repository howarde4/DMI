import axios from 'axios';

const API_URL = 'http://localhost:3001/todos';

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response;
};
