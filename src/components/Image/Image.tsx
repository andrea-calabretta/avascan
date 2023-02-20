import React, { useState } from 'react'

import cx from 'classnames';
import './Image.scss';

interface IImage {
  source? : string;
  alt?: string;
}

const Image = (props: IImage) => {
  const [isZoomIn, setIsZoomIn] = useState(false);

  const {source, alt} = props;

  return (
    <>
      <div className='image__container'
        onClick={() => setIsZoomIn(!isZoomIn)}
        >
        <img
          className='image' 
          src={source} 
          alt={alt} >
        </img>
      </div>
      
      {isZoomIn && <div 
        onClick={() => setIsZoomIn(!isZoomIn) }
        className = {cx( { 'zoomIn': isZoomIn })} >
        <img
          className='image__big' 
          src={source} 
          alt={alt} >
        </img>
      </div>}
    </>
  )
}

export default Image