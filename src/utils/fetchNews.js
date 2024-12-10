// src/utils/fetchNews.js

export async function fetchNews() {
    const apiKey = 'yLdQT5FkUarJqk1qXwGsTnk5BdrZRi1-uBpvK7O6edGSz4qh';
    const apiUrl = 'https://api.currentsapi.services/v1/latest-news';

    const params = new URLSearchParams({
      country: 'ZW',          // Filter news by country (Zimbabwe)
      language: 'en',         // English language
      apiKey: apiKey,         // Your Currents API key
      // You can add more filters, like date or category if needed
    });
  
    try {
      const response = await fetch(`${apiUrl}?${params.toString()}`);
      const data = await response.json();
  
      console.log('Fetched news:', data); // Log the API response for debugging
  
      if (data.news && data.news.length > 0) {
        return data.news; // Return the array of news articles
      } else {
        throw new Error('No news found');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      return []; // Return an empty array if there's an error
    }
  }
  