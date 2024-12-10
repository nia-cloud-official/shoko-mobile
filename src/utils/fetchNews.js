export async function fetchNews() {
    const apiKey = 'bcef734eeb1644a88866aa7bf30e8add';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // If the request is successful, return the articles
      if (data.status === 'ok') {
        return data.articles; // Array of articles
      } else {
        throw new Error('Error fetching news');
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      return []; // Return an empty array if the fetch fails
    }
  }
  