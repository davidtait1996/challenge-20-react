import React from 'react'
// import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <img alt='portrait of david' className='mb-4' id='portrait' src={require(`../../assets/images/portrait.JPG`)}/>
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
        <p>
          I'm David Tait from Salt Lake City, Utah. Hire me!
        </p>
      </div>
    </section>
  )
}

export default About;