import React from "react"
import { Link } from "gatsby"
import logo from "../../../assets/image/logo/logo-black.png"
export default function FooterSection({ ...rest }) {
  return (
    <>
      {/* Footer Area */}
      <footer className="footer-area-6">
        <div className="container">
          <div className="row footer-quick-link-area justify-content-lg-center">
            <div className="col-lg-3 col-md-4">
              <div className="footer-logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
                <div className="social-link">
                  <h4 className="text-lynch">Follow us on : </h4>
                  <ul className="list-unstyled d-flex flex-wrap">
                    <li>
                      <a href="https://www.facebook.com/Gdgmientrung/"
                      target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCq5gMCxrBmbNkeXCG37vCNQ"
                      target="_blank" rel="noreferrer">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/gdg-mientrung/about/"
                      target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer-area-list-item">
                <h4>Information</h4>
                <ul className="list-unstyled">
                    <li>
                      <Link to="/about">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/">About GDG</Link>
                    </li>
                    <li>
                    <Link to="/">Terms and Policy </Link>
                  </li>
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-4 col-sm-6">
              <div className="footer-area-list-item">
                <h4>Events</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.youtube.com/watch?v=oUHpYqGZQ10" target="_blank" rel="noreferrer">Vietnam Online Hackacthon 2020</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=o22Ug6bS-U0" target="_blank" rel="noreferrer">Devfest 2019 </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=0l8MfXd4GPg" target="_blank" rel="noreferrer">Devfest 2018 </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=bKqbil6CQY0" target="_blank" rel="noreferrer">Devfest 2017</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=dsv9ZPhxPl4" target="_blank" rel="noreferrer">Devfest 2016</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer-area-list-item">
                <h4>For Partners</h4>
                <ul className="list-unstyled">
                    <li>
                      <Link to="/partners">Partners</Link>
                    </li>
                    <li>
                      <Link to="/">Sponsors Kit</Link>
                    </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="footer-area-list-item">
                <h4>Get In Touch</h4>
                <div className="d-flex align-items-start contact-details-l4">
                    <div className="icon-box">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:mientrung@gdgvietnam.com">
                        mientrung@gdgvietnam.com
                      </a>
                    </div>
                </div>
                <div className="d-flex align-items-start contact-details-l4">
                    <div className="icon-box">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <a href="tel:+840906179145">0906179145 (Ms Vân)</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
