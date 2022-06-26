import { useState } from "react"
import { useLocation } from "wouter"
import './Searcher.css'

export function Searcher () {
  const [keyword, setKeyword] = useState('')
  const [, setLocation] = useLocation()

  const handleChange = e => {
    setKeyword(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLocation(`/gifs/${keyword}`)
    setKeyword('')
  }
  return(
    <form onSubmit={handleSubmit} className="Searcher">
      <input
        className="Searcher__input" 
        onChange={handleChange}
        placeholder="Buscar gifs..." 
        type="text" 
        value={keyword} 
      />
      <button className="Searcher__button">Buscar</button>
    </form>
  )
}