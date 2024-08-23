import React from 'react'

import { Container, Row, Col } from "reactstrap"


const Header = () => {
  return <header className="header">

    <div className="header_top">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6' >
          <div className="header_top_left">
            <span>Need Help?</span>
              <span className="header_top_help">
              <i class="ri-phone-fill"></i>
              </span>
          </div>
          </Col>
          <Col lg='6' md='6' sm='6' >
          </Col>
        </Row>
      </Container>
    </div>

  </header>
}

export default Header
