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
  }}
const getCareerById = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/careers/${id}`);
      return handleResponse(response);
      
    } catch (error) {
      console.error(`Error fetching career with ID ${id}:`, error);
      throw error;
    }
  }

  const addFavoriteCareer = async (careerId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ careerId }),
      });
      return handleResponse(response);
      
    } catch (error) {
      console.error('Error adding favorite career:', error);
      throw error;
    }
  }

  const getFavoriteCareers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/favorites`);
      return handleResponse(response);
      
    } catch (error) {
      console.error('Error fetching favorite careers:', error);
      throw error;
    }
  }

  const removeFavoriteCareer = async (careerId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/favorites/${careerId}`, {
        method: 'DELETE',
      });
      return handleResponse(response);
      
    } catch (error) {
      console.error(`Error removing favorite career with ID ${careerId}:`, error);
      throw error;
    }
  }
  

  

  
  export default Api