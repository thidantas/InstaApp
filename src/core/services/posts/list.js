import api from '../api';

const list = async () => {
  try {
    const response = await api.get('/post?limit=10');
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default list;
