import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden'>
        <img 
        className='h-full w-full object-cover rounded-xl'
        src = {props.elem.download_url} 
        alt ={props.elem.author}/>
      </div>
      <h2 className='font-bold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card