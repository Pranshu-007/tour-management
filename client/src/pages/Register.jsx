import {useState} from 'react'
import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import './style.css'

import registerimg from '../assets/images/register.png'
import usericon from '../assets/images/user.png'

const Register = () => {
  const [credentials,setcredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined
})
  const handlechange = (e) => {
    setcredentials(prev=>({...prev , [e.target.id]:e.target.value}))
}
const handleClick = (e) => {
  e.preventDefault()

}
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerimg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={usericon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='Enter your Username' required id='username' onChange={handlechange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Enter your Email' required id='email' onChange={handlechange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Enter your Password' required id='password' onChange={handlechange}/>
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                </Form>
                <p>Already Have an Account?? <Link to='/login'>Login</Link></p>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Register
