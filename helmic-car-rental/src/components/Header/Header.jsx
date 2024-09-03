import React, { useRef } from 'react'
import { Container, Row, Col } from "reactstrap"
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/all-images/logo2.png"

import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Booking",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/other",
    display: "Other Services",
  },
];






const Header = () => {

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return <header className="header">

    <div className="header_top">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='6' >
          <div className="header__top__left">
            <span>Need Help?</span>
              <span className="header__top__help">
              <i class="ri-phone-fill"></i>
              +255 744 050 000
              </span>
          </div>
          </Col>
          <Col lg='6' md='6' sm='6' >
          <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-fill"></i> Register
                </Link>
              </div>
          </Col>
        </Row>
      </Container>
      </div>

 {/* ========== middle header =========== */}

     <div className="header__middle">
     <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    {/* <i class="ri-car-fill"></i>  */}
                   
                    <img src={logo} alt="" className='flex' />
                    
                  </Link>
                
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-map-pin-fill"></i>
                </span>
                <div className="header__location-content">
                  <h4>Haile Selassie, Masaki</h4>
                  <h6>Dar es salaam , Tanzania</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-fill"></i>
                </span>
                <div className="header__location-content">
                  <h4>Monday to Friday</h4>
                  <h6>8am - 5pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-fill"></i> call us
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
     </div>
 {/* ========== main navigation =========== */}

 <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
   

  </header>
}

export default Header
