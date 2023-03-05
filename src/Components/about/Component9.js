import React from 'react'
import { Link } from 'react-router-dom'

const Component9 = () => {
  return (
    <>
        <div className="container-fluid" id='c'>
            <Link style={{textDecoration : "none" , color  : "black"}} to={"/"}><h1>Medium</h1></Link>
        </div>
    </>
  )
}

export default Component9