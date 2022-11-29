import Head from 'next/head'
import FormFooterSubscriber from '../components/FormFooterSubscriber';
import Form from "../components/Form";
const ContactUs = () => {
    return (
      <>
        <Head>
          <title>Contact Dynamics Square | Book Free Consultation</title>
          <meta
            name="description"
            content="Contact Dynamics Square experts for Dynamics 365 CRM/ERP implementation, Support and Upgrade benefits. Book a free online consultation to know more."
          />
          <link
            rel="canonical"
            href="https://www.dynamicssquare.ca/contact-us/"
          />
        </Head>
        <main>
          <section className="Solution-banner hero-1 hero about-banner">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 justify-self-center">
                  <h1>Contact Us</h1>
                  <p>
                    Our Microsoft consultants are here to provide dedicated
                    support, training and consultancy
                  </p>
                </div>
                <div className="col-lg-6 align-self-center">
                  <img
                    src="/img/contact-us-pic.png"
                    alt="contact-us-pic"
                  />
                </div>
              </div>
            </div>
          </section>
  
          <section className="cont-into">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8">
                  <header className="section-header">
                    <h2>Book A Slot!</h2>
                    <p>
                      <b>
                        Have Questions About Microsoft Dynamics Products Or
                        Services?
                      </b>
                      <br />
                      Schedule a demo with our Microsoft Dynamics experts to
                      resolve all your queries.
                    </p>
                  </header>
                </div>
              </div>
  
              <div className="row neew-pd0 justify-content-center">
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="addre-left">
                        <p>
                        800 Steeles Ave. W. #B10155 Thornhill,
                          <br />
                          ON. L4J 7L23E2.
                        </p>
                        <a
                          href="https://goo.gl/maps/yMFbizQwMpLRkN3w6"
                          target="_blank"
                        >
                          Locate Us on Google
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="addre-rigt">
                        <div className="cont-info">
                          <i className="bi bi-telephone"></i>{" "}
                          <span>+1 289 807 2802</span>
                        </div>
                        <div className="cont-info">
                          <i className="bi bi-envelope"></i>{" "}
                          <span>
                            {" "}
                            <a href="mailto:info@dynamicssquare.com">
                              info@dynamicssquare.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="cont-ff">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-lg-10 col-md-10">
                  <div className="row g-0 extra-height">
                    <div className="col-md-6 col-lg-6">
                      <div className="main-form-wrper-common">
                        <Form />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <img
                        src="/img/contactfor-sede-img.jpg"
                        alt="contactfor-sede-img"
                        className="image-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="hero-bgs">
            <div className="container">
              <header className="section-header">
                <h2>Our offices around the world</h2>
              </header>
              <div className="row hero-bg-3">
                <div className="col-md-12">
                  <ul
                    className="nav nav-tabs justify-content-center contact-tbs"
                    id="myTab"
                    role="tablist"
                  >
                     <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="contact-tab-1"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-1"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Canada
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        {" "}
                        USA
                      </button>
                    </li>
  
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        UK
                      </button>
                    </li>
  
                   
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab-2"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-2"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Europe
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab-5"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-5"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Australia
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab-4"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-4"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Singapore
                      </button>
                    </li>
                   
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab-3"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-3"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        India
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="row justify-content-center">
                        <div className="col-lg-4">
                          <div className="cont-hh">
                            <h3>California</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              2372 Morse Ave, Ste. 310 Irvine, CA 92614
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+1 213 784 0845</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.com">
                                info@dynamicssquare.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="cont-hh">
                            <h3>Texas</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              10101 Southwest Freeway Houston, TX 77074
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+1 281 899 0865</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.com">
                                info@dynamicssquare.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row justify-content-center">
                        <div className="col-lg-4">
                          <div className="cont-hh">
                            <h3>London</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              Kemp House, 152-160 City Road, London, EC1V 2NX, U.K
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+44 207 193 2502</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.co.uk">
                                info@dynamicssquare.co.uk
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="cont-hh">
                            <h3>Manchester</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              International House 61 Mosley Street, Manchester, M2
                              3HZ, United Kingdom
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+44 747 927 3380</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.co.uk">
                                info@dynamicssquare.co.uk
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div
                      className="tab-pane fade show active"
                      id="contact-1"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="row justify-content-center">
                      <div className="col-lg-4">
                          <div className="cont-hh">
                            <h3>Ontario</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              800 Steeles Ave. W. #B10155 Thornhill, ON. L4J
                              7L23E2
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+1 289 807 2802</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.com">
                                info@dynamicssquare.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="cont-hh">
                            <h3>British Columbia</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              398-2416 Main St. Vancouver BC V5T 3E2
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+1 778 652 3656</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.com">
                                info@dynamicssquare.com
                              </a>
                            </div>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact-2"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="row justify-content-center">
                        <div className="col-lg-4">
                          <div className="cont-hh">
                            <h3>Netherlands</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              Utrechtseweg 341, 3818 EL Amersfoort, Netherlands
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+31 970 102 57044</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.co.uk">
                                info@dynamicssquare.co.uk
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact-3"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="row justify-content-center">
                        <div className="col-lg-4">
                          <div className="cont-hh">
                            <h3>India</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              1114, JMD Megapolis, Sector 48, Gurugram, Haryana
                              122018
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+91 123 456 7890</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.com">
                                info@dynamicssquare.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact-4"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="row justify-content-center">
                        <div className="col-lg-4">
                          <div className="cont-hh">
                            <h3>Singapore</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              #10-11, International Plaza, 10 Anson Rd, Singapore
                              079903
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+65 313 84108</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.co.uk">
                                info@dynamicssquare.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contact-5"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div className="row justify-content-center">
                        <div className="col-lg-3">
                          <div className="cont-hh">
                            <h3>Sydney</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              2/4A Meridian Place Bella Vista NSW 2153, Australia
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+61 2 8607 5117</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.com">
                                info@dynamicssquare.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="cont-hh">
                            <h3>Brisbane</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              Suite 105, 42 Manilla Street East Brisbane, QLD
                              4169, Australia
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+61 7 3506 2909</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.com">
                                info@dynamicssquare.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="cont-hh">
                            <h3>Melbourne</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              Suite 4847, 805/220 Collins Street Melbourne VIC
                              3000, Australia
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+61 3 8400 4784</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.com">
                                info@dynamicssquare.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="cont-hh">
                            <h3>Perth</h3>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="content-right">
                              Level 24, 77 St Georges Terrace, Perth, WA 6000,
                              Australia
                            </div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-telephone"></i>
                            </div>
                            <div className="content-right">+61 8 6219 8209</div>
                          </div>
                          <div className="contact-list">
                            <div className="icons-left">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <div className="content-right">
                              <a href="mailto:info@dynamicssquare.com">
                                info@dynamicssquare.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
  
        <footer id="footer" className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                  <a href="/" className="logo d-flex align-items-center">
                    <img
                      src="/img/dsuk-footer-logo.svg"
                      alt="dsuk-footer-logo"
                    />
                  </a>
                  <p>
                    Dynamics Square is US leading Microsoft Gold Certified Partner
                    that caters to the needs of orgnizations who can source
                    next-gen Microsoft Business Apps from our highly skilled
                    Microsoft consultants.
                  </p>
                  <img
                    src="/img/microsoft-partner.svg"
                    alt="microsoft-partner"
                    className="footer-img"
                  />
                  <img
                    src="/img/Tech-For-Socil-Impact.svg"
                    alt="Tech-For-Socil-Impact"
                    className="footer-img"
                  />
                </div>
                <div className="col-lg-2 col-12 footer-links">
                  <p>BUSINESS APPS</p>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/dynamics-365-business-central/">
                        Business Central
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-dynamics-365-finance/">
                        Finance
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/dynamics-365-supply-chain-management/">
                        Supply Chain
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-dynamics-365-sales/">
                        Sales
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-power-bi/">
                        Power BI
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-azure/">Azure IoT</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-dynamics-erp/">
                        ERP (NAV/GP/AX)
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/products/microsoft-dynamics-crm/">
                        CRM
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 col-12 footer-links">
                  <p>QUICK LINKS</p>
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/about-us/">About us</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/why-us/">Why Us</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/our-services/">Our Services</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/partner/">Our Partners</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/contact-us/">Contact Us</a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/blog/" rel="">
                        Blog
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <a href="/privacy-policy/">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-12 text-md-start">
                  <p>CONNECT WITH US</p>
  
                  <div className="social-links mt-3">
                    <a
                      target="_blank"
                      rel=""
                      href="https://twitter.com/dsquare_usa"
                      className="twitter"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.facebook.com/dynamicssquareusa"
                      className="facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/c/DynamicsSquare"
                      className="instagram"
                    >
                      <i className="bi bi-youtube"></i>
                    </a>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.linkedin.com/showcase/dynamics-square-usa/"
                      className="linkedin"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <br />
                  <div className="subbb">
                    <p>Subscribe Newsletter</p>
                    <span>
                      Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                      Offers And Much More!
                    </span>
                    <FormFooterSubscriber />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              &copy; Copyright &nbsp;<span>2022 Dynamics Square.</span>
              <div className="footer-extra-link">
                <a href="/terms-of-use/">Terms of Use </a>
                <a href="/cookie-policy/">| Cookie </a>
                <a href="/sitemap.xml">| Sitemap</a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
  
  export default ContactUs;
  
