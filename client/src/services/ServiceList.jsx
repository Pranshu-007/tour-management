import React from 'react'
import ServiceCard from "./ServiceCard"
import {Col} from 'reactstrap'

import weatherimg from '../assets/images/weather.png'
import guideimg from '../assets/images/guide.png'
import customization from '../assets/images/customization.png'
import './style.css'

const servicedata = [
  {
    imgurl: weatherimg,
    title:'Calculate Weather',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    imgurl: guideimg,
    title:'Best Tour Guide',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    imgurl: customization,
    title:'Customization',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]

const ServiceList = () => {
  return (
    <>
      {
        servicedata.map((item,index)=>{
          return <Col lg='3' key={index}>
          <ServiceCard item={item}/>
          </Col>
        })
      }
    </>
  )
}

export default ServiceList
