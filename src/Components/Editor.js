import { createReactEditorJS } from "react-editor-js";
import "./Loggedin/loggedin.css"
import { useRef, useCallback } from "react";
import { EDITOR_JS_TOOLS } from "./constants";
import { asynccreateblog, asyncloadblogs, asyncloaduser } from "../store/userActions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
// import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ReactEditorJS = createReactEditorJS();

function App() {

    const notify = () => toast("Blog Posted");
    const dispatch = useDispatch();
    // const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(asyncloaduser());
        // dispatch(asyncloadblogs());
    }, [dispatch]);
    const user = useSelector((state) => state.user);
    const userdata = user.user || {}

    console.log(user)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const editorJS = useRef(null);
    const handleInitialize = (instance) => {
        editorJS.current = instance;
    };

    const handleSave = async () => {
        const savedData = await editorJS.current.save();

        let blog = "";
        savedData.blocks.forEach((element) => {
            // console.log(element);

            if (element.type === "paragraph") {
                blog += "<p>" + element.data.text + "</p>";
            }
            if (element.type === "header") {
                blog +=
                    "<h" +
                    element.data.level +
                    ">" +
                    element.data.text +
                    "</h" +
                    element.data.level +
                    ">";
            }
            if (element.type === "list") {
                blog +=
                    "<" +
                    element.data.style[0] +
                    element.type[0] +
                    "/>" +
                    element.data.items
                        .map((i) => "<li>" + i + "</li>")
                        .join("") +
                    "<" +
                    element.data.style[0] +
                    element.type[0] +
                    "/>";
            }
            if (element.type === "code") {
                blog +=
                    "<" +
                    element.type +
                    ">" +
                    element.data.code +
                    "</" +
                    element.type +
                    ">";
            }
            if (element.type === "quote") {
                blog +=
                    "<" +
                    element.type[0] +
                    ">" +
                    element.data.text +
                    "</" +
                    element.type[0] +
                    ">";
            }
            if (element.type === "image") {
                blog +=
                    "<img src=" +
                    element.data.file.url +
                    " /><figcaption>" +
                    element.data.caption +
                    "</figcaption>";
            }
        });

        await dispatch(asynccreateblog({ data: blog }));
        await dispatch(asyncloadblogs());
        navigate("/loggedinuser")
        notify();
    };
    const stories = () => 
    {
        navigate("/stories")
    }

    const handleClear = useCallback(async () => {
        await editorJS.current.clear();
    }, []);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Link to="/loggedinuser">
                        <Navbar.Brand ><svg width="162" height="25" viewBox="0 0 162 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.3361 12.6311C24.3361 19.3425 18.9414 24.7835 12.2865 24.7835C5.6316 24.7835 0.237305 19.3442 0.237305 12.6311C0.237305 5.91794 5.63201 0.479004 12.2865 0.479004C18.941 0.479004 24.3361 5.91958 24.3361 12.6311Z" fill="black" />
                            <path d="M37.5547 12.6312C37.5547 18.9493 34.8572 24.0706 31.5299 24.0706C28.2027 24.0706 25.5051 18.9476 25.5051 12.6312C25.5051 6.31484 28.2027 1.19189 31.5299 1.19189C34.8572 1.19189 37.5547 6.31484 37.5547 12.6312Z" fill="black" />
                            <path d="M42.9612 12.6313C42.9612 18.2919 42.0124 22.8804 40.8422 22.8804C39.672 22.8804 38.7231 18.2903 38.7231 12.6313C38.7231 6.97224 39.672 2.38208 40.8426 2.38208C42.0132 2.38208 42.9612 6.97101 42.9612 12.6313Z" fill="black" />
                        </svg></Navbar.Brand>
                    </Link>
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
                            <Nav.Link>
                                <button className="btn btn-success" onClick={handleShow2} >Publish</button>
                                
                                <Offcanvas id="publish" show={show2} onHide={handleClose2}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Publishing to: {userdata?.name}</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        Note: Changes here will affect how your story appears in public places like Medium’s homepage and in subscribers’ inboxes — not the contents of the story itself.
                                      <br /> <br /> <br />  <button className="btn btn-success" onClick={handleSave}>Publish</button>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </Nav.Link>
                            <Nav.Link>
                                <button className="btn btn-dark" onClick={handleClear}>Clear</button>
                            </Nav.Link>
                            <Nav.Link>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg> Write
                            </Nav.Link>
                            <Nav.Link>
                                <div onClick={handleShow} style={{ height: "35px", width: "35px", borderRadius: "50%", backgroundColor: "red" }}></div>
                                <Offcanvas id="off" show={show} onHide={handleClose} >
                                    <Offcanvas.Body>
                                        <ul type="none">
                                            <li style={{ display: "flex", justifyContent: "normal", alignContent: "flex-start" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Profile"><circle cx="12" cy="7" r="4.5" stroke="currentColor" stroke-width="1.75"></circle><path d="M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"></path></svg>
                                                <p id='menu' style={{ marginLeft: "20px" }}>Profile</p>
                                            </li>

                                            <li onClick={stories} style={{ display: "flex", justifyContent: "normal", alignContent: "flex-start" }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stories"><path d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z" stroke="currentColor"></path><path d="M8 8.5h8M8 15.5h5M8 12h8" stroke="currentColor" stroke-linecap="round"></path></svg>
                                                <p id='menu' style={{ marginLeft: "20px" }}>Stories</p>
                                            </li>
                                            <hr />
                                            <li style={{ display: "flex", justifyContent: "normal", alignContent: "flex-start" }}>
                                                <i class="ri-settings-5-line"></i>
                                                <p id='menu' style={{ marginLeft: "20px" }}>Settings</p>
                                            </li>

                                            <li style={{ display: "flex", justifyContent: "normal", alignContent: "flex-start" }}>
                                                {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stories"><path d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z" stroke="currentColor"></path><path d="M8 8.5h8M8 15.5h5M8 12h8" stroke="currentColor" stroke-linecap="round"></path></svg> */}
                                                <i class="ri-logout-box-line"></i>
                                                <p id='menu' style={{ marginLeft: "20px" }}>Sign out</p>
                                                <p>{userdata?.email}</p>
                                            </li>
                                        </ul>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ReactEditorJS
                tools={EDITOR_JS_TOOLS}
                onInitialize={handleInitialize}
            />

        </>
    );
}

export default App;
