import { useState, useEffect } from "react"
import { useGifs } from "./useGifs"
import { getSingleGif } from "../services/getSingleGif"

export function useGifDetail ({id}) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(gif => gif.id === id) 

  const [gif, setGif] = useState(gifFromCache)

  useEffect( () => {
    if(!gif) {
      getSingleGif({id})
      .then(data => setGif(data))
    }
  }, [gif, id])
  
  return gif
}