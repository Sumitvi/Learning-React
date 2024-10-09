import React from 'react'
import "./Card.css"


function Card({title,description}) {
  return (
    <div className='card'>
        <div>
        <h1 className='title'>{title}</h1>
        <p className='description'> {description}</p>
      
        </div>
    </div>
  )
}

export default Card
