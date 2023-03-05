import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
// import Navbarbootstrap from './Components/Navbarbootstrap';
import About from './Components/About';
import Membership from './Components/Membership';
import Loginedinuser from './Components/Loginedinuser';
import Write from './Components/Write';
import Stories from './Components/Stories';
// import Stay from './Components/Stay';
// import "./assest/js/nav.js"
// import Mediumsvg from './Components/Mediumsvg';
const App = () => {
  return (
    <>
      <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/membership" element={<Membership/>} />
                <Route path="/loggedinuser" element={<Loginedinuser />} />
                <Route path="/write" element={<Write />} />
                <Route path="/stories" element={<Stories />} />

      </Routes>
    </>
  )
}

export default App