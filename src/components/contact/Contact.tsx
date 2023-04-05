import { Container, Row, Col } from 'reactstrap'

import { ContactForm } from './form/ContactForm'

import './contact.css'

export function Contact() {
  return (
    <section id='contact'>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h2>Get in Touch</h2>
          </Col>

          <Col lg='4' md='4'>
            <div className="contact__info-container d-flex align-items-left flex-column ">
              <div className="single__info-box w-60">
                <h6>Country/Region</h6>
                <p>Brazil, South America</p>
              </div>
              
              <div className="single__info-box w-60">
                <h6>Phone</h6>
                <p>+55 12 97812 3125</p>
              </div>
            </div>

            <div className="contact__info-container d-flex align-items-left flex-column ">
              <div className="single__info-box w-60">
                <h6>Email</h6>
                <p>devLeonardoLucchesi@gmail.com</p>
              </div>

              <div className="single__info-box w-60">
                <h6>Location</h6>
                <p>São José dos Campos - São Paulo</p>
              </div>
            </div>
          </Col>

          <Col lg='8' md='8'>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  )
}