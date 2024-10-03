import './style.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Form,FormGroup,ListGroup,ListGroupItem,Button} from 'reactstrap'

const Booking = ({tour,avgrating}) => {
    const {price,reviews} = tour
    const navigate = useNavigate()
    const [credentials,setcredentials] = useState({
        userId:'01',
        useremail:'user@gmail.com',
        fullname:'',
        phone:'',
        guestsize:'',
        bookdate:''
    })
    const serviefees = 10;
    const totalAmount = Number(price)*Number(credentials.guestsize ? credentials.guestsize : credentials.guestsize=1) + Number(serviefees)
    const handlechange = (e) => {
        setcredentials(prev=>({...prev , [e.target.id]:e.target.value}))
    }

    const handleclick = (e) => {
        e.preventDefault();
        console.log(credentials);
        navigate('/thankyou')
    }

  return (
    <>
      <div className="booking">
        <div className="booking__top d-flex align-item-center justify-content-between">
            <h3>${price} <span>/Per Person</span> </h3>
            <span className="tour__rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill"></i>{avgrating===0 ? null : avgrating} ({reviews?.length})
                </span>
        </div>
        <div className="booking__form">
            <h5>Information</h5>
            <Form className="booking__info-form" onSubmit={handleclick}>
                <FormGroup>
                    <input type="text" placeholder='Full Name' id='fullname' required onChange={handlechange} />
                </FormGroup>
                <FormGroup>
                    <input type="text" placeholder='Phone Number' id='phone' required onChange={handlechange} />
                </FormGroup>
                <FormGroup>
                <input type="date" placeholder='Booking Date' id='bookdate' required onChange={handlechange} />
                    <input type="number" placeholder='No. of Guests' id='guestsize' required onChange={handlechange} />
                </FormGroup>
            </Form>
        </div>
        <div className="booking__bottom">
        <ListGroup>
        <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-item-center gap-1'>${price}<i className='ri-close-line'></i>1 Person</h5>
            <span>${price}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
            <h5>Service Charge</h5>
            <span>${serviefees}</span>
        </ListGroupItem>
        <ListGroupItem className='total border-0 px-0'>
            <h5>Total</h5>
            <span>${totalAmount}</span>
        </ListGroupItem>
        </ListGroup>
        <Button className='btn primary__btn w-100 mt-4' onClick={handleclick}>Book Now</Button>
        </div>
      </div>
    </>
  )
}

export default Booking
