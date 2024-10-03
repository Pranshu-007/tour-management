import React from 'react'
import {Card,CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
import calculateratings from '../utils/Avgrating'
import './style.css'

const Tourcard = ({tour}) => {
    const {id,title,city,photo,price,featured,reviews} = tour;

    const {totalrating,avgrating} = calculateratings;

  return (
    <>
    <div className="tour__card">
        <Card>
            <div className="tour__img">
                <img src={photo} alt="" />
                {featured && <span>Featured</span>}
                {/* <span>Featured</span> */}
            </div>
        </Card>
        <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className="tour__location d-flex align-items-center gap-1">
                    <i className="ri-map-pin-line"></i>{city}
                </span>
                <span className="tour__rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill"></i>{avgrating===0 ? null : avgrating}
                    {totalrating===0 ? 'Not Rated' : <span>({reviews.length})</span> }
                </span>
            </div>
            <h5 className="tour__title">
                <Link to={`/tours/${id}`}>{title}</Link>
            </h5>
            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                <h5>${price} <span>/Per Person</span></h5>
                <button className="btn booking__btn">
                <Link to={`/tours/${id}`}>Book Now</Link>
                </button>
            </div>
        </CardBody>
    </div>
    </>
  )
}

export default Tourcard
