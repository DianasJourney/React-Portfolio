import React from 'react';
import resumee from '../assets/resume/resume.png'

export const Resume = () => {
  return (
                <div className="resume"> 
                <h1>(Skills)</h1>
                <p>HTML, CSS, JQUERY, JAVASCRIPT, REACT, NODEJS, MERN</p>
                    <h3>View or download</h3>
                    <a href={resumee} className="logoColor">
                        <h3 className='profText'>My Resume</h3>
                    </a>
                </div>
  )
}
