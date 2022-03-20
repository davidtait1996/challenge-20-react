import React from 'react'
// import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5 d-flex align-items-center justify-content-around" >
      <img alt='portrait of david' className='mb-4' id='portrait' src={require(`../../assets/images/portrait.JPG`)}/>
      <div>
        <h1 id="about">Who am I?</h1>
        <div className="my-2">
          <p>
            I'm David Tait from Salt Lake City, Utah. Hire me!
          </p>
        </div>
      </div>

    </section>
  )
}

export default About;