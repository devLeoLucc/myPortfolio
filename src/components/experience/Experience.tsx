import { Container, Row, Col } from "reactstrap"

import './experience.css'

const developmentExperienceDat = [
  {
    year: '2021 - 2022',
    title: 'Sr. Front-end Developer',
    desc: 'Web application development and robust application maintenance (HTML, CSS, JS, ReactJS)'
  },
]

export function Experience() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <h2>Experience</h2>
          </Col>

          <Col lg='6' md='6'>
            <div className="single__experience-container">

              {developmentExperienceDat.map((item, index) => {
                return (
                  <div className="single__experience" key={index}>
                    <span className="experience__icon">
                      <i className="ri-briefcase-line"></i>
                    </span>
                    <h6>{item.year}</h6>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                )
              })}

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}