import { useEffect, useRef, useCallback } from "react"
import { useGifs } from "../../hooks/useGifs"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import LazyPopularGifs from "../../components/PopularGifs/LazyPopularGifs"
import { Loader } from '../../components/Loader/Loader'
import { useNearScreen } from "../../hooks/useNearScreen"
import debounce from "just-debounce-it"
import { Helmet } from "react-helmet"


export default function Home () {
  const externalRef = useRef()
  const {gifs, loading, setPage} = useGifs()
  const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef, once: false})

  const debounceNextPage = useCallback(debounce( () => {
    setPage(prevPage => prevPage + 1)
  }, 250) , [])
  
  useEffect( () => {
    if(isNearScreen) debounceNextPage()
  }, [isNearScreen])

  return(
    <>
      <LazyPopularGifs />
      <h1>Ultima busqueda:</h1>
      {
        loading 
          ? <>
            <Loader />
            <Helmet>
              <title>Cargando...</title>
            </Helmet>
          </>
          : <>
            <Helmet>
              <title>Giphy</title>
              <meta name="description" content="Giphy searcher" />
            </Helmet>
            <ListOfGifs gifs={ gifs } /> 
            <div id="visor" ref={externalRef}></div>
          </> 
      }
    </>
  )  
}