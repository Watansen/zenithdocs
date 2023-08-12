import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getDocuments = async () => {
  try {
    const response = await axios.get(`${API_URL}/documents`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addDocument = async (document) => {
  try {
    const response = await axios.post(`${API_URL}/documents`, document);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteDocument = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/documents/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};