import React from 'react'
import {Container , Row , Col} from 'reactstrap'
import maletourist from '../assets/images/male-tourist.png'
import './style.css'

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2>Subscribe for the Latest Offers and Updates</h2>
                <div className="newsletter__input">
                    <input type="email" placeholder='Enter your Email'/>
                    <button className="btn newsletter__btn">Subscribe</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita suscipit quam, minima beatae nihil!</p>
            </div>
            </Col>
            <Col lg='6'>
            <div className="newsletter__img">
                <img src={maletourist} alt="" />
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter
