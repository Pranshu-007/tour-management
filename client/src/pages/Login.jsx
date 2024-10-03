import {useState} from 'react'
import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import './style.css'

import loginimg from '../assets/images/login.png'
import usericon from '../assets/images/user.png'

const Login = () => {
  const [credentials,setcredentials] = useState({
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
                <img src={loginimg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={usericon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Enter your Email' required id='email' onChange={handlechange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Enter your Password' required id='password' onChange={handlechange}/>
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                </Form>
                <p>Don't Have an Account?? <Link to='/register'>Create New Account</Link></p>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Login
