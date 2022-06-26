import { useContext } from "react"
import { GifsContext } from "../context/GifsContexts"

export function useGifDetail ({id}) {
  const { gifs } = useContext(GifsContext)
  const gif = gifs.find(gif => gif.id === id) 

  return gif
}