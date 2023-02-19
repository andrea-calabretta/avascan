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


  // const getImage = (zoomIn: boolean, imgClass : string) => {

    
  //   return (
  //     <div className= {cx({'image__container': !isZoomIn}, { 'zoomIn': isZoomIn })}
  //       onClick={() => setIsZoomIn(!isZoomIn)}
  //       >
  //       <img
  //         className={imgClass}
  //         src={source} 
  //         alt={alt} >
  //       </img>
  //     </div>
  //   )
  // }
  // return (
  //   <>
  //     <div className='image__container'
  //       onClick={() => setIsZoomIn(!isZoomIn)}
  //       >
  //       <img
  //         className='image' 
  //         src={source} 
  //         alt={alt} >
  //       </img>
  //     </div>
  //     {getImage(isZoomIn, 'image')}

  //     {isZoomIn && getImage(isZoomIn, 'imageBig') }

  //     {isZoomIn && <div 
  //       onClick={() => { setIsZoomIn(!isZoomIn) ; console.log(isZoomIn)}}
  //       className = {cx( { 'zoomIn': isZoomIn })} >
  //       <img
  //         className='imageBig' 
  //         src={source} 
  //         alt={alt} >
  //       </img>
  //     </div>}
  //   </>
  // )
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
        onClick={() => { setIsZoomIn(!isZoomIn) ; console.log(isZoomIn)}}
        className = {cx( { 'zoomIn': isZoomIn })} >
        <img
          className='imageBig' 
          src={source} 
          alt={alt} >
        </img>
      </div>}
    </>
  )
}

export default Image

/*

12 -> const [isZoomIn, setIsZoomIn] = useState<'zoomIn' | ''>('');
18 -> onClick={() => { setIsZoomIn((prev) => prev === 'zoomIn'? '': 'zoomIn') ; console.log(isZoomIn)}}
19 -> className = { zoomIn } >

*/