import {useState, useEffect, useContext} from 'react'
import { getGifs } from '../services/getGifs'
import { GifsContext } from '../context/GifsContexts'

// Buscar keyword en el local storage
const INITIAL_PAGE = 0

export function useGifs ({keyword, rating} = {keyword: null}) {
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)
  const [page, setPage] = useState(INITIAL_PAGE)

  const keywordToUse = keyword || localStorage.getItem('lastKey')

  useEffect( async () => {
    setLoading(true)

    setGifs(await getGifs({ keyword: keywordToUse, rating }))

    // GUardar keyword en el local storage
    if(keyword) localStorage.setItem('lastKey', keyword)
    
    setLoading(false)
  }, [keyword, keywordToUse, rating])

  useEffect( () => {
    if(page === INITIAL_PAGE) return

    getGifs({ keyword: keywordToUse, page, rating })
      .then(newGifs => {
        setGifs(prevGifs => prevGifs.concat(newGifs))
      })

  }, [page, keywordToUse, rating])

  return {
    gifs,
    loading,
    setPage
  }
}