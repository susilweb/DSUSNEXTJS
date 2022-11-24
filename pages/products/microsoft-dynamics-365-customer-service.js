import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
const CustomerService = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>
          Microsoft Dynamics 365 Customer Service Partner - Dynamics Square
        </title>
        <meta
          name="description"
          content="Get any help of Microsoft Dynamics 365 Customer Service - US Leading Microsoft Partner Dynamics Square ready to help you 24X7 hours!"
        />
           <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-365-customer-service/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wVFZVajK2YI"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft Dynamics 365
                <br />
                Customer Service
              </h1>
              <p>
              Uplift Your Customer Experience And Strengthen Your Workforce Capability With Dynamics 365 Customer Service.
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
              <img
                src="/img/customer-service-banner.png"
                alt="Dynamics 365 Customer Service"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-9">
          <header className="section-header">
            <h2>
              What is dynamics 365
              <br />
              Customer Service?
            </h2>
            <p>
            Optimize services, serve personalized customer service, boost your workforce productivity, and make smarter decisions by implementing Dynamics 365 customer service capabilities. With Microsoft's customer service solution, it can be configured suited to specific customer management needs with the scope of integrating it with your existing apps or system configuration to bring and drive an efficient approach.
            </p>
          </header>
          </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5  align-self-center">
            <div className="wy-sultion-left-head">
            <h2>Dynamics 365 Customer Service Features</h2>
              <h3>Manage & Drive Efficient Customer-Driven Approach with Dynamics 365 Customer Service</h3>
              </div>
              {/* <div className="m-o-t m-o-t-b">
                <a href="#about" className="btn-get-started scrollto">
                  <span>Know More</span>
                </a>
              </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6 align-self-center">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Streamline <br />
                      Processes
                      </h3>
                      <div className="overlay">
                        <p>
                        With a Customer Service solution, uncover hidden potential to support and improve your process flow. Start driving simplified and streamlined practices to level up your customer experience.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Improved <br />
                        Visibility
                      </h3>
                      <div className="overlay">
                        <p>
                        Utilize AI insights and data analytics in terms of overall customer behavior including recent interactions, their requested requirements, and more to predict and serve accordingly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m align-self-center">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Data <br /> Intelligence
                      </h3>
                      <div className="overlay">
                        <p>
                        AI insights can help to dive deeply into your customer requirements and deliver them their specific solution. Leverage AI-powered virtual support, track and resolve your customer issues in real-time.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>Omnichannel <br /> Efficiency
                      </h3>
                      <div className="overlay">
                        <p>
                        With Dynamics 365 Customer Service Capabilities, serve customer-specific solutions when and wherever they are in need impacting and ensuring customer satisfaction for the long run.
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
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/img/customer-service-side-image.png"
                    className="fix-im"
                    alt="Dynamics 365 Customer Service"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        data-bs-toggle="modal"
                        // href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/img/video-Customer Service.png" />
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
                <h2>Dynamics 365 Customer Service</h2>
                <p>
                Enable personalized customer service with a 360-degree customer view.
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
                  Modernize your customer service and boost your customer experience by implementing Microsoft's Dynamics 365 Customer Service Capabilities.
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
                  Prepare your system to overcome business complexities and drive challenges through a Customer Service Automation upgrade.
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
                  Boost customer experience, drive customer retention, and ensure a sustainable customer relationship with seamless support services.
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
      {/* <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Customer Service Pricing</h2>
            <p>
              Dynamics 365 Customer Service Pricing is simple. Contact us to
              learn about cost effective licensing based on bundled Dynamics 365
              Customer Service Products for Commercial, Non-Profit or
              Educational Use.
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Customer Service
                  <br />
                  Professional
                </h3>
                <div className="price">
                  <sup>£</sup>52.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> Case management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Knowledge management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> SLAs
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Templates
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Unlimited number of users
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365 Customer Service
                  <br />
                  Essentials
                </h3>
                <div className="price">
                  <sup>£</sup>135.70<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i> All features of the
                    Professional set
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> All features of the
                    Professional set
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Case management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Unified service desk
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Embedded intelligence
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Context-driven
                    suggestions
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Service gamification
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Customization and
                    extensibility
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Portals
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i> Analytics and KPI
                    reporting
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
                  <span>Get Started Now</span>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Leverage Our Experts Consultation at Dynamics Square</h3>
                <p>
                To improve, drive, and impact your customer experience, connect with our experts to start leveraging growth potential and drive a scalable approach
                </p>
                <div className="text-center m-o-t new-btn-nn">
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
          </div>
        </div>
      </section>

      <section className="blogs-extra">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8">
        <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
          </header>
          </div>
          </div>
          <div className="row top-2 gx-5 justify-content-center">
            {/* <Blog /> */}
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/Microsoft-Dynamics-365-ROI-case-study.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Nucleus Research
                      Report - Dynamics 365 ROI Case Study
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/Five-ingredients-to-ignite-always-on-service.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Five Ingredients
                      to Ignite Always-On Service
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/How-technology-benefits-the-customer-experience.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>How Technology
                      Benefits The Customer Experience
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/CNTNT-ebook-2018-State-of-Global-Customer-Service.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>State of Global
                      Customer Service Report
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide-3.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Licensing Guide
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="blogs-extra-title">
                        <h4>Learn More</h4>
                     </div>
                     <div className="blogs-extra-right">
                        <ul>
                           <li><a href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Collections automation</a></li>
                           <li><a href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Vendor invoice automation</a></li>
                           <li><a href="#"><i className="bi bi-box-arrow-up-right"></i> Why to Upgrade Dynamics NAV to Business Central</a></li>
                           <li><a href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Asset leasing</a></li>
                        </ul>
                     </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8">
          <header className="section-header">
            <h2>
              Have you got questions
              <br />
               about Microsoft Dynamics Customer Service?
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          </div>
          </div>
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
                      What is Microsoft Dynamics Customer Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Microsoft Dynamics Customer Service is referred to as the high-end solution that helps to connect, engage, and drive potential customers as well as enables them to resolve their issues in real-time. This CRM Engagement solution by Microsoft helps to automate your customer data and enables you to serve them with omnichannel facilitation. Microsoft's <a href="/products/crm/">CRM solution</a>  is designed to automate customer service processes, streamline customer data, and serve them the timely solution they anticipate.</p>
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
                     What is Dynamics 365 Customer Service Insights?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    <a href="/products/microsoft-dynamics-365/">Dynamics 365</a> Customer Service insights help businesses to keep their eyes on every customer-related practice in real-time, track & monitor their customer behavior to respond and resolve accordingly. These AI-based customer service insights and other key customer data analytics enable and empower the support executive in your organization to leverage the actionable data to make informed decisions to support and satisfy your customer base and eventually maximize enterprise profitability.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      How do I install Dynamics 365 Customer Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>To install Dynamics 365 Customer Service, you are required to install it manually using your instance. Also, make sure to assign user roles before your users start using the newly installed and configured system.</p>
                      <p>Here are the steps to be followed while installing Dynamics 365 Customer Service:</p>
                      <ul>
                        <li>Administrators need to sign in <a href="/products/microsoft-power-platform/">Power Platform</a>{" "} Administration Center.</li>
                        <li>In the next step, drop-down the list of 'Resources' and then, select Dynamics 365 Apps.</li>
                        <li>Now, select and install 'Customer Service Team Member'.</li>
                        <li>After choosing the 'Customer Service Team Member' panel, the next step is to select an environment leveraging the list. </li>
                        <li>Select 'Terms of Service' and then click to 'install'.</li>
                        <li>Assign required user roles using the Customer Service App. </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                     What are the key features of Dynamics 365 Customer Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Dynamics 365 Customer Service is configured and facilitated with several key features to ensure a seamless customer service experience. Here is a glimpse of a few widely used yet vital features of Microsoft's Customers Service solution: </p>
                      <ul>
                        <li>Monitoring and controlling customer issues and ensuring case management.</li>
                        <li>Recording customer interactions addressing the particular or related case.</li> 
                        <li>Sharing required information using the knowledge database.</li>
                        <li>Creating queues and routing cases.</li>
                        <li>Creating and monitoring customer service levels.</li>
                        <li>Leveraging entitlements, defining applicable service terms.</li>
                        <li>Tracking performance utilizing reports and dashboards in real-time.</li>
                        <li>Creating, managing, and scheduling required customer services.</li>
                        <li>Participating in chats and other conversations.</li>
                        <li>Monitoring and managing conversations through all the channels configured.</li>
                        
                      </ul>
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

export default CustomerService;
