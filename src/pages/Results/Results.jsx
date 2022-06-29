import React, { useRef, useCallback, useEffect } from "react"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import LazyPopularGifs from "../../components/PopularGifs/LazyPopularGifs"
import { Loader } from '../../components/Loader/Loader'
import { useGifs } from "../../hooks/useGifs"
import { useNearScreen } from "../../hooks/useNearScreen"
import debounce from "just-debounce-it"
import { Helmet } from "react-helmet"
import { Searcher } from "../../components/Searcher/Searcher"

export default function Results ({params}) {
  const {keyword, rating = 'g'} = params
  const {gifs, loading, setPage} = useGifs({keyword, rating})
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null : externalRef, 
    once: false
  })

  const debounceNextPage = useCallback(debounce( () => {
    setPage(prevPage => prevPage + 1)
  }, 250) , [])

  useEffect( () => {
    if(isNearScreen) debounceNextPage()
  }, [isNearScreen])

  return (
    <>
      <LazyPopularGifs />
      <Searcher initialKeyword={keyword} initialRating={rating} />
      <h1>{ decodeURI(keyword) }</h1>
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
                <title>{`${gifs.length} results of ${decodeURI(keyword)} | Giphy`}</title>
                <meta name="description" content={`${gifs.length} results of ${decodeURI(keyword)} | Giphy`} />
              </Helmet>
              <ListOfGifs gifs={ gifs } /> 
              <div id="visor" ref={externalRef}></div>
            </>
      }
    </>
  )
}