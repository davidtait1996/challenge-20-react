import React from 'react'
import pdf from '../../assets/pdf/Resume.pdf'

function Resume() {

  return (
    <>
    
      <div className='mt-5' id="skills">

        <div className='mt-5'>
          <h1>Languages</h1> 
          <br></br>
          <div id="resume-text">Javascript | HTML | CSS | SQL | MongoDB | C | C++ | Matlab | VHDL | TCL </div>

        </div>

        <div className='mt-5'>
          <h1>Technologies</h1> 
          <br></br>
          <div id="resume-text">Git | Node | Express | React | OOP | TDD | Sequelize | Mongoose | GraphQL | FPGA design</div>
        </div>

      </div>

      <br></br><br></br><br></br><br></br><br></br>

      <div id="resume" className='mt-5'>
        <a href= {pdf}> Click Here for my Resume!</a>
      </div>

      <br></br><br></br><br></br><br></br><br></br>

    </>
  )
}

export default Resume;