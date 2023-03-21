import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Skills } from './skills/Skills'
import { Award } from './award/Award'

import aboutImg from '../../assets/avatar.png'

import './about.css'

export function About() {

  const [aboutFilter, setAboutFilter] = useState('ABOUT')

  return (
    <section id='about'>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h2>About Me</h2>
          </Col>

          <Col lg='4' md='3'>
            <div className="about__btns d-flex flex-column align-items-center">
              <button
                className={`about__btn ${aboutFilter == 'ABOUT' ? 'about__btn-active' : ''}`}
                onClick={() => setAboutFilter('ABOUT')}
              >
                About Me
              </button>

              <button
                className={`about__btn ${aboutFilter == 'SKILLS' ? 'about__btn-active' : ''}`}
                onClick={() => setAboutFilter('SKILLS')}
              >
                Skills
              </button>

              <button
                className={`about__btn ${aboutFilter == 'AWARD' ? 'about__btn-active' : ''}`}
                onClick={() => setAboutFilter('AWARD')}
              >
                Award
              </button>
            </div>
          </Col>

          <Col lg='8' md='9'>
            
            {
              aboutFilter == 'ABOUT' && <div className="about__content__wrapper d-flex gap-5">
                <div className="about__img">
                  <img src={aboutImg} alt="" className='w-100' />
                </div>

                <div className="about__content">
                  <h2>I'm Leonardo Lucchesi</h2>
                  <p>I am a technology enthusiast and I am passionate about innovation. I'm always looking for a new content that will be productive for me. Currently, my goal is to improve my work and consolidate my knowledge as a Front-end Developer.</p>
                
                  <div className="social__links">
                    <h6 className='mb-3'>Connect with me:</h6>
                    <span><a target='_blank' href="https://github.com/devLeoLucc"><i className="ri-github-line"></i></a></span>
                    <span><a target='_blank' href="#"><i className="ri-instagram-line"></i></a></span>
                    <span><a target='_blank' href="https://wa.me/5512981564561"><i className="ri-whatsapp-line"></i></a></span>
                    <span><a target='_blank' href="https://www.linkedin.com/in/leonardo-lucchesi-366908220/"><i className="ri-linkedin-line"></i></a></span>
                  </div>
                </div>
              </div>
            }

            {aboutFilter == 'SKILLS' && <Skills />}

            {aboutFilter == 'AWARD' && <Award />}

          </Col>
        </Row>
      </Container>
    </section>
  )
}