import React from 'react'
import Mygoogle from '../assets/google.png'
import Mycoursera from '../assets/coursera.png'
import Myinfosys from '../assets/infosys.png'
import Mydata from '../assets/data.png'
import './cert.css'
import Carousel from 'react-bootstrap/Carousel';

function Certificates() {
  return (
    <>

        <Carousel >
      <Carousel.Item interval={1000}>
        <img style={{widows:'600px',height:'400px',marginTop:"50px",marginBottom:'50px'}} src={Mygoogle} alt="noimg" />
        <p style={{textAlign:'center',color:'brown',fontWeight:'600',marginTop:'10px'}}>Googles Fundamentals of Digital Marketing</p>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img style={{widows:'600px',height:'400px',marginTop:"50px",marginBottom:'50px'}} src={Mycoursera} alt="noimg" />
        <p style={{textAlign:'center',color:'brown',fontWeight:'600',marginTop:'10px'}}>Introduction to Cloud Identity.</p>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img style={{widows:'600px',height:'400px',marginTop:"50px",marginBottom:'50px'}} src={Myinfosys} alt="noimg" />
        <p style={{textAlign:'center',color:'brown',fontWeight:'600',marginTop:'10px'}}>Infosys springboard internship </p>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img style={{widows:'600px',height:'400px',marginTop:"50px",marginBottom:'50px'}} src={Mydata} alt="noimg" />
        <p style={{textAlign:'center',color:'brown',fontWeight:'600',marginTop:'10px'}}>Infosys introduction to Data Science </p>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Certificates
