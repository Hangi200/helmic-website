import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/nosa.jpg";
import ava02 from "../../assets/all-images/maktech.png";
// import ava03 from "../../assets/all-images/linksoft.jpg";
import ava04 from "../../assets/all-images/Nokia-Logo1.png";
import ava05 from "../../assets/all-images/tigo.png";
import ava06 from "../../assets/all-images/gas1.jpg";
import ava07 from "../../assets/all-images/bam-logo.png";
import ava08 from "../../assets/all-images/jarlso.png";
const OUR__MEMBERS = [
  {
    name: "Nosa Company",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Maktech Company",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  // {
  //   name: "Linksoft Company",
  //   experience: "5 years of experience",
  //   fbUrl: "#",
  //   instUrl: "#",
  //   twitUrl: "#",
  //   linkedinUrl: "#",
  //   imgUrl: ava03,
  // },

  {
    name: "Nokia Company",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },
  {
    name: "Tigo Company",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava05,
  },
  {
    name: "group 4 Securicor Company",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava06,
  },
  {
    name: "Bam group Company",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava07,
  },
  {
    name: "Bam group Company",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava08,
  },
  
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-3">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className=" mb-0 mt-3">{item.name}</h6>
            <p className="section__description">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;