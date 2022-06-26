const API_KEY = 'jcLGUlWOwLgT8329yIE9bF2c37rHi3zF'

export function getTrendingTerms() {
  const API_URL = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => response.data)
}