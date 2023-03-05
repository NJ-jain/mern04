import {  useState , useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'remixicon/fonts/remixicon.css'
import Navbar from 'react-bootstrap/Navbar';
// import "../assest/js/nav"
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assest/css/navbar.css'
// import Mediumsvg from '../assest/image/medium.svg'
import React from 'react';
import { asyncsignup, asyncloaduser, asyncsignin } from "../store/userActions";
import Offcanvas from 'react-bootstrap/Offcanvas';
// import MediumLogo from '../assest/image/medium logo.png'
// import MediumWhiteLogo from "../assest/image/Medium-white.svg"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";



const Navbarbootstrap = (props) => {
  // const ourstory = useRef(null)
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const navigate = useNavigate();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [name, setname] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [showsignin, setsigninShow] = useState(false);
  const handleClosesignin = () => setsigninShow(false);
  const handleShowsignin = () => setsigninShow(true);
  const navhandler = () => {
      // const our = ourstory.current;
      // our.style.backgroundColor = "white"
      navigate(`/about`);

  }
  const homehandler = ()=>
  {
    navigate('/')
  }
  const membershiphandler = () => {
    navigate(`/membership`)
  }



  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user)
  // console.log(error);
  // console.log(isAuthenticated);
  useEffect(() => {
      dispatch(asyncloaduser());
  }, [dispatch]);

  const registerUser = () => {
    try {
      dispatch(
        asyncsignup({
            name: name,
            email: email,
            password: password,
        })
       
        );
        // navigate(`/loggedinuser`)
    } catch (error) {
      console.log(error)
    }
  };

  const loginUser = () => {
    dispatch(
        asyncsignin({
            email: email,
            password: password,
        })
    );
    navigate(`/loggedinuser`)
};
// const signoutUser = () => {
//   dispatch(asyncsignout());
// };


  return (
    <>
            {/* <button onClick={signoutUser}>Signout</button> */}
    
      <Navbar id='navbar'  collapseOnSelect expand="lg"  style={{backgroundColor :`${props.color}` , position : "fixed" , width : "100vw" , zIndex  : "999"}}  variant="dark">
    <Container>
      <Navbar.Brand onClick={homehandler} id='navbrand' style={{cursor : "pointer"}}  > <svg width="162" height="25" viewBox="0 0 162 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.3361 12.6311C24.3361 19.3425 18.9414 24.7835 12.2865 24.7835C5.6316 24.7835 0.237305 19.3442 0.237305 12.6311C0.237305 5.91794 5.63201 0.479004 12.2865 0.479004C18.941 0.479004 24.3361 5.91958 24.3361 12.6311Z" fill={props.mediumcolor}/>
<path d="M37.5547 12.6312C37.5547 18.9493 34.8572 24.0706 31.5299 24.0706C28.2027 24.0706 25.5051 18.9476 25.5051 12.6312C25.5051 6.31484 28.2027 1.19189 31.5299 1.19189C34.8572 1.19189 37.5547 6.31484 37.5547 12.6312Z" fill={props.mediumcolor}/>
<path d="M42.9612 12.6313C42.9612 18.2919 42.0124 22.8804 40.8422 22.8804C39.672 22.8804 38.7231 18.2903 38.7231 12.6313C38.7231 6.97224 39.672 2.38208 40.8426 2.38208C42.0132 2.38208 42.9612 6.97101 42.9612 12.6313Z" fill={props.mediumcolor}/>
<path d="M76.216 1.5327L76.2496 1.52532V1.26508H69.3971L63.0343 16.2446L56.6715 1.26508H49.2871V1.52532L49.3203 1.5327C50.571 1.81549 51.2061 2.23721 51.2061 3.75811V21.5634C51.2061 23.0843 50.5686 23.506 49.3178 23.7888L49.2847 23.7962V24.0573H54.2948V23.797L54.2616 23.7896C53.0108 23.5069 52.3758 23.0851 52.3758 21.5642V4.79089L60.5495 24.0573H61.0131L69.4249 4.2536V22.004C69.3177 23.2052 68.6884 23.5761 67.5559 23.8323L67.5223 23.8401V24.0983H76.2496V23.8401L76.216 23.8323C75.0823 23.5761 74.4379 23.2052 74.3307 22.004L74.3249 3.75811H74.3307C74.3307 2.23721 74.9657 1.81549 76.216 1.5327V1.5327ZM80.2024 13.3278C80.3452 10.1286 81.4921 7.81958 83.4168 7.77983C84.0104 7.78966 84.5084 7.98474 84.8954 8.36015C85.7178 9.15974 86.1045 10.8306 86.0448 13.3278H80.2024ZM80.1161 14.2294H90.345V14.1864C90.3159 11.7401 89.6085 9.8372 88.2444 8.53064C87.0652 7.40155 85.3193 6.78024 83.4855 6.78024H83.4446C82.4929 6.78024 81.3256 7.01138 80.495 7.43024C79.5494 7.86876 78.7156 8.5245 78.0216 9.38515C76.9046 10.7716 76.2279 12.6454 76.0634 14.7511C76.0581 14.8142 76.0536 14.8774 76.0491 14.9405C76.0446 15.0036 76.0417 15.0601 76.0389 15.1204C76.0331 15.2331 76.0286 15.3462 76.0262 15.4597C76.0221 15.6417 76.0209 15.8249 76.0241 16.0093C76.135 20.7786 78.707 24.5901 83.2752 24.5901C87.2849 24.5901 89.6199 21.654 90.2022 17.713L89.908 17.6093C88.8851 19.7274 87.048 21.011 84.9572 20.8544C82.103 20.6405 79.9164 17.7417 80.1149 14.2302L80.1161 14.2294ZM101.91 20.6925C101.575 21.4896 100.875 21.9282 99.9364 21.9282C98.9982 21.9282 98.1406 21.2831 97.5314 20.111C96.8767 18.8528 96.5322 17.0741 96.5322 14.9671C96.5322 10.5819 97.8939 7.7454 100.001 7.7454C100.884 7.7454 101.579 8.18392 101.91 8.94909V20.6925ZM108.696 23.8187C107.445 23.5224 106.81 23.081 106.81 21.4827V0.216309L99.2105 2.45893V2.73352L99.2572 2.72983C100.305 2.64499 101.017 2.79008 101.429 3.17204C101.753 3.47122 101.91 3.93024 101.91 4.57614V7.49171C101.161 7.01261 100.27 6.77942 99.1884 6.77942C96.9954 6.77942 94.9909 7.70442 93.5454 9.38433C92.0385 11.1351 91.2418 13.5278 91.2418 16.3028C91.2414 21.2589 93.6771 24.5901 97.3022 24.5901C99.4229 24.5901 101.129 23.4261 101.91 21.463V24.0983H108.729V23.8253L108.696 23.8187ZM115.213 3.10852C115.213 1.56098 114.048 0.393767 112.503 0.393767C110.965 0.393767 109.761 1.58639 109.761 3.10852C109.761 4.63065 110.966 5.82327 112.503 5.82327C114.048 5.82327 115.213 4.65606 115.213 3.10852V3.10852ZM117.007 23.8187C115.756 23.5224 115.121 23.081 115.121 21.4827H115.116V6.82983L108.297 8.79089V9.05728L108.338 9.06097C109.813 9.19253 110.217 9.70154 110.217 11.4286V24.0983H117.041V23.8253L117.007 23.8187ZM134.48 23.8187C133.229 23.5224 132.594 23.081 132.594 21.4827V6.82983L126.101 8.72614V8.99335L126.14 8.99745C127.346 9.1245 127.695 9.66261 127.695 11.3974V20.6597C127.292 21.4569 126.538 21.9302 125.624 21.9622C124.142 21.9622 123.325 20.9593 123.325 19.1384V6.83024L116.506 8.7913V9.05728L116.547 9.06097C118.023 9.19212 118.427 9.70113 118.427 11.4286V19.2675C118.423 19.8147 118.471 20.3611 118.569 20.8995L118.692 21.4343C119.269 23.5064 120.782 24.5901 123.151 24.5901C125.159 24.5901 126.918 23.3454 127.693 21.3978V24.1028H134.512V23.8298L134.48 23.8187ZM160.97 24.0983V23.8249L160.936 23.8171C159.579 23.5036 159.051 22.9126 159.051 21.7093V11.7421C159.051 8.63433 157.308 6.77942 154.389 6.77942C152.262 6.77942 150.467 8.01097 149.777 9.92941C149.228 7.89663 147.649 6.77942 145.314 6.77942C143.264 6.77942 141.657 7.86343 140.967 9.69458V6.83106L134.148 8.71179V8.97982L134.189 8.98351C135.647 9.11302 136.068 9.63679 136.068 11.3196V24.0983H142.431V23.8253L142.397 23.8171C141.315 23.5622 140.965 23.0974 140.965 21.9048V10.4802C141.252 9.81015 141.829 9.0163 142.97 9.0163C144.387 9.0163 145.106 9.99991 145.106 11.9376V24.0983H151.47V23.8253L151.436 23.8171C150.354 23.5622 150.004 23.0974 150.004 21.9048V11.7409C150.007 11.3609 149.977 10.9813 149.914 10.6065C150.218 9.87818 150.828 9.0163 152.016 9.0163C153.453 9.0163 154.152 9.97163 154.152 11.9376V24.0983H160.97Z" fill={props.mediumcolor}/>
</svg>
</Navbar.Brand>
      {/* <Navbar.Brand onClick={homehandler} id='navbrand' style={{cursor : "pointer"}}  ><img src={MediumWhiteLogo} alt="" style={{color : "black"}} /></Navbar.Brand> */}

      {/* <Navbar.Brand onClick={homehandler} id='navbrand' style={{cursor : "pointer"}}  ><img src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Medium-Logo-Black-RGB-1.svg" style="filter: invert(100%); border-color: rgb(255, 255, 255);" alt="" class="medium-nav-logo" /></Navbar.Brand> */}

      {/* <Navbar.Brand  id='navbrand'  > {Mediumsvg}</Navbar.Brand> */}

      <Navbar.Toggle  aria-controls="responsive-navbar-nav">
         <Button id='getstarted' onClick={handleShow}   variant="dark">Get Started</Button>
          <Offcanvas  show={show} onHide={handleClose} id="offcanvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas> 
      </Navbar.Toggle>
      <Navbar.Collapse className='sss'  id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link id='navtext' onClick={navhandler} >Our story</Nav.Link>
          <Nav.Link id='navtext' onClick={membershiphandler} eventKey={2} >
            Membership
          </Nav.Link>
          <Nav.Link id='navtext' eventKey={3} >
            Write
          </Nav.Link>
          <Nav.Link id='navtext' onClick={handleShowsignin} eventKey={4}>
            Sign In
          </Nav.Link>
          <Offcanvas  show={showsignin} onHide={handleClosesignin} id="offcanvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="joinmedium">
                <h2>Welcome back.</h2>
                <br />
                <br />
                <br />
                <br />
                {/* <Button id='buttonss' variant="light"><i class="ri-google-fill"></i> Sign up with Google</Button> <br />  */}
                <Button id='buttonss' onClick={handleShow3} variant="light"><i class="ri-mail-fill"></i> Sign up with Email</Button> <br />
                <Offcanvas  show={show3} onHide={handleClose3} id="offcanvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="joinmedium">
                <h2>Sign up with email</h2>
                <br />
                <p id='loginAccount'>Enter your email address to signin.</p>
                <br />
                <form onSubmit={loginUser} style={{border : "none" , textAlign : "center"}}>
                  <input value={email} onChange= {(e) => setemail(e.target.value)} style={{border : "none" ,outline : "none" , borderBottom : "2px black solid" , textAlign : "center"}}  type="email" placeholder='Email' id='loginAccount' /> <br /> <br />
                  {/* <input type="text" value={name} onChange= {(e) => setname(e.target.value)} style={{border : "none" ,outline : "none" , borderBottom : "2px black solid" , textAlign : "center"}} placeholder='Username' id='loginAccount'/> <br /> <br /> */}
                  <input type="password" value={password} onChange= {(e) => setpassword(e.target.value)} style={{border : "none" ,outline : "none" , borderBottom : "2px black solid" , textAlign : "center"}} placeholder='Password'  id='loginAccount' /> <br />  <br />
                  <input type="submit"  variant="dark" className='btn btn-dark'  id='getstarted' value="Sign Up" />
                  {/* <button type="submit" variant="dark" className='btn btn-dark'  id='getstarted'>Sign up</button> */}
                </form>
                <br />
                <br />
                <p  id='terms'>Click “Sign Up” to agree to Medium’s <u>Terms of Service</u> and acknowledge that <br /> Medium’s Privacy Policy applies to you.</p>
            </Offcanvas.Body>
                </Offcanvas>
                <p id='loginAccount'>No account ? <span style={{color : "green"}}>Create One</span></p> <br /> <br />
                <p  id='terms'>Forgot email or trouble signing in? <u>Get help</u>.</p> <br />
                <p  id='terms'>Click “Sign Up” to agree to Medium’s <u>Terms of Service</u> and acknowledge that <br /> Medium’s Privacy Policy applies to you.</p>
            </Offcanvas.Body>
          </Offcanvas>
          
          <Button id='getstarted' onClick={handleShow}   variant="dark">Get Started</Button>
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
                {/* <Button id='buttonss' variant="light"><i class="ri-google-fill"></i> Sign up with Google</Button> <br />  */}
                <Button id='buttonss' onClick={handleShow2} variant="light"><i class="ri-mail-fill"></i> Sign up with Email</Button> <br />
                <Offcanvas  show={show2} onHide={handleClose2} id="offcanvas">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="joinmedium">
                <h2>Sign up with email</h2>
                <br />
                <p id='loginAccount'>Enter your email address to create an account.</p>
                <br />
                <form onSubmit={registerUser} style={{border : "none" , textAlign : "center"}}>
                  <input value={email} onChange= {(e) => setemail(e.target.value)} style={{border : "none" ,outline : "none" , borderBottom : "2px black solid" , textAlign : "center"}}  type="email" placeholder='Email' id='loginAccount' /> <br /> <br />
                  <input type="text" value={name} onChange= {(e) => setname(e.target.value)} style={{border : "none" ,outline : "none" , borderBottom : "2px black solid" , textAlign : "center"}} placeholder='Username' id='loginAccount'/> <br /> <br />
                  <input type="password" value={password} onChange= {(e) => setpassword(e.target.value)} style={{border : "none" ,outline : "none" , borderBottom : "2px black solid" , textAlign : "center"}} placeholder='Password'  id='loginAccount' /> <br />  <br />
                  <input type="submit"  variant="dark" className='btn btn-dark'  id='getstarted' value="Sign Up" />
                  {/* <button type="submit" variant="dark" className='btn btn-dark'  id='getstarted'>Sign up</button> */}
                </form>
                <br />
                <br />
                <p  id='terms'>Click “Sign Up” to agree to Medium’s <u>Terms of Service</u> and acknowledge that <br /> Medium’s Privacy Policy applies to you.</p>
            </Offcanvas.Body>
                </Offcanvas>
                <p id='loginAccount'>Already have an account? <span style={{color : "green"}}>Sign in</span></p> <br /> <br />
                <p  id='terms'>Click “Sign Up” to agree to Medium’s <u>Terms of Service</u> and acknowledge that <br /> Medium’s Privacy Policy applies to you.</p>
            </Offcanvas.Body>
          </Offcanvas>
        </Nav>
      </Navbar.Collapse>
    </Container>
    
  </Navbar>
    </>
  )
}

export default Navbarbootstrap