import React from 'react'
import Gif from '../Gif/Gif'
import './ListOfGifs.css'

function ListOfGifs({ gifs }) {
  
  return(
    <section className="gifs">
      {
        gifs.map(gif => {
          return (
            <Gif 
              id={ gif.id }
              key={ gif.id } 
              title={ gif.title } 
              url={ gif.url } 
            />
          )
        })
      }
    </section>
  )
}

export default React.memo(ListOfGifs)