import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'
import emailIcon from '../assets/img/envelope.svg'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'
import Resume from '../assets/resume/Resume.pdf'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = value => {
    setActiveLink(value)
  }

  return (
    <Router>
      <Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href='/'></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='#home'
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href='#skills'
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href='#project'
                className={
                  activeLink === 'project'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('project')}
              >
                Projects
              </Nav.Link>
              {/* <Nav.Link
                href={Resume}
                className={
                  activeLink === 'Resume'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('project')}
              >
                Resume
              </Nav.Link> */}
            </Nav>
            <span className='navbar-text'>
              <div className='social-icon'>
                <a href='https://www.linkedin.com/in/diana-vu-3373a0228/'>
                  <img src={navIcon1} alt='' />
                </a>

                <a href='https://github.com/DianasJourney?tab=repositories'>
                  <img src={navIcon2} alt='' />
                </a>
                <a href='diana.vu@hotmail.com'>
                  <img src={emailIcon} alt='' />
                </a>
              </div>
              <HashLink to='#connect'>
                <button className='vvd'>
                  <span>Contact Me</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
