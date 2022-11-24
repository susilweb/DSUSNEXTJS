import Head from 'next/head'
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const PowerVirtualAgents = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>
        What is Microsoft Power Virtual Agents? | Intelligent Bots
        </title>
        <meta
          name="description"
          content="Power Virtual Agents is a tool to build powerful chatbots without the need to write code, and that allows you to automate communication with potential clients or employees."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-power-virtual-agents/"
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
                Microsoft
                <br />
                Power Virtual Agents
              </h1>
              <p>
                Enhance customer experience and boost sales using AI enabled
                chatbots built with Power Virtual Agents.
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
                src="/img/virtual-agent-banner-01.svg"
                alt="virtual-agent-banner-01"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>What is Power Virtual Agents?</h2>
            <p>
              Power Virtual Agents is a tool to build powerful chatbots without
              the need to write code, and that allows you to automate
              communication with potential clients or employees. The goal is to
              easily create and maintain virtual agents without programming,
              using a guided graphical interface without the need for data
              analysts or developers.
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
                            src="/img/icons-power-apps_Quick-and-Easy.svg"
                            alt="icons-power-apps_Quick-and-Easy"
                          />
                        </div>
                        <span>Easy Chatbot Creation</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        The very first feature of the platform is no doubt the
                        easy-to-use graphical interface that helps in creating
                        chatbots in a super comfortable and easy way. The
                        creator does not have to be any developer, data
                        scientist, or AI expert.
                        <br />
                        <br />
                        The platform offers a plethora of tools and functions
                        that help the user in understanding how to do what in
                        creating the chatbot that is required for the purposes
                        that the organization has.
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
                            src="/img/icons-power-apps_App-Development.svg"
                            alt="icons-power-apps_App-Development"
                          />
                        </div>
                        <span>Instant Actions</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Not only creating the chatbots is easy, taking action
                        with the chatbots is equally convenient. Once the
                        chatbot is ready, you can instantly integrate it into
                        the service or product that you have targeted earlier.
                        <br />
                        <br />
                        It also allows you to check records of conversations
                        that have already taken place for taking references.
                        Also, the tool allows you to integrate functions such as
                        handing over the chat conversation to some live agents
                        in case of extreme necessity or also to call up the
                        APIs.
                        <br />
                        <br />
                        You can also integrate other tools along with Virtual
                        Agents to get a better result such as integrating Power
                        Automate to create automated workflows. Similarly, you
                        can integrate Microsoft Bot Framework to handle complex
                        situations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="acccm">
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
                            src="/img/icons-power-apps_Enhancing-Capabilities.svg"
                            alt="icons-power-apps_Enhancing-Capabilities"
                          />
                        </div>
                        <span>Smarter Bots</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        The platform does not just help you in coming up with
                        chatbots but also helps you in creating them in a much
                        smarter way. Thus it offers you suggestions about the
                        topics on which you can create chatbots. It helps you in
                        creating rich chats that are not just customized but are
                        available in natural language to convince the customers
                        and clients much better.
                        <br />
                        <br />
                        The tool makes use of insights that are data-driven as
                        well as are well-supported by AI technology. This
                        enhances the performance of the chatbots that are being
                        created with the use of the platform. Moreover, this
                        tool from Microsoft has come up to be one of the best
                        options to create chatbots that are not just helpful for
                        the organizations in saving time but also are created in
                        the most professional way to offer high-end results.
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
                            src="/img/icons-power-apps_Responsive-Design.svg"
                            alt="icons-power-apps_Responsive-Design"
                          />
                        </div>
                        <span>Easy to Start</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        Once you are convinced with the features and working of
                        the tool, you will surely wish to try out this wonder
                        option to create chatbots for your organization too.
                        <br />
                        <br />
                        The best thing is that if you are already using
                        Microsoft Office 365, you will already get this tool
                        integrated into it. The existence of power virtual
                        agents for office 365 is a great thing that will allow
                        the users to make use of the tool without the
                        requirement of downloading any extra tool on the
                        systems.
                        <br />
                        <br />
                        All you need to do is to search for Power Virtual Agents
                        in your Microsoft Office 365 applications and then you
                        can get started with it instantly. Take a dive into a
                        huge number of features and functions available and then
                        start trying out the functions to create your own
                        chatbots using the platform instantly.
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
              <h2>Why choose Power Virtual Agents?</h2>
              <h3>What are Power Virtual Agents Features</h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Easy
                        <br />
                        Integration
                      </h3>
                      <div className="overlay">
                        <p>
                          Easily register, create the bot and embed it on your
                          website with just a few clicks. There is no
                          infrastructure to maintain and no complex systems to
                          implement.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        No Coding
                        <br />
                        Required
                      </h3>
                      <div className="overlay">
                        <p>
                          Train your teams by allowing them to easily build bots
                          without the need for intermediaries, coding or
                          artificial intelligence expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Automate
                        <br />
                        Queries
                      </h3>
                      <div className="overlay">
                        <p>
                          Easily automate the most common common queries thanks
                          to the Power Virtual Agent chatbot.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Customer
                        <br />
                        Satisfaction
                      </h3>
                      <div className="overlay">
                        <p>
                          Improve customer satisfaction by enabling customers to
                          quickly self-help and resolve issues 24/7 using
                          personalized bot conversations.
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
                    src="/img/virtual-agent-side.png"
                    className="fix-im"
                    alt="virtual-agent-side"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/img/video-Virtual Agents.png"
                          alt="power-apps-video-banner"
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
                <h2>Power Virtual Agents Services</h2>
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
                    Successfully implement Power Virtual Agents solutions by our
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
                    to manage your Chat bot
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
            <h2>Power Virtual Agents Pricing</h2>
            <p>
              Explore Power Apps Plans, Costs, And Availability To Start Running
              Your Business Apps.
            </p>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Power Virtual Agents</h3>
                <div className="price">
                  <sup>$</sup>200<span>Per month for 2,000 sessions(2)</span>
                </div>
                <p className="small-tt">
                Run intelligent chatbots across websites and other channels.
                </p>
                <ul>
                  <li>Requires access to the Microsoft 365 admin center with global administrator or billing administrator roles.</li>
                </ul>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Sessions add-on</h3>
                <div className="price">
                  <sup>$</sup>100<span>Per month for 1,000 sessions(2)</span>
                </div>
                <p className="small-tt">Add additional sessions to your Power Virtual Agents plan.</p>
                <ul>
                  <li>
                  Requires a Power Virtual Agents license.
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

export default PowerVirtualAgents;