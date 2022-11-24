import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
const FieldService = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Field Service | Dynamics Square</title>
        <meta
          name="description"
          content="Streamline Your Field Operations and Optimize Your Resources By Leveraging Our Unique Microsoft Dynamics 365 Field service Plans."
        />
           <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-365-field-service/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                <br />
                Field Service
              </h1>
              <p>
              Connect Your Resources, Automate Your Processes, and Optimize Your Workflow with Dynamics 365 Field Service
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
                src="/img/FieldServicebanner.png"
                alt="Dynamics 365 Customer Service"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
            <header className="section-header">
            <h2>
              What is dynamics 365
              <br />
              Field Service?
            </h2>
            <p>
            Connect, engage, and serve your customers in real-time with Dynamics 365 Field Service. Ensure resource collaboration, optimize your resources, monitor service operations, and bring transparency in your overall commerce practices to drive continuous and maximized growth.
            </p>
          </header>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
            <header className="section-header">
            <h2>
            Boost Your Field Service Performance With Dynamics 365 Field Service
            </h2>
            <p>
            Accelerate your field service operational flow, enable team collaboration, and improve your customer experience. Maximize your field-service capability by empowering your field service executives with real-time data insights and customer information so that they can make productive decisions in real-time to ensure continuity in their process flow.
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
                            src="/img/icons_customer-resolution.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Real-time Customer Service</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Diagnose your customer requirements and proactively serve them at their location. With the help of D365 Field Service, your field executives can complete maximum service calls and fix them accordingly.
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
                            src="/img/icons_resource-scheduling.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Manage Resource Scheduling</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Drive customer-centric approach wherein schedule customer-convenient visits. Assign the right task to the right-field technician as well as enable them with real-time updates, schedule changes, and more.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
              <hr className="mob-disp" />
                <div className="accordion" id="accnews">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#cns3"
                        aria-expanded="false"
                        aria-controls="cns3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_seamless-integration.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Integration Opportunity</span>
                      </button>
                    </h3>
                    <div
                      id="cns3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      To satisfy and fulfill your customized business flow, Microsoft Field Service Management Software can be integrated with any Microsoft application to maximize your business capabilities.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#cns4"
                        aria-expanded="false"
                        aria-controls="cns4"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons_real-time-insight.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Real-Time Data Access</span>
                      </button>
                    </h3>
                    <div
                      id="cns4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      Drive a transparent approach wherein facilitate your field persons to access customer issues, schedules, routes, and more. Update your customers with the status of the service calls in real-time.
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
              <h2>Microsoft Dynamics 365 Field Service Features</h2>
              <h3>
              How D365 Field Service Helps to Accelerate Your Overall Field Service Flow ?
              </h3>
              </div>
              <div className="m-o-t m-o-t-b">
                {/* <a href="#about" className="btn-get-started scrollto">
                  <span>Know More</span>
                </a> */}
              </div>
              {/* <div className="downlad_guid">
                        <a href="#">
                        <span>Download Microsoft Guide</span>
                        </a>
                     </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Create <br />
                        Work Orders
                      </h3>
                      <div className="overlay">
                        <p>
                        Seamlessly create work orders at customer locations. Enable your field people to identify their issues and fix diagnosed issues with the help of real-time customer data updates.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Automate <br />
                        Resource Scheduling
                      </h3>
                      <div className="overlay">
                        <p>
                        Effectively manage your resources, automate resource utilization, and ensure customer fulfillment with Microsoft's Field Service Management Solution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Drive Connected <br />
                        Field Service
                      </h3>
                      <div className="overlay">
                        <p>
                        Bring collaboration among your technicians, customers, and stakeholders to ensure serving improved level of customer service and support instantly.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Real-Time Reporting
                        <br /> & Analytics
                      </h3>
                      <div className="overlay">
                        <p>
                        Leverage AI-based insights and customer analytics in real-time to ensure accessing & managing work orders, scheduling customer visits, and ensuring reliable customer engagement.
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
                    src="/img/Fieldserviceside banner2.png"
                    className="fix-im"
                    alt="Dynamics 365 Field Service"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/img/Video-Field-Service.png"
                          alt="Fieldservideo"
                        />
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
                <h2>Dynamics 365 Field Service</h2>
                <p>
                  Drive connected and seamless field experience to impact
                  overall growth rate and scalability.
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
                  Strengthen your field service executives and their capabilities by implementing Dynamics 365 Field Service.
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
                  Bring continuity in your Field Service practices and drive effective growth with high-end <a href="/our-services/dynamics-365-support-services">support services</a> .
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
                  Boost your process flow and start driving scalable results with Dynamics 365 Field Service upgrade.
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
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Field Service Pricing</h2>
            <p>
              Automate your financial operations, improve decision making, bring
              strategic impact on your finance, and minimize global financial
              complexities & risks with dynamics 365 finance.{" "}
            </p>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="box box-22">
                <h3>
                Dynamics 365 Field Service
                </h3>
                <div className="price">
                  <sup>$</sup>95<span>Per-User/Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Resolve service issues the first time, every time.
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
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Maximize your business potentials</h3>
                <p>
                  Drive new business challenges by implementing Dynamics 365
                  Field Service
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

      <section className="blogs-extra">
        <div className="container">
        <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
          </header>
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
                      href="/pdf/Remote-Service-Modernise-Your-Operations-with-Mixed-Reality.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Remote Service
                      Modernise Your Operations with Mixed Reality
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/Transform-your-field-service-with-IoT-AI-and-mixed-reality.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Transform Your
                      Field Service With IoT, AI, and Mixed Reality
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/Five-ways-to-know-if-connected-field-service-is-right-for-your-business.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Connected Field
                      Service is Right for Your Business?
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/5-innovative-ways-industry-leaders-modernize-their-field-service.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Innovative Ways
                      Industry Leaders Modernize Their Field Service
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/5-case-studies-from-manufacturing.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>5 Case Studies
                      From Manufacturing
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide-1-1.pdf"
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
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Field Service?
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
                      What are the standard features of Microsoft Field Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Microsoft Dynamics 365 Field Service is designed to manage
                      your end-to-end field service practices while saving time,
                      cost, and efforts. It helps to improve and deliver onsite
                      services to your customers to their locations. It empowers
                      your field executives to work collaboratively leveraging
                      onsite experience to fix customer issues in a seamless
                      manner.
                      <br />
                      <br />
                      <b>
                        Here are the features involved in Microsoft Field
                        Service:
                      </b>
                      <br />
                      <ul>
                        <li>
                          Create and manage work orders seamlessly at customers’
                          locations. By making effective use of scheduling and
                          dispatch tools, manage your resources and equipment to
                          improve your customer service, and optimize service
                          schedules.
                        </li>
                        <li>
                          Enhance communication and improve collaboration among
                          customer service agents, field technicians,
                          dispatchers, customers, and other stakeholders. Manage
                          schedule change and service work in real-time.
                        </li>
                        <li>
                          Manage your assets and enable preventive maintenance,
                          stay updated with customer history and service status.
                          Connect and engage them to deliver seamless field
                          service with real-time efficiency.
                        </li>
                        <li>
                          Seamlessly manage your stock levels, purchase order
                          fulfillment, and product returns. Generate customer
                          invoices, track resources, and more with Microsoft 365
                          Field Service Automation.
                        </li>
                        <li>
                          Develop key analytics and reports related to work
                          order management, customer interactions & engagement,
                          and other scheduling activities.
                        </li>
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
                      data-bs-target="#faq-content-2"
                    >
                      Is Dynamics 365 Field Service available on-premise?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Yes, Dynamics 365 Field Service is available for
                      on-premises installations. Users can enjoy both the cloud
                      and on-premises installations according to their specific
                      data-driven needs and data-privacy concerns.
                      <br />
                      <br />
                      To configure Microsoft Dynamics 365 Field Service
                      automation for your field workforce, contact Dynamics
                      Square. Our experts can help in implementing Dynamics 365
                      Field Service for your on-premises systems.
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
                      How do I install field services in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Field Service can be installed whether for
                      desktop browser, mobile, or tab devices. The installation
                      process can take up to 30 minutes.
                      <br />
                      <br />
                      All you need to go through your Microsoft 365 ‘Admin
                      Center’ then, select ‘Billing’, then click on ‘Purchase
                      Services’, and then Select Dynamics 365 Field Service to
                      buy your plan.
                      <br />
                      <br />
                      Once, your installation process gets completed, you will
                      see your apps will appear on your screen – ‘Field Service’
                      and ‘Field Service Mobile’.
                      <br />
                      <br />
                      now, configure and set up your app for your frontline
                      workers so as they can create, schedule, access, and
                      complete work orders when they are in the field.
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
                      How Field Service mobile app is beneficial for
                      enterprises?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Microsoft Field Service Management solution is designed to
                      ensure smart scheduling and resource management using
                      mobile devices while being in the field. Field Service
                      mobile app empowers field executives or technicians to
                      seamlessly access the information they need at customer
                      location so as they can effortlessly and quickly complete
                      the work orders.
                      <br />
                      <br />
                      D365 Field Service helps your workforce to effectively
                      communicate and collaborate with other co-workers and
                      connect, engage, and serve improved experiences to the
                      customers. Users can leverage this app to ensure work
                      smarter from work order fulfilment to resource scheduling,
                      seamless communication & collaboration to asset
                      management, preventive maintenance to inventory
                      management, and effortless billing to accurate analytics &
                      reporting.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      Can the Field Service Mobile app can be used even when not
                      connected to the internet?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Yes, users can use the Field Service app whether online or
                      offline as this app gets synchronized automatically
                      whenever the new things or data gets updated or uploaded.
                      Thus, if you are lacking with internet connection at any
                      place, you can simply tap the offline option. While
                      working offline, the information you use gets downloaded
                      to your device only.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      How much does it cost to implement a Dynamics 365 Field
                      Service module?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Users can buy the Field Service app at £71.60 per user/per
                      month applicable for First Dynamics 365 app. Further,
                      ‘Subsequent Qualifying Dynamics 365 App’, users are
                      required to pay £15.10 per user/per month.
                      <br />
                      <br /> To avail of more information for Microsoft Field
                      Service Management licensing, connect with the experts at
                      Dynamics Square.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                      What sort of key capabilities can be availed of after
                      implementing Dynamics 365 Field Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      D365 Field Service offers a multitude of key capabilities
                      to improve, automate, and streamline your field service
                      operations:
                      <br />
                      <br />
                      <ul>
                        <li>Work Orders</li>
                        <li>Scheduling &amp; Dispatch Tools</li>
                        <li>Communication Tools</li>
                        <li>Easy-to-use Mobile Application</li>
                        <li>Asset Management</li>
                        <li>Preventive Maintenance</li>
                        <li>Inventory, Purchasing, &amp; Return</li>
                        <li>Billing Management</li>
                        <li>Time Tracking</li>
                        <li>Analytics &amp; Reporting</li>
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

export default FieldService;
