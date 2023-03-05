// import React, { useEffect } from 'react'
// import Logedinnav from './Logedinnav'
import "../Components/Loggedin/loggedin.css"
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadblogs, asyncloaduser, asyncsignout } from '../store/userActions';
import { toast } from "react-toastify";


import React, { useEffect, useState } from 'react'
// import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Offcanvas } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

const Loginedinuser = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const write = () => {
    navigate("/write")
  }
  const notify = () => toast("session timeout! login again");
  const SignoutToast = () => toast("signout Successfully")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloaduser());
    dispatch(asyncloadblogs());

  }, [dispatch]);

  const Stories = () => 
  {
    navigate("/stories")
  }

  const signoutUser = () => {
    dispatch(asyncsignout());
    navigate("/")
    // (() => toast("Signout successfully"))() 
    SignoutToast();
};
  const user = useSelector((state) => state.user);
  // const {blogs} =  useSelector((state) => state.user);
  const userdata = user.user || {}
  const blogsdata = user.blogs || {}
  if (user?.error === "session timeout! login again") {
    notify()
  }
  console.log(blogsdata)
  console.log("shiva", user)

  // const blogdata = blogsdata.map((m) => (
  //   <li key={m.id}>
  //     <div className="card">
  //       <div className="card-header">
  //         Featured
  //       </div>
  //       <div className="card-body">
  //         <h5 className="card-title">Special title treatment</h5>
  //         <p className="card-text"> dangerouslySetInnerHTML={{ __html: m.data }}</p>
  //         {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  //       </div>
  //     </div>
  //   </li>
  // ))



  console.log(userdata?.name)
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand ><svg width="162" height="25" viewBox="0 0 162 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3361 12.6311C24.3361 19.3425 18.9414 24.7835 12.2865 24.7835C5.6316 24.7835 0.237305 19.3442 0.237305 12.6311C0.237305 5.91794 5.63201 0.479004 12.2865 0.479004C18.941 0.479004 24.3361 5.91958 24.3361 12.6311Z" fill="black" />
            <path d="M37.5547 12.6312C37.5547 18.9493 34.8572 24.0706 31.5299 24.0706C28.2027 24.0706 25.5051 18.9476 25.5051 12.6312C25.5051 6.31484 28.2027 1.19189 31.5299 1.19189C34.8572 1.19189 37.5547 6.31484 37.5547 12.6312Z" fill="black" />
            <path d="M42.9612 12.6313C42.9612 18.2919 42.0124 22.8804 40.8422 22.8804C39.672 22.8804 38.7231 18.2903 38.7231 12.6313C38.7231 6.97224 39.672 2.38208 40.8426 2.38208C42.0132 2.38208 42.9612 6.97101 42.9612 12.6313Z" fill="black" />
          </svg></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Nav
              // className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={write}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg>
                Write
              </Nav.Link>
              <Nav.Link >
                <div onClick={handleShow} style={{ height: "35px", width: "35px", borderRadius: "50%", backgroundColor: "red" }}></div>
                <Offcanvas id="off" show={show} onHide={handleClose} >
                  <Offcanvas.Body>
                    <ul type="none">
                      <li style={{ display: "flex", justifyContent: "normal", alignContent: "flex-start" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Profile"><circle cx="12" cy="7" r="4.5" stroke="currentColor" stroke-width="1.75"></circle><path d="M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"></path></svg>
                        <p id='menu' style={{ marginLeft: "20px" }}>Profile</p>
                      </li>

                      <li onClick={Stories} style={{ display: "flex", justifyContent: "normal", alignContent: "flex-start" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stories"><path d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z" stroke="currentColor"></path><path d="M8 8.5h8M8 15.5h5M8 12h8" stroke="currentColor" stroke-linecap="round"></path></svg>
                        <p id='menu' style={{ marginLeft: "20px" }}>Stories</p>
                      </li>
                      <hr />
                      <li style={{ display: "flex", justifyContent: "normal", alignContent: "flex-start" }}>
                        <i className="ri-settings-5-line"></i>
                        <p id='menu' style={{ marginLeft: "20px" }}>Settings</p>
                      </li>

                      <li onClick={signoutUser} style={{ display: "flex", justifyContent: "normal", alignContent: "flex-start" }}>
                        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stories"><path d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z" stroke="currentColor"></path><path d="M8 8.5h8M8 15.5h5M8 12h8" stroke="currentColor" stroke-linecap="round"></path></svg> */}
                        <i className="ri-logout-box-line"></i>
                        <div>
                          <p id='menu'  style={{ marginLeft: "20px" }}>Sign out</p>
                          <p>{userdata?.email}</p>
                        </div>
                      </li>
                    </ul>
                  </Offcanvas.Body>
                </Offcanvas>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* {first.name} */}
      {/* {!user.isAuthenticated ?  <Link to={"/"} >back</Link>  : "" }<br /><br /> */}
      {/* {userdata?.name} */}
      <div className="container-fluid">
        <ul>
          {/* {blogdata} */}
          {user &&
            user.blogs &&
            user.blogs.map((blog) => (
              <li style={{marginBottom : "20px" }} type="none" key={blog._id} > 
                <div className="card">
                  <div className="card-header">
                    {blog.name}
                  </div>
                  <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <div className="card-text" style={{ minHeight : "10vh" , position : "relative" , overflow : "hidden"}}  dangerouslySetInnerHTML={{ __html: blog.data }}></div>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </li>

            ))}
        </ul>
      </div>

    </>
  )
}

export default Loginedinuser