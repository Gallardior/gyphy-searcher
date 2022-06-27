import { Gif } from "../../components/Gif/Gif"
import { useGifDetail } from "../../hooks/useGifDetail"
import { Helmet } from "react-helmet"

export default function Details ({params}) {
  const gif = useGifDetail({id: params.id})

  if (!gif) return null
  return (
    <>
      <Helmet>
        <title>{`${gif.title} | Giphy`}</title>
        <meta name="description" content={`Description of ${gif.title}`} />
      </Helmet>
      <Gif title={gif.title} id={gif.id} url={gif.url} />
    </>
  )
}