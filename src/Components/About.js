import React from 'react'
import "../assest/css/about.css"
import Component1 from './about/Component1'
import Component2 from './about/Component2'
import Component3 from './about/Component3'
import Component4 from './about/Component4'
import Component5 from './about/Component5'
import Component6 from './about/Component6'
import Component7 from './about/Component7'
import Component8 from './about/Component8'
import Component9 from './about/Component9'
import Navcomponents from './Navcomponents'

const About = () => {
  return (
   <>
   <Navcomponents color= "white" mediumcolor = "black" />
   <Component1 />
   <Component2 />
   <Component3 />
   <Component4 />
   <Component5 />
   <Component6 />
   <Component7 />
   <Component8 />
   <Component9 />
   </>
  )
}

export default About