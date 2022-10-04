import React from 'react'
import "./style.css";

const Proyecto = ({ title = "title", img, url, urlCode }) => {
  return (
      <div className='proyecto'>
        <h3>{ title }</h3>
        <img src={img} alt="" />
        <div className='proyecto-buttons'>
          <a 
            className='btn' 
            href={url}
            target="_blank">View</a>

          <a 
            className='btn'
            href={urlCode}
            target="_blank">Code</a>
        </div>
      </div>
  )
}

export default Proyecto