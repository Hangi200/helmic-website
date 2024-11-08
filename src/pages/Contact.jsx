import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/Helmictz/",
    icon: "ri-facebook-line",
  },
  {
    url: "https://www.instagram.com/helmic_group?igsh=NTdgd215ZmExdHpw",
    icon: "ri-instagram-line",
  },
  {
    url: "https://www.linkedin.com/in/nicholaus-koroso-9b9b38b9/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=tz",
    icon: "ri-linkedin-line",
  },
  {
    url: "https://x.com/helmic_?t=JEcvmGqsNLHfJJlhJyOqEA&S=09",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4 section_subtitle">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
            <h6 className="fw-bold section_subtitle">Contact Information</h6>
              <div className=" contact__info">
                <div  className=" d-flex align-items-center gap-2">
                <h6 className="fs-6 mb-0 section_subtitle">Location:</h6>
                <p className="section_description mb-0">
                 Haile Selassie Road, Sky Mall, Masaki Dar es salaam-Tanzania.
                </p>
                </div>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0 section_subtitle">Phone:</h6>
                  <p className="section_description mb-0 ">+255 752 500 508</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6 section_subtitle">Email:</h6>
                  <p className="section_description mb-0">info@helmicgoup.com</p>
                </div>

                <h6 className="fw-bold mt-4 section_subtitle">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;