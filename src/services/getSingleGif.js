const API_KEY = 'jcLGUlWOwLgT8329yIE9bF2c37rHi3zF'

export function getSingleGif({id}) {
  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`

  return fetch(API_URL)
    .then(res => res.json())
    .then(gif => {
      const { title, id, images } = gif.data
      const { url } = images.downsized
      return { title, id, url }
    })
} 