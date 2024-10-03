import React from 'react'
import Slider from 'react-slick'
import ava01 from '../assets/images/ava-1.jpg'
import ava02 from '../assets/images/ava-2.jpg'
import ava03 from '../assets/images/ava-3.jpg'

const Testimonial = () => {
    const settings = {
        dots:true,
        infinity:true,
        autoplay:true,
        swipeToSlide:true,
        speed:1000,
        autoplaySpeed:2000,
        slidesToShow:3
    }
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit labore perspiciatis, laboriosam laudantium minus impedit debitis, excepturi odio maiores, eos similique quasi sequi aspernatur sunt ea voluptatibus delectus dolores.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} alt="" className='w-25 h-25 rounded-2'/>
            <div>
                <h5 className="mb-0 mt-3">Pranshu Shukla</h5>
                <p>Customer</p>
            </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit labore perspiciatis, laboriosam laudantium minus impedit debitis, excepturi odio maiores, eos similique quasi sequi aspernatur sunt ea voluptatibus delectus dolores.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} alt="" className='w-25 h-25 rounded-2'/>
            <div>
                <h5 className="mb-0 mt-3">John Doe</h5>
                <p>Customer</p>
            </div>
        </div>
      </div>
      
      <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit labore perspiciatis, laboriosam laudantium minus impedit debitis, excepturi odio maiores, eos similique quasi sequi aspernatur sunt ea voluptatibus delectus dolores.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
            <div>
                <h5 className="mb-0 mt-3">Rohit Sharma</h5>
                <p>Customer</p>
            </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit labore perspiciatis, laboriosam laudantium minus impedit debitis, excepturi odio maiores, eos similique quasi sequi aspernatur sunt ea voluptatibus delectus dolores.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
            <div>
                <h5 className="mb-0 mt-3">Rohit Sharma</h5>
                <p>Customer</p>
            </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonial
