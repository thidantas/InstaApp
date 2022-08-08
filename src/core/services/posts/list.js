import api from '../api';

const list = async (pageNumber = 0) => {
  try {
    const response = await api.get(`/post?limit=5&page=${pageNumber}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default list;
