import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/nosa.jpg";
import ava02 from "../../assets/all-images/linksoft.png";
import ava03 from "../../assets/all-images/gas.jpg";
import ava04 from "../../assets/all-images/maktech.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        SENIOR BOOKKEEPER ACCOUNTS PAYABLE
HEAD OFFICE
T: +27 10 226 4000 EXT: 6311
F: +27 86 504 6317
E: johan.venter@nosa.co.za
W: www.nosa.co.za

        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Nosa Company</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          
Link Soft Communications Systems (T)
Limited Regent Estate
P.O. Box 79982 Dar Es Salaam,
Tanzania. Tel: +255 22 2126803
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Link Soft</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          
G4S Security Service (T) Limited
Plot No.57 Uporoto Street, Ursino
Estate P.O. Box 5555 Dar Es Salaa,
Tanzania. Tel: +255 22 2761006
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Gas Group</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
Mbezi_Beach, Block H, Plot 2186 ,
P.O.BOX 76401,
Dar Es Salaam, Tanzania
Office: +255 22 261 7782
E-mail: ishekulamba@maktech.co.tz
www.maktech.co.tz

        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Maktech Company</h6>
            <p className="section__description">Client</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;