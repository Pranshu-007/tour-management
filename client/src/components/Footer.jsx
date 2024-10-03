// import React from 'react'
// import './style.css'
// import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'

// const Footer = () => {
//   const quick__links = [
//     {
//       path:'/',
//       display:'Home'
//     },
//     {
//       path:'/about',
//       display:'About'
//     },
//     {
//       path:'/tour',
//       display:'Tour'
//     }
//   ]
//   return (
//     <footer className='footer'>
//       <Container>
//         <Row>
//           <Col lg='3'>
//           <div className="logo">
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vel maxime quas dolor, iste ducimus?</p>
//             <div className="social__links d-flex align-items-center gap-4">
//               <span>
//                 <a className='links' id='yt' href='www.youtube.com'><i className='ri-youtube-line'>Youtube</i></a>
//               </span>
//               <span>
//                 <a className='links' id='github' href='www.Github.com'><i className='ri-github-fill'>Github</i></a>
//               </span>
//               <span>
//                 <a className='links'  id='fb' href='www.Facebook.com'><i className='ri-facebook-circle-line'>Facebook</i></a>
//               </span>
//               <span>
//                 <a className='links' id='insta' href='www.Instagram.com'><i className='ri-instagram-line'>Instagram</i></a>
//               </span>
//             </div>
//           </div>
//           </Col>
//           <Col lg='3'>
//           <h5 className="footer__link-title">
//             Discover
//           </h5>
//           <ListGroup className='footer__quick-links'>
//           {
//             quick__links.map((item,index)=>{
//               return (
//                 <ListGroupItem key={index} className='ps-0 border-0'>
//                 <a href="item.path">{item.display}</a>
//               </ListGroupItem>
//               )
//             })
//           }
//           </ListGroup>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }

// export default Footer


import React from 'react';
import './style.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com' className='facebook me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://www.youtube.com' className='twitter me-4 text-reset'>
            <MDBIcon fab icon="youtube" />
          </a>
          <a href='https://www.x.com' className=' twitter me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.instagram.com' className='insta me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Travel World
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tour
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Gallery
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Login
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Register
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Prayagraj , India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                pranshushukla25@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='#!'>
          Pranshu Shukla ❤️
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer