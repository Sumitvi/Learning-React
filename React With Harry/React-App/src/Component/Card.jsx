import React from 'react'
import "./Card.css"


function Card({ title, description }) {
  return (
    <div className='card'>
      <div>
        <img src="https://cdn.sanity.io/images/tlr8oxjg/production/1ca7b34a8d5308a03ae186dfe72caabce0327fe2-1456x816.png?w=3840&q=100&fit=clip&auto=format" alt="" width={100} style={{alignItems:"center"}} />
        <h1 className='title'>{title}</h1>
        <p className='description'> {description}</p>

      </div>
    </div>
  )
}

export default Card
