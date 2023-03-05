import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import '../assest/css/Stay.css'
import m from '../assest/image/m.svg'
const Stay = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <div className="container-fluid d-flex" id='box'>
            <br />
            <br />
            <br />
            <div id='box-section' className='container d-flex align-item-center justify-content-center flex-column'>
            <h1>Stay curious.</h1> <br /> <h3>Discover stories, thinking, and expertise <br /> from writers on any topic.</h3> <br /> <br /> 
             {/* <Button id='startReading' onClick={handleShow}  variant="dark">Start reading</Button>
            {/* <Button id='getstarted' onClick={handleShow}   variant="dark">Get Started</Button> */}
          <Offcanvas  show={show} onHide={handleClose} id="offcanvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="joinmedium">
                <h2>Join Medium.</h2>
                <br />
                <br />
                <br />
                <br />
                <Button id='buttonss' variant="light"><i class="ri-google-fill"></i> Sign up with Google</Button> <br /> 
                <Button id='buttonss' variant="light"><i class="ri-mail-fill"></i> Sign up with Email</Button> <br />
                <p id='loginAccount'>Already have an account? <span style={{color : "green"}}>Sign in</span></p> <br /> <br />
                <p  id='terms'>Click “Sign Up” to agree to Medium’s <u>Terms of Service</u> and acknowledge that <br /> Medium’s Privacy Policy applies to you.</p>
            </Offcanvas.Body>
          </Offcanvas> */}
            </div>
            <div className='container-fluid' id='mmm' style={{overflow : "hidden" , position : "relative"}}>
                <img src={m} alt="" />
            </div>

        </div>
    </>
  )
}

export default Stay