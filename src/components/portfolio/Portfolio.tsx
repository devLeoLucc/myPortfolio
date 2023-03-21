import { Container, Row, Col } from "reactstrap"

import img4 from '../../assets/img4.png'

import './portfolio.css'

const portfolioData = [
  {
    imgUrl: img4,
    title: 'NLW / Setup',
    url: '#'
  }
]

export function Portfolio() {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg='12' className="portfolio__top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          {portfolioData.map((item, index) => {
            return (
              <Col lg='4' md='6' sm='6' key={index}>
                <div className="portfolio__card">
                  <div className="portfolio__img">
                    <img src={item.imgUrl} alt="" className="w-100" />
                  </div>

                  <div className="portfolio__content">
                    <h5>{item.title}</h5>
                    <a href={item.url}>View live demo</a>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}