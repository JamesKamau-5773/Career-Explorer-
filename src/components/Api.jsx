const API_BASE_URL = 'https://LOCALHOST3001';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
}

const api = {
  getCareers: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/careers`);
      return handleResponse(response);
      
    } catch (error) {
      console.error('Error fetching careers:', error);
      throw error;
      
    }