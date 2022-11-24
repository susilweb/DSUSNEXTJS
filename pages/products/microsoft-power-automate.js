import Head from 'next/head'
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const PowerAutomate = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Power Automate | Workflow Automation Tool</title>
        <meta
          name="description"
          content="Power Automate offers the ability to easily create workflows directly in your applications with a no-code approach that connects to hundreds of popular"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-power-automate/"
        />
        <meta name="robots" content="noindex,nofollow" />
        
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
                Microsoft Power Automate
              </h1>
              <p>
                Automate processes and increase productivity with Power
                Automate. No coding Required.
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
                src="/img/power-automate-banner.svg"
                alt="power-automate-banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>What is Power Automate?</h2>
            <p>
              Power Automate offers the ability to easily create workflows
              directly in your applications with a no-code approach that
              connects to hundreds of popular applications and services on the
              market. Sync files, get notifications, collect data, and much
              more.
            </p>
          </header>
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
                            src="/img/icons-power-automate_Quick-and-Secure.svg"
                            alt="icons-power-automate_Quick-and-Secure"
                          />
                        </div>
                        <span>Quick and Secure</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Creating automated systems through Power Automate is not
                        just quick and easy but also quite secure. The platform
                        comes loaded with features such as drag and drop,
                        prebuilt connectors, and low code to create repetitive
                        activities in automated flows that are also very easy.
                        Most importantly, all the automated tasks are kept
                        secure within your Microsoft cloud and you do not have
                        to worry about any data getting leaked or stolen.
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
                            src="/img/icons-power-automate_Enhanced-Efficiency.svg"
                            alt="icons-power-automate_Enhanced-Efficiency"
                          />
                        </div>
                        <span>Enhanced Efficiency</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        While the platform helps in creating automated flows, it
                        also allows you to record the processes from start to
                        end. You can visualize the recording process and analyze
                        the flow and understand it will actually happen. This
                        way, you can check out in advance how the flow is going
                        to work and look before you actually finalize a
                        particular automated flow. Thus, no more guesswork as
                        you can be pretty sure about the automated flow process
                        that you are finalizing for your data or system.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="acccm">
                <hr className="mob-disp" />
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
                            src="/img/icons-power-automate_AI-Support.svg"
                            alt="icons-power-automate_AI-Support"
                          />
                        </div>
                        <span>AI Support</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        Another great thing about Power Automate is that it is
                        supported by an AI system. The Artificial Intelligence
                        system does not just make the working of the system
                        interesting and easy but also quite helpful for the
                        users. It is due to AI technology that you will be able
                        to create new flows on the basis of models that are
                        existing already. The platform can detect texts and
                        images to help you in creating your flow or even help
                        you in analyzing data.
                        <br />
                        <br />
                        Another great thing about Power Automate is that it is
                        supported by an AI system. The Artificial Intelligence
                        system does not just make the working of the system
                        interesting and easy but also quite helpful for the
                        users. It is due to AI technology that you will be able
                        to create new flows on the basis of models that are
                        existing already. The platform can detect texts and
                        images to help you in creating your flow or even help
                        you in analyzing data.
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
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-automate_Highly-Compatible.svg"
                            alt="icons-power-automate_Highly-Compatible"
                          />
                        </div>
                        <span>Highly Compatible</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        Another great thing about this platform is that it is
                        highly compatible with different devices and platforms.
                        Whether you are using Power Automate for web on your
                        desktop or you are using it in the form of an
                        application on your smartphone, it will work the same
                        and will offer you the same features and functions.
                        Thus, you can get the right one based on your comfort
                        and requirement and start using it at your own
                        convenience.
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
              <h2>What are Power Automate Features</h2>
              <h3>
                Power Automate is available in four different versions from
                which you can select the right one depending upon your
                requirements.
              </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        For
                        <br />
                        Desktop
                      </h3>
                      <div className="overlay">
                        <p>
                          You can select Power Automate for desktop so that you
                          can work on your desktop from the comfort of your
                          office and create automated flows on Windows 11 OS.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        For
                        <br />
                        Mobile
                      </h3>
                      <div className="overlay">
                        <p>
                          With Power Automate for Mobile, you can complete the
                          task of creating automated flows on your mobile phone
                          itself from anywhere and at any time at your
                          convenience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        For
                        <br />
                        Web
                      </h3>
                      <div className="overlay">
                        <p>
                          Create your flows with the help of Power Automate for
                          the web. Just sign in to your account from any web
                          browser on any device. You can even save the created
                          flow and then check it later on from the device you
                          usually use the system.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        For
                        <br />
                        Microsoft Teams
                      </h3>
                      <div className="overlay">
                        <p>
                          The most innovative type of Power Automate for
                          Microsoft Teams. This allows the user to create flows
                          in the Microsoft cloud for the conversation of the
                          entire team who are a part of the Microsoft Teams. The
                          whole team can check out the flow and can work
                          accordingly.
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
                    src="/img/power automate-side.png"
                    className="fix-im"
                    alt="power automate-side"
                  />
                  
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        data-bs-toggle="modal"
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/img/Video Power-automate.png" alt="Power-automate" />
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
                <h2>Power Automate Services</h2>
                <p>
                  We offer a full range of services to support you on your
                  Dynamics journey including implementation, upgrade and
                  support.
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
                    Successfully implement Power Automate solutions by our
                    experts to ensure your needs are met on time and within
                    budget.
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
                    Get constant and seamless support from Dynamics Square team
                    to create and manage your work flows.
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
            <h2>Power Automate Pricing</h2>
            <p>
            Best for businesses that want predictable licensing with per user or per flow plans
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans</h3>
                <p>
                License by user
                </p>
                <span className="cs-colo">Per user plan</span>
                <div className="price">
                  <sup>$</sup>15<span>Per-User/Month</span>
                </div>
                <p className="small-tt">
                Allow individual users to automate cloud apps, services, and data with digital process automation (DPA). This plan allows users to create and run unlimited flows.
                </p>
                <ul>
                  <li>Cloud flows (DPA)</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans</h3>
                <p>
                License by user
                </p>
                <span className="cs-colo">Per user plan with attended RPA</span>
                <div className="price">
                  <sup>$</sup>40<span>Per-User/Month</span>
                </div>
                <p className="small-tt">
                Allow same capabilities as the base user plan, plus the ability to automate legacy apps on a desktop via robotic process automation (RPA) in attended mode.
                </p>
                <ul>
                  <li>Cloud flows (DPA)</li>
                  <li>Desktop flows (RPA) in attended mode</li>
                  <li>5,000 AI Builder credits/month</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans</h3>
                <p>
                License by flow
                </p>
                <span className="cs-colo">Per flow plan</span>
                <div className="price">
                  <sup>$</sup>100<span>Per Active User/App/Month minimum 5 flows(1,2)</span>
                </div>
                <p className="small-tt">Allow unlimited users within an organization to run digital process automation (DPA) from the same flow.</p>
                <ul>
                  <li>
                  Cloud flows (DPA)
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
                  <span>Get Power Apps Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-extra">
        <div className="container">
          <header className="section-header">
            <h2>
            Explore Our Recent Blogs & Resources
            </h2>
            <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
          </header>
          <div className="row top-2 gx-5 justify-content-center">
            {/* <Blog /> */}
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Important Power BI Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a href="/what-is-power-bi/">
                      <i className="bi bi-box-arrow-up-right"></i>What is Power
                      BI?
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://www.youtube.com/watch?v=Evkj4zfpk0Q"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Free Power BI
                      Webinar
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel=""
                      href="https://docs.microsoft.com/en-us/power-bi/consumer/end-user-license"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Licensing Guide
                    </a>
                  </li>
                  <li>
                    <a href="/power-bi-architecture/">
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Architecture
                    </a>
                  </li>
                  <li>
                    <a href="/power-bi-reports/">
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Reports
                    </a>
                  </li>
                  <li>
                    <a href="/implement-power-bi-for-your-business/">
                      <i className="bi bi-box-arrow-up-right"></i>Why Your
                      Business Should Implement Power BI?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerAutomate;