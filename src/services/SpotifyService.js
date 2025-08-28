// src/services/SpotifyService.js

/**
 * Service to interact with the backend Spotify API
 */
const API_BASE_URL = 'http://localhost:8080/api';

export const SpotifyService = {
  /**
   * Get music recommendations based on mood
   * @param {string} mood - The mood for which to get recommendations (happy, sad, excited, relaxed, neutral)
   * @returns {Promise<Object>} - A promise that resolves to a playlist object
   */
  getRecommendationsByMood: async (mood) => {
    try {
      const response = await fetch(`${API_BASE_URL}/recommendations/${mood.toLowerCase()}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch recommendations: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      throw error;
    }
  }
};

export default SpotifyService;
