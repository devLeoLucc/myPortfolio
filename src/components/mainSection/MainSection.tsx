import { Container, Row, Col } from 'reactstrap'
import Typewriter from 'typewriter-effect'

import './mainSection.css'

import AvatarImg from '../../assets/avatar.png'

export function MainSection() {

  return (
    <section className='main__section' id='home'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="main__content">
              <p className='mb-3'>Welcome to my Portfolio</p>
              <h2 className='main__title mb-4'>
                I'm 
                <span>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true
                    }}
                  
                    onInit={(Typewriter) => {
                      Typewriter

                      .typeString('Leonardo Lucchesi')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Web Developer")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Front-End Developer")
                      .pauseFor(1000)
                      .start()
                    }}
                  />
                </span>
              </h2>
              <p>I'm a professional and student in the field of development. I'm looking for new opportunities to give all the knowledge I have to offer. If you need a professional who fits in my specifications, so I think we can work together. Let's talk?</p>

              <div className='mt-5 main__btns d-flex align-items-center gap-4'>
                <button disabled className='btn hire__btn'>
                  <a href="#">Hire Me</a>
                </button>

                <button className="btn"><a href="#contact">Contact</a></button>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="main__img">
              <img src={AvatarImg} alt="" className='w-100' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}