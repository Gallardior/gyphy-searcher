const API_KEY = 'jcLGUlWOwLgT8329yIE9bF2c37rHi3zF'
const API_LIMIT = '25'
const API_RATING = 'r'
const API_LANG = 'en'


export function getGifs({ keyword = 'Morty', page = 0, rating}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${ keyword }&limit=${ API_LIMIT }&offset=${page * API_LIMIT}&rating=${rating}&lang=${API_LANG}`

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      return response.data.map(gif => {
        const { title, id, images } = gif
        const { url } = images.downsized
        return { title, id, url }
      })  
      
    })
}