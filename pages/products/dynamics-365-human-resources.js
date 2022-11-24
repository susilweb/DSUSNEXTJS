import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
const HumanResource = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 Human Resources - Optimize HR Programs</title>
        <meta
          name="description"
          content="Dynamics 365 Human Resources: helps to hire the right talent, onboard the right resources, and retain the dedicated people in your organization to impact your organizational growth and scalability." />
          <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/dynamics-365-human-resources/"
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
                Dynamics 365
                Human Resources
              </h1>
              <p>
              Maximize Your Resource Utilization To Improve Efficiency With Dynamics 365 Human Resource
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Request a Callback</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/img/Human-Resource-banner.png" alt="Human-Resource-banner" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        <div className="row justify-content-center"> 
        <div className="col-lg-8 col-md-8"> 
        <header className="section-header"> 
        <h2> What is Dynamics 365 Human Resources?</h2> 
<p>Microsoft Dynamics 365 Human Resource is referred to as the high-end solution that helps to improve your workforce capability so that they can onboard the right people with the right skill set, retain their existing talent, and can provide a better workplace wherein everyone can ensure their dedicated and productive efforts. Microsoft's Human Resource solution (Formerly known as Microsoft Dynamics 365 Talent) is a modernized way to manage and drive human resourcing practices seamlessly and effectively.</p> 
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
                            src="/img/icons-_Highly-Flexible-Solution.svg"
                            alt="icons"
                          />
                        </div>
                        <span>High-End Flexibility</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Dynamics 365 Human Resource is a highly flexible HRM solution that helps to manage your end-to-end practices. Further, it can be integrated seamlessly whether with your existing system or Microsoft applications.
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
                            src="/img/icons-_Connected-HR-Practices.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Connected HRM</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Enable connected human resourcing and recruitment practices to drive a transparent and parallel approach across your HRM practices from onboarding to compensation management, leaves & compliances management, payroll & employee performance management to training, and more.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
              <hr className="mob-disp" />
                <div className="accordion" id="accnew">
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
                            src="/img/icons-_Actionable-Insights.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Actionable Insights</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      With AI-insights and depth analytics, strengthen your HR persons to make proactive decisions in terms of monitoring workforce performance to support appraisal process, manage regulatory compliances, and more to maximize employee productivity as well as to support the overall organizational growth at scale.
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
            <div className="col-lg-5 align-self-center">
            <div className="wy-sultion-left-head">
              
            <h2>Microsoft Dynamics 365 Human Resources Features</h2>
              <h3>
              Optimize your workforce, maximize resource utilization, and drive an agile approach across your organization.</h3>
              <p>By <a href="/products/dynamics-365-human-resources/">implementing Dynamics 365 Human Resources</a>, enterprises can engage & onboard the right talent and can build a productive workspace by effectively utilizing AI insights.</p>
            </div>
              
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Improve Employee <br /> Experience
                      </h3>
                      <div className="overlay">
                        <p>
                        Strengthen your HRM by providing the right set of tools to support day-to-day HR practices. With D365 HRM solution, streamline your employee data, drive employee engagement and allow your workforce with self-servicing to boost employees' overall workspace experience.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Smoothen HR
                        <br />
                        Practices
                      </h3>
                      <div className="overlay">
                        <p>
                        With the help of AI, enterprises can boost their employees' productivity, implement required changes, and adapt the required process flow for smoother HR practices. 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Boost
                        <br />
                        Agility
                      </h3>
                      <div className="overlay">
                        <p>
                        <a href="/products/dynamics-365-human-resources/">D365 Human Resource</a>{" "} is designed and offered with the flexibility to be integrated with any partner solutions to introduce or maximize agility in your organization, automate your HR data, streamline your end-to-end HRM practices while ensuring data security and compliance.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Gain Workforce
                        <br />
                        Insights
                      </h3>
                      <div className="overlay">
                        <p>
                        Enterprises can centralize their HRM data, monitor employees' activities, and can improve their overall workplace experience with the help of real-time AI insights, key reporting capabilities, and more.</p>
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
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/img/human-resource side.png"
                    className="fix-im"
                    alt="Dynamics 365 Human Resources Service"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/img/Video-Human Resource.png" alt="Video-Human-Resource" />
                        <span className="cente-icns">
                          <img
                            src="/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Dynamics 365 Human Resources Services</h2>
                <p>
                Manage your workforce, maximize resource utilization, bring organizational agility, engage and onboard the right talent, leverage valuable AI insights to craft a better workspace with Dynamics 365 Human Resources.
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
                  Improve and accelerate your human resource processes by implementing Dynamics 365 Human Resources.
                  </p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                      Get Implemented
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
                  Configure your system with advanced human resource capabilities to upgrade your resource optimization.
                  </p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                      Get Upgrade Solutions
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
                  Keep optimizing your resources and drive a smoother flow in your organization with our Dynamics 365 support services.
                  </p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">
                      Get Support Now
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
                <h3>Maximize Your Business Potential</h3>
                <p>
                  Drive new business challenges by implementing Dynamics 365
                  Human Resources
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <a href="#about" className="btn-get-started scrollto">
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
            <h2>Dynamics 365 Human Resources pricing</h2>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Human Resources
                </h3>
                <div className="price">
                  <sup>$</sup>120<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Includes full application capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Human Resources Self-Service
                </h3>
                <div className="price">
                  <sup>$</sup>4<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Employee and manager self-service capabilities
                  </li>
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
                  <span>Request a demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HumanResource;
