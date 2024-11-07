import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/driver.jpeg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            {/* <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-200 h-200 rounded-4" />
              </div>
            </Col> */}

            <Col lg="16" md="10" sm="12">
              <div className="about__page-content">
                <h2 className="section_title">
                  Our Vision
                </h2>

                <p className="section_description">
                From the very day it was established, Helmic Car Rental has a clear vision: that of
continuously developing this company into a premier one-stop car rental service
boasting international standards.
                </p>
               
                <p className="section_description">
                Because of this devote commitment, the
company is now able to offer useful advice on strategic vehicle planning to best
suit the exacting requirements of many different types of company.
                </p>
                </div>
                </Col>
                <Col lg="16" md="16" sm="12">
              <div className="about__page-content">
                <h2 className="section_title">
                  Our Mission
                </h2>

                <p className="section_description">
               - To continuously increase quality and standards of services. <br /> 
 - To increase the number of branches so as to be able to offer nationwide cover. <br /> 
- To develop state-of-the-art technology so as to meet customer demands quickly and conveniently. <br />
- To organise continuous staff training program so that the company can maintain high quality standards of service and offer excellent management.
                </p>
              </div>
                </Col>
           
           </Row>
           
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title1">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;