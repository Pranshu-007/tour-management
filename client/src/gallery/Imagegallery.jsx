import React from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import galleryimgage from "./Gallery"
import './style.css'

const Imagegallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
      <Masonry gutter='1rem'>
        {
            galleryimgage.map((item,index)=>(
                <>
                <img className='masonary__img' src={item} alt="" key={index} style={{width:'100%' , display:'block' , borderRadius:'10px'}}/>
                </>
            ))
        }
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default Imagegallery
