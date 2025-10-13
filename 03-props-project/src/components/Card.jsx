import React from 'react'
import Bookmark from 'lucide-react/dist/esm/icons/bookmark'

const card = (props) => {
  return (
    <div>
        <div className='card'>

      <div className='top'>
        <img src={props.logo} alt="" />
        <button>Save <Bookmark size ={12} /></button>
      </div>
      <div className="center">
        <h3>{props.company} <span>{props.posted}</span></h3>
        <h2>{props.post}</h2>
        <div>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>
      <div className="bottom">
      <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        <div>
        <button>Apply Now</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default card