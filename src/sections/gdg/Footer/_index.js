import React from "react"
import Link  from "next/link"
import logo from "../../../assets/image/logo/logo-white.png"
import Map from "../../../assets/image/landing-8/map.png"
export default function FooterSection({ ...rest }) {
  return (
    <>
      {/* Footer Area */}
      <div>
        {/* Footer Main */}
        <footer className="footer-area-8 bg-primary pt-5 mt-5">
          <div className="container">
            <div className="row footer-quick-link-area justify-content-lg-center">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-area-8-list-item">
                  <h4>ABOUT</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/about">Our Team</Link>
                    </li>
                    <li>
                      <Link to="/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/">Team</Link>
                    </li>
                    <li>
                      <Link to="/">Privacy Policy </Link>
                    </li>
                    <li>
                      <Link to="/">Terms of Use</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer-area-8-list-item">
                  <h4>Collaborators</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/parters">Parners</Link>
                    </li>
                    <li>
                      <Link to="/">Sponsorship</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                <div className="footer-area-8-list-item">
                  <h4>HELP CENTER</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">Contact us</Link>
                    </li>
                    <li>
                      <Link to="/">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-7">
                <div className="footer-area-8-list-item">
                  <div className="subscribe-newsletter">
                    <h4 className="text-white">Subscribe to our newsletter</h4>
                    <p>
                      We will send you our daily updates for business growth
                    </p>
                    <form action="#" className="d-flex">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                      />
                      <button className="btn">
                        <i className="fas fa-location-arrow" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copy-right-area-8 bg-primary text-md-start text-center">
          <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
              <div className="col-md-7 col-sm-12">
                <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="copy-right-text">
                    <p className="mb-0">© 2021 GDG MienTrung, All Rights Reserved</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <div className="social-link d-flex align-items-center">
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
          </div>
        </div>

        <div className="copy-right-area-l3 text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-3-border" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="copy-right-text">
                  <p className="text-lynch mb-0">
                    Copyright 2020, All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
