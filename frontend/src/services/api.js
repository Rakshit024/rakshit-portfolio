// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Generic API request function
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || data.message || 'Request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * Contact API
 */
export const contactAPI = {
  /**
   * Submit contact form
   * @param {Object} formData - Contact form data
   * @param {string} formData.name - Name
   * @param {string} formData.email - Email
   * @param {string} formData.message - Message
   * @returns {Promise<Object>} Response data
   */
  submitContact: async (formData) => {
    return apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },
};

/**
 * Health check
 */
export const healthCheck = async () => {
  return apiRequest('/health');
};

export default {
  contactAPI,
  healthCheck,
};

