import React, { useEffect } from 'react'
import Stay from './Stay'
// import <Stay0></Stay0> from './Home/Stay'

import Navbarbootstrap from './Navbarbootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadblogs, asyncloaduser } from '../store/userActions';
import "./Loggedin/loggedin.css";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(asyncloaduser());
    dispatch(asyncloadblogs());

  }, [dispatch]);
  const user = useSelector((state) => state.user);

console.log(user)
  return (
    <>
        <Navbarbootstrap color="rgb(255 192 23)" mediumcolor="black"/>
        <Stay/>
        <div className="container-fluid">
        <ul>
          {/* {blogdata} */}
          {user &&
            user.blogs &&
            user.blogs.map((blog) => (
              <li  style={{marginBottom : "50px" , minheight:"20vh" , overflow : "hidden" , width : "80%" }} type="none" key={blog._id} > 
                <div class="card">
                  <div class="card-header">
                    {/* {user.user.name} */}
                    {blog.author.name}
                  </div>
                  <div class="card-body">
                    {/* <h5 class="card-title">Special title treatment</h5> */}
                    <div class="card-text" style={{  position : "relative" , overflow : "hidden"}}  dangerouslySetInnerHTML={{ __html: blog.data }}></div>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </li>

            ))}
        </ul>
      </div>
    </>
  )
}

export default Home