import React from 'react'
import TourCard from '../shared/Tourcard'
import Tourdata from '../assets/data/tours'
import {Col} from 'reactstrap'
import {useFetch} from '../hook/useFetch.js'
import {BASE_URL} from '../utils/baseurl.js'

const Featuredtourlist = () => {
  const {data: Featuredtours} = useFetch(`${BASE_URL}/tour/search/getFeaturedtours`)
  console.log(Featuredtours);
  
  return (
    <>
      {
        Featuredtours?.map((tour)=>{
           return <Col lg='3' className='mb-4' key={tour.id}>
                <TourCard tour={tour}/>
            </Col>
        })
      }
    </>
  )
}

export default Featuredtourlist
