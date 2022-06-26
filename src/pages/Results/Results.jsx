import React, { useRef, useCallback, useEffect } from "react"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import LazyPopularGifs from "../../components/PopularGifs/LazyPopularGifs"
import { Loader } from '../../components/Loader/Loader'
import { useGifs } from "../../hooks/useGifs"
import { useNearScreen } from "../../hooks/useNearScreen"
import debounce from "just-debounce-it"

export default function Results ({params}) {
  const {gifs, loading, setPage} = useGifs({keyword: params.keyword})
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
      <h1>{ decodeURI(params.keyword) }</h1>
      {
        loading 
          ? <Loader />
          : <>
              <ListOfGifs gifs={ gifs } /> 
              <div id="visor" ref={externalRef}></div>
            </>
      }
    </>
  )
}