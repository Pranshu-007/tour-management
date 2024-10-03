import {Container , Row , Col} from 'reactstrap'
import worldimg from '../assets/images/world.png'
import experience from '../assets/images/experience.png'
import heroimg01 from '../assets/images/hero-img01.jpg'
import heroimg02 from '../assets/images/hero-img02.jpg'
import herovideo from '../assets/images/hero-video.mp4'
import Subtitle from "../shared/Subtitle"
import Searchbar from "../components/Searchbar"
import ServiceList from '../services/ServiceList'
import Featuredtourlist from '../components/Featuredtourlist'
import Imagegallery from '../gallery/Imagegallery'
import Testimonial from './Testimonial'
import Newsletter from '../shared/Newsletter'
import './style.css'

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know before you Go"} />
                <img src={worldimg} alt="The World" />
              </div>
              <h1>Travelling opens the door to creating <span className="highlight">memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique enim nemo molestias unde, saepe officiis earum! Accusamus vero inventore doloremque in id temporibus dicta quaerat, impedit quae corrupti voluptatum!</p>
            </div>
            </Col>
            <Col lg='2'>
            <div className="hero_img-box">
              <img src={heroimg01} alt="" />
            </div>
            </Col>
            <Col lg='2'>
            <div className="hero_img-box mt-4">
            <video autoPlay muted loop >
        <source src={herovideo} type="video/mp4" />
      </video>
            </div>
            </Col>
            <Col lg='2'>
            <div className="hero_img-box mt-5">
              <img src={heroimg02} alt="" />
            </div>
            </Col>
            <Searchbar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='3'>
            <h5 className="services__subtitle">What we Serve</h5>
            <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <Featuredtourlist/>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
            <div className="experience__content">
            <Subtitle subtitle={'Experience'}/>
            <h2>With All Experience <br /> we will serve you</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vitae obcaecati ea!</p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trips</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>10</span>
                <h6>Years Experience</h6>
              </div>
            </div>
            </Col>
            <Col lg='6'>
            <div className="experience__img">
              <img src={experience} alt="" />
            </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
        <Row>
          <Col lg='12' >
          <Subtitle subtitle={'Gallery'}/>
          <h2 className="gallery__title">
            Visit our Tour Gallery
          </h2>
          </Col>
          <Col lg='12'>
          <Imagegallery />
          </Col>
        </Row>
        </Container>
      </section>
      <section>
        <Container>
        <Row>
          <Col lg='12' >
          <Subtitle subtitle={'Fans Love'}/>
          <h2 className="testimonial__title">
            What our Fans SAY about US
          </h2>
          </Col>
          <Col lg='12'>
          <Testimonial />
          </Col>
        </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default Home
