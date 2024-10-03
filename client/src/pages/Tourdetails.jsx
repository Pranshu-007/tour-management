import React from 'react'
import './style.css'
import {Container , Row , Col} from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourdata from '../assets/data/tours'
import calculateratings from '../utils/Avgrating'
import Booking from '../booking/Booking'

const Tourdetails = () => {
  const {id} = useParams();
  const tour = tourdata.find(tour=>tour.id===id)
  const {photo,desc,title,price,address,reviews,city,maxgroupsize} = tour
  const {totalrating , avgrating} = calculateratings
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />
              <div className="tour__info">
                <h2>{title}</h2>
                <div className="d-flex align-item-center gap-5">
                <span className="tour__rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill"></i>{avgrating===0 ? null : avgrating}
                    {totalrating===0 ? 'Not Rated' : <span>({reviews.length})</span> }
                </span>
                <span>
                  <i className='ri-map-pin-fill'></i>{address}
                </span>
                </div>
                <div className="tour__extra-details">
                  <span><i className='ri-map-pin-2-line'></i>{city}</span>
                  <span><i className='ri-money-dollar-circle-line'></i>{price}/Per Person</span>
                  <span><i className='ri-group-line'></i>{maxgroupsize}</span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>
            </div>
            </Col>
            <Col lg='4'>
            <Booking tour={tour} avgrating={avgrating}/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Tourdetails
