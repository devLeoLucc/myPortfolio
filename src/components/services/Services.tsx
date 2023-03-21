import { Container, Row, Col } from "reactstrap"

import './services.css'

const servicesData = [
  {
    icon: 'ri-code-s-slash-line',
    title: 'Web Development',
    desc: 'Using my front-end skills, I will be able to build several Web Applications for you.'
  },

  {
    icon: 'ri-qr-code-line',
    title: 'App Development',
    desc: 'Using ReactJS and React libraries, I will be able to build robust applications for your company.'
  },

  {
    icon: 'ri-search-line',
    title: 'SEO',
    desc: 'Using my HTML5 notions, I will be able to put your business in a favorable position for Google search engines'
  },
]

export function Services() {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg='12' className="services__top mb-5">
            <h6>Features</h6>
            <h2>What services I provide</h2>
          </Col>

          {servicesData.map((item, index) => {
            return (
              <Col lg='4' md='6' sm='6' key={index} className="mb-4">
                <div className="single__service">
                  <span className="service__icon">
                    <i className={item.icon}></i>
                  </span>
    
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </Col>
            )
          })}

          
        </Row>
      </Container>
    </section>
  )
}