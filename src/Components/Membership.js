import React from 'react'
import "../Components/Membership/membership.css"
import M1 from './Membership/M1'
import M2 from './Membership/M2'

import Navcomponents from './Navcomponents'
const Membership = () => {
    // const [first, setfirst] = useState("")

  return (
    <>
    <Navcomponents color ="rgb(68 121 255)" mediumcolor = "white" /> <br /> <br /> 
    <M1 />
    <M2 />
    </>
  )
}

export default Membership