import axios from 'axios';

const API_URL = 'http://localhost:3001/todos';

export const postTodo = async todo => {
  const response = await axios.post(API_URL, todo);
  return response;
};
