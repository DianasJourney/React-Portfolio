import reactIcon from '../assets/img/reacticon.png';
import htmlIcon from '../assets/img/htmlicon.png';
import javascriptIcon from '../assets/img/javascripticon.png';
import nodeIcon from '../assets/img/nodeicon.png';
import bootstrapIcon from '../assets/img/bootstrapicon.png';
import mysqlIcon from '../assets/img/mysqlicon.png';
import mongodbIcon from '../assets/img/mongodbicon.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
              >
                <div className='item'>
                  <img src={reactIcon} alt='Image' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src={javascriptIcon} alt='Image' />
                  <h5>JavaScript</h5>
                </div>
                <div className='item'>
                  <img src={nodeIcon} alt='Image' />
                  <h5>Node</h5>
                </div>
                <div className='item'>
                  <img src={htmlIcon} alt='Image' />
                  <h5>HTML</h5>
                </div>
                  <div className='item'>
                  <img src={bootstrapIcon} alt='Image' />
                  <h5>Bootstrap</h5>
                </div>
                  <div className='item'>
                  <img src={mysqlIcon} alt='Image' />
                  <h5>MySQL</h5>
                </div>
                  <div className='item'>
                  <img src={mongodbIcon} alt='Image' />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
