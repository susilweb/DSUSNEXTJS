import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
const Commerce = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Commerce Capabilities</title>
        <meta
          name="description"
          content="Drive agile and integrated experience in your eCommerce and retail store by Microsoft Dynamics 365 Commerce; a unified, intelligent platform."
        />
           <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-365-commerce/"
        />
        
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft Dynamics 365 Commerce
              </h1>
              <p><b>(Formerly Dynamics 365 Retail)</b></p>
              <p>
              Drive Agile And Integrated Experience In Your Commerce Practices With Microsoft Dynamics 365 Commerce

              </p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/img/commerce-banner.png" alt="commerce-banner" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
            <header className="section-header">
             <h2>
              What is Dynamics 365 
              Commerce?
            </h2>
            <p>
            Deliver personalized customer experience, boost your outcomes, maximize your employee productivity, and optimize your operational flow with efficient supply chain practices while minimizing costs and impacting the overall efficiency.
            </p>         
<p>Deliver a highly engaging and reliable experience to your customers with omnichannel efficiency. Allow your customers to enjoy cross channel experience wherein they can buy from anywhere using any device with no time restrictions. With Dynamics 365 Commerce, enterprises can gain customer loyalty and ensure long-lasting relationships with their customers.
</p>
          </header>
            </div>
          </div>
          
      
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-commerce_user-experience.svg"
                            alt="icons-commerce_user-experience"
                          />
                        </div>
                        <span>User Experience</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Boost your end-user experience with a highly integrated and advanced POS system, e-commerce storefront, and more to centralize data and processes from sales to inventory to order fulfillment, etc.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-commerce_back-office.svg"
                            alt="icons-commerce_back-office"
                          />
                        </div>
                        <span>Back Office</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Accelerate your back-office practices from effective supply chain to improved finance management, and efficient human resource practices to customer fulfillment by implementing Dynamics 365 Commerce.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
              <hr className="mob-disp" />
                <div className="accordion" id="news">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-commerce_ecommerce-platform.svg"
                            alt="icons-commerce_ecommerce-platform"
                          />
                        </div>
                        <span>E-commerce Platform</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#news"
                    >
                      <div className="accordion-body">
                      Seamlessly manage your content part, e-commerce storefront, digital assets, etc. with the help of a highly configured e-commerce system integrated with your existing system to drive profitable results.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-commerce_Commerce-Surround-Services.svg"
                            alt="icons-commerce_Commerce-Surround-Services"
                          />
                        </div>
                        <span>Commerce Surround Services</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#news"
                    >
                      <div className="accordion-body">
                      Secure and prevent your data from unauthorized access with the help of Dynamics 365 Fraud protection. Take advantage of real-time customer insights to roll out a centralized approach.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 m--t align-self-center">
            <div className="wy-sultion-left-head">
              <h2>Dynamics 365 Commerce Features</h2>
              <h3>
              Enlarge Your Commerce Capabilities with Dynamics 365 Commerce

                </h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Omnichannel
                        <br />
                        Experience
                      </h3>
                      <div className="overlay">
                        <p>
                        Enable your customers to enjoy their buying experience from placing an order to the delivery stage. For instance, buying from anywhere, at any time, using any device, etc. with flexible payments methods.

                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Interconnected
                        <br />
                        Practices
                      </h3>
                      <div className="overlay">
                        <p>
                        Connect your workforce, drive data automation, streamline practices, and uplift your productivity level by upgrading your system capabilities with Dynamics 365 Commerce Applications.

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Integrated Data
                        <br />
                        Experience
                      </h3>
                      <div className="overlay">
                        <p>
                        By taking advantage of built-in AI and ML concepts, enterprises can optimize their processes in real-time and can allow their workforce to make instant decisions to support the process flow.

                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      AI & Analytics                        <br />
                      Efficiency                      </h3>
                      <div className="overlay">
                        <p>
                        With the help of AI insights, data analytics, and key reporting capabilities, enterprises can make real-time decisions, bring a smoother continuous flow, and drive continuity in their processes.

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/img/Ecommerce side.png"
                    className="fix-im"
                    alt="Ecommerce side"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/img/video-Ecommerce.png"
                          alt="video-banner-commerce"
                        />
                        {/* <span className="cente-icns">
                          <img
                            src="/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="side-heading">
                <h2>
                  Dynamics 365 
                  Commerce Services
                </h2>
                <p>
                  Strategically Work Towards Fulfilling Your Commerce Services.
                </p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>
                    Drive unified, effective, and efficient commerce strategies
                    once you implement Dynamics 365 Commerce.
                  </p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>
                  Roll out your productive approach by upgrading your system capabilities with Dynamics 36 Commerce

                  </p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                  Improve your process flow and support continuity with our high-end <a href="/our-services/dynamics-365-upgrade-services/">Dynamics 365 upgrade</a> services.

                  </p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Connect & Share with Experts</h3>
                <p>
                If you are seeking to improve your commerce operating capabilities, let us explore
your scaling opportunities with Microsoft’s digital commerce solution.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Commerce pricing</h2>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Commerce
                </h3>
                <div className="price">
                  <sup>$</sup>180<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Includes core capabilities to manage omnichannel retail operations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                E-Commerce Add-In for Dynamics 365 Commerce
                </h3>
                <div className="price">
                  <sup>$</sup>4,000<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Includes e-commerce management for Dynamics 365 Commerce.
                  </li>
                  <li className="text-center"><i className="bi bi-check-lg"></i> Requires Dynamics 365 Commerce</li>
                </ul>
              </div>
            </div>
            

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <a
                  data-bs-toggle="modal"
                  href="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Get Started Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Dynamics 365 Commerce?
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is D365 Commerce?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      <a href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</a> is designed to monitor and manage your entire commerce practices from back-office operations to in-store to digital practices. This commerce solution allows you seamlessly optimize your process flow, help you to improve your workforce performance, maximize your customer engagement, and more while minimizing costs and manpower efforts. Enterprises can bring efficiency and transparency in their end-to-end processes to drive intended growth at scale.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      Which of the key options is a key feature of Dynamics 365 Commerce?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Dynamics 365 Commerce is a single integrated commerce solution to monitor, manage, and drive your entire operational flow. To drive a multi-solution approach, it can be configured seamlessly with your existing system as well as can be integrated with other than Microsoft applications to drive all your integrated applications simultaneously using a single unified interface. To know more about key features of Dynamics 365 commerce, connect with our experts today. Listening to your key processes, we will reveal all those features suited to your specific or customized flow.

                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commerce;
