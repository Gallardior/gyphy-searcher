import { Gif } from "../../components/Gif/Gif"
import { useGifDetail } from "../../hooks/useGifDetail"

export default function Details ({params}) {
  const gif = useGifDetail({id: params.id})
  
  return (
    <Gif {...gif}/>
  )
}