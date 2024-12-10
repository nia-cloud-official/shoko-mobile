// src/utils/fetchNews.js

export async function fetchNews() {
    // Direct API URL with the query parameters and your API key
    const apiUrl = 'https://api.currentsapi.services/v1/latest-news?' +
      'language=en&' +                // Use 'en' for English language
      'apiKey=yLdQT5FkUarJqk1qXwGsTnk5BdrZRi1-uBpvK7O6edGSz4qh'; // Your API key
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      console.log('Fetched news data:', data); // Log the entire response for debugging
  
      if (data.news && data.news.length > 0) {
        return data.news; // Return the array of news articles if they exist
      } else {
        throw new Error('No news found');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      return []; // Return an empty array if there's an error
    }
  }
  