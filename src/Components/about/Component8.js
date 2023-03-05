import React from 'react'

const Component8 = () => {
  return (
    <>
        <div  id='b' style={{marginLeft : "0" , marginRight : "0"}}>
            <div className="container-fluid" id='b1' style={{marginLeft : "0" , marginRight : "0"}} >
             <div id="b11" style={{marginLeft : "0" , marginRight : "0"}}>
                <h1>Learn more <br /> about us. Or <br /> join us.</h1>
             </div>
             <div id="b12" style={{borderBottom : "2px solid black"}}>
              <br />
             <iframe  title='j' src="https://player.vimeo.com/video/448735219?api=1&amp;background=1&amp;mute=1&amp;loop=1" width='450' height="450"  positioning="relative" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="" ></iframe>
             </div>
            </div>
            <div  id='b2'>
              <div className="container-fluid " id='b21'>
                <br />
                <h3 >The Medium blog</h3>
                <br />
                <p>Visit our company blog for the latest news, <br /> product updates, and tips and tricks.</p>
               
                <button id='greenbutton' type="button" style={{fontSize: "22px" , borderRadius : "50px"}} class="btn btn-outline-success lg">Read Our Blog</button>
              </div>
              <div className="container-fluid" id='b21'>
              <br />
                <h3 >Work at Medium</h3>
                <br />
                <p>Our team is home to engineers, journalists, artists, <br /> and creatives of all stripes.</p>
              
                <button id='greenbutton' type="button" style={{fontSize: "22px" , borderRadius : "50px"}} class="btn btn-outline-success lg">View open positions</button>
              </div>
              <div className="container-fluid" id='b21'>
                <br />
                <h1>Read, write, <br /> and expand <br /> your world.</h1>
                          
                <button id='greenbutton' type="button" style={{fontSize: "22px" , borderRadius : "50px"}} class="btn btn-success lg">Get started</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default Component8