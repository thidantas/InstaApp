import api from '../api';

const list = async id => {
  try {
    const response = await api.get(
      `https://dummyapi.io/data/v1/post/${id}/comment?limit=10`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default list;
