import React,{useRef}from 'react'
import {Col , Form , FormGroup} from 'reactstrap'
import './style.css'

const Searchbar = () => {
    const locationref = useRef('')
    const distanceref = useRef(0)
    const personref = useRef(0)

    const handlesearch = () => {
        const location = locationref.current.value
        const distance = distanceref.current.value
        const groupsize = personref.current.value
        
        if(location==='' ||distance==='' ||groupsize===''){
            return alert('Please fill the the Fields!')
        }

    }

  return (
    <>
      <Col lg='12'>
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
        <FormGroup className='d-flex gap-3 form__group form__group-fast '>
            <span><i className='ri-map-pin-line'></i></span>
            <div>
                <h6>Location</h6>
                <input type="text" placeholder='Where are you going' ref={locationref}/>
            </div>
        </FormGroup>
        <FormGroup className='d-flex gap-3 form__group form__group-fast '>
            <span><i className='ri-map-time-line'></i></span>
            <div>
                <h6>Distance</h6>
                <input type="number" placeholder='Distance K/m' ref={distanceref}/>
            </div>
        </FormGroup>
        <FormGroup className='d-flex gap-3 form__group form__group-last '>
            <span><i className='ri-group-line'></i></span>
            <div>
                <h6>Max Persons</h6>
                <input type="number" placeholder='Group Size' ref={personref}/>
            </div>
        </FormGroup>
        <span className="search__icon" type='submit' onClick={()=>handlesearch()}><i className='ri-search-line'></i></span>
        </Form>
      </div>
      </Col>
    </>
  )
}

export default Searchbar
