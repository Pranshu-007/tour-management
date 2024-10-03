import React from 'react'
import {Container , Row , Button} from 'reactstrap'
import logo from '../assets/images/logo.png'
import './style.css'

const navlink = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '#',
    display: 'About'
  },
  {
    path: '/tour',
    display: 'Tour'
  },
]

const Header = () => {
  return (
    <>
      
      <header className="header">
        <Container>
          <Row>
            <div className="nav-wrapper d-flex align-items-center justify-content-between ">
              <div className="logo">
                <img src={logo} alt="Company Logo" />
              </div>
              <div className="navigation">
                <ul className="menu d-flex align-items-center gap-5">
                  {
                    navlink.map((item,index)=>{
                      return <>
                        <li className="nav__item"  key={index} >
                        <a className={navClass=> navClass.isActive ? 'active__link' : ''} href={item.path}>{item.display}</a>
                      </li>
                      </>
                    })
                  }
                </ul>
              </div>
              <div className="nav_right d-flex align-items-center gap-4">
                <div className="nav_btns d-flex align-items-center gap-4">
                  <Button className="btn secondary__btn"><a href="/login">Login</a></Button>
                  <Button className="btn primary__btn"><a href="/register">Register</a></Button>
                </div>
                <span className="mobile_menu">
                  <i className='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
      
    </>
  )
}

export default Header
