import React from 'react';
import resumee from '../assets/resume/resume.png'

export const Resume = () => {
  return (
                <div className="resume"> 
                <p>(This resume is just a filler while I work on my current one!)</p>
                    <h1>View or download</h1>
                    <a href={resumee} className="logoColor">
                        <h3 className='profText'>My Resume</h3>
                    </a>
                </div>
  )
}
