import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.jpg'
import projImg3 from '../assets/img/project-img3.png'
import projImg4 from '../assets/img/project-img4.jpg'
import projImg5 from '../assets/img/project-img5.png'
import projImg6 from '../assets/img/project-img6.png'

import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
  const projects = [
    {
      title: 'Beer Meal Buddies',
      description: 'CSS, HTML, JS',
      imgUrl: projImg1,
    },
    {
      title: 'Good Food Reviews',
      description:
        'Node, Express, MySQL, Sequelize, Handlebars, HTML, CSS, Bootstrap, Semantic UI',
      imgUrl: projImg2
    },
    {
      title: 'ApolloDAE',
      description: 'Mongo, NoSQL, MERN, React, Node, Tailwind',
      imgUrl: projImg3
    },
    {
      title: 'Weather Forecast',
      description: 'HTML, CSS, JavaScript, API',
      imgUrl: projImg4
    },
    {
      title: 'Work Day Scheduler',
      description: 'HTML, CSS, Bootstrap, and Jquery',
      imgUrl: projImg5
    },
    {
      title: 'Quiz App',
      description: 'HTML, CSS, and JavaScript',
      imgUrl: projImg6
    }
  ]

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>These are the projects I've worked on</p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>
                          <ul>
                            <li><a href="">Beer Meal Buddies</a></li>
                            <li><a href="https://goodie-foodies-heroku.herokuapp.com/">Good Food Review</a></li>
                            <li><a href="https://apollodae001.herokuapp.com/">ApolloDAE</a></li>
                            <li><a href="https://dianasjourney.github.io/live-weather/">Weather Dashboard</a></li>
                            <li><a href="https://dianasjourney.github.io/event-calender/">Work Schedule</a></li>
                            <li><a href="https://dianasjourney.github.io/Test-your-knowledge/">Quiz Application</a></li>
                            </ul>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2}></img>
    </section>
  )
}
