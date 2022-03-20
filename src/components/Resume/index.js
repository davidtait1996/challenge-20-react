import React from 'react'
import pdf from '../../assets/pdf/Resume.pdf'

function Resume() {

  return (
    <div className='mt-4'>
      <a href= {pdf}> Click Here for my Resume</a>
    </div>

  )
}

export default Resume;