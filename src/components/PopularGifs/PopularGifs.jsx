import { useState ,useEffect } from "react"
import { Link } from "wouter"
import { getTrendingTerms } from "../../services/getTrendingTerms"
import './PopularGifs.css'

export default function PopularGifs () {
  const [popularGifs, setPopularGifs] = useState([])

  useEffect( async () => {
    setPopularGifs( await getTrendingTerms() )
  }, [])

  return(
    <>
      <ul className="PopularGifs">
        <h2>Trending:</h2>
        {
          popularGifs.map(keyword => {
            return (
              <li key={keyword}>
                <Link href={`/gifs/${keyword}`}>{keyword}</Link>
              </li>
            )
          })
        }
      </ul>
    </> 
  )
}