import useForm from "./hook"
import { useLocation } from "wouter"
import './Searcher.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
export function Searcher ({initialKeyword = '', initialRating = 'g'}) {
  const { keyword, rating, updateKeyword, updateRating } = useForm({initialKeyword, initialRating})
  const [, setLocation] = useLocation()
  
  const handleChange = e => {
    updateKeyword(e.target.value)
  }
  const handleChangeRating = e => {
    updateRating(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setLocation(`/gifs/${keyword}/${rating}`)
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
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating</option>
        {
          RATINGS.map(rating => <option value={rating} key={rating}>
            {rating}
          </option>)
        }
      </select>
      <button className="Searcher__button">Buscar</button>
    </form>
  )
}