import React from 'react'
// import "/Users/nnjai/Desktop/medium/src/assest/css/about.css"
import "./about.css"
const Component2 = () => {
    return (
        <>
            <div className="container-fluid" id='twobox' >
                <div className="container-fluid" id='first'>
                    <p>The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.
                        <br />
                        We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.</p>
                </div>


                <div className="container-fluid" id='second'>
                    {/* //eslint-disable-next-line */}
                    <iframe id='sphere' title='j' src="https://player.vimeo.com/video/467834328?api=1&amp;background=1&amp;mute=1&amp;loop=1" positioning="relative" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
                </div>
            </div>
        </>
    )
}

export default Component2