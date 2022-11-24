import Head from 'next/head'
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const PowerApps = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Microsoft Power Apps | Build Business Applications</title>
        <meta
          name="description"
          content="Build low-code applications, drive swiftness and modernize processes across your organization without compromising quality and speed with Microsoft Power Apps."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-power-apps/"
        />
     <meta name="robots" content="noindex,nofollow" />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Az1NOVaHexs"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft Power Apps
              </h1>
              <p>
                Build low-code applications, drive swiftness and modernize
                processes across your organization without compromising quality
                and speed with Microsoft Power Apps.
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
                src="/img/power-apps-banner-01.svg"
                alt="power-apps-banner-01"
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
            <h2>What are Power Apps?</h2>
            <p>
              Microsoft Power Apps enables you to build web and mobile apps with
              zero or minimal code. Power apps is a collection of connectors,
              services, and applications that helps the users in developing
              applications in a highly customized format. Power Apps is designed
              to help modern enterprises effortlessly develop and launch apps
              with the help of prebuilt templates, drag and drop facility, and
              instant deployment.
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
                            src="/img/icons-power-apps_Quick-and-Easy.svg"
                            alt="icons-power-apps_Quick-and-Easy"
                          />
                        </div>
                        <span>Quick and Easy</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Power Apps offers easy-to-use tools that allow your team
                        in developing the best applications in a much faster
                        way. There are several essential features and tools to
                        use such as prebuilt templates that help in developing
                        the right application in a much shorter time. The user
                        just can develop the required application by customizing
                        and offering some modifications to the already existing
                        templates.
                        <br />
                        <br />
                        The platform also enables the users to incorporate new
                        updates and improvements as and when they are needed in
                        the application ahead.
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
                        <span>Professional App Development</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Power Apps enable the employees to create applications
                        that are well featured with advanced functionalities to
                        offer a professional look to the applications.The
                        platform includes AI (Artificial Intelligence)
                        components that are pre-built-in order to offer features
                        and specifications to the applications that are high-end
                        so that they offer a professional look and experience.
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-power-apps_Enhancing-Capabilities.svg"
                            alt="icons-power-apps_Enhancing-Capabilities"
                          />
                        </div>
                        <span>Enhancing Capabilities</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Making use of the Power Apps Microsoft platform ensures
                        that you allow your employees the freedom to develop the
                        applications in the best possible way. There are several
                        functions and tools to allow the users to integrate
                        several features and specifications in the applications
                        to make them super professional. Apart from this, the
                        platform also enables the users to enhance the
                        capabilities of the applications from time to time.
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
                            src="/img/icons-power-apps_Responsive-Design.svg"
                            alt="icons-power-apps_Responsive-Design"
                          />
                        </div>
                        <span>Responsive Design</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        Power Apps ensure that the applications that are getting
                        developed are perfect for several platforms and devices.
                        It is due to the responsive design of the applications
                        attained that the applications designed on this platform
                        run well on any of the browsers and on devices such as
                        smartphones as well as tablets.
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
                            src="/img/icons-power-apps_Data.svg"
                            alt="icons-power-apps_Data"
                          />
                        </div>
                        <span>Data</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        The platforms enable the customized applications to make
                        use of the data already available on the platform for
                        analysis purposes. The applications can collect such
                        data from the platform and can use them for the results.
                        Apart from the data already existing on the platform,
                        the applications also are offered the capabilities to
                        extract data from external sources and use them to get
                        the desired result.
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
              <h2>What are Power Apps Features</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Enable everyone
                        <br />
                        to build apps
                      </h3>
                      <div className="overlay">
                        <p>
                          Everyone can build apps - from data analysts to
                          professional software developers. Bring more
                          efficiency and accuracy to solve business problems
                          with PowerApps pre-built templates, AI components that
                          require low code or minimal code.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Develop smart
                        <br />
                        applications
                      </h3>
                      <div className="overlay">
                        <p>
                          Leverage Power Apps canvas to begin your designing
                          journey from scratch to professional. Customize every
                          aspect of your app to optimize for specific tasks and
                          functions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Create modern apps
                        <br />
                        from your data
                      </h3>
                      <div className="overlay">
                        <p>
                          Automatically generate interactive, immersive, and
                          responsive business applications from your data model
                          that can run on any device. The drag-and-drop designer
                          enables your team to customize business entities and
                          tailor the user experience to specific roles.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Integrate and
                        <br /> extend your apps
                      </h3>
                      <div className="overlay">
                        <p>
                          Take advantage of more than 200+ connectors to
                          integrate data and systems you already use. Extend
                          Power Apps further as a professional developer with
                          custom connectors and logic.
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
                    src="/img/power apps-side.png"
                    className="fix-im"
                    alt="power apps-side"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btn">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/img/video-ower-apps.png" />
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
                <h2>Power Apps Service</h2>
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
                    Successfully implement PowerApps solutions by our experts to
                    ensure your needs are met on time and within budget.
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
                    to manage your web and mobile apps.
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
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
            <header className="section-header">
            <h2>Microsoft Power Apps Pricing</h2>
            <p>
              Explore Power Apps Plans, Costs, And Availability To Start Running
              Your Business Apps.
            </p>
          </header>
            </div>
          </div>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans</h3>
                <p>
                Best for businesses that want predictable user-based licensing - with the flexibility to license users to run one app at a time or run unlimited apps.
                </p>
                <div className="price">
                  <sup>$</sup>5<span>Per-User/App/Month</span>
                </div>
                <p className="small-tt">
                Run one app or portal per user, stacking licenses for access to each additional as their needs change.
                </p>
                <ul>
                  <li>
                  Includes 250 AI Builder service credits per month.<sup>1</sup>
                  </li>
                  <li>Requires access to the Microsoft 365 admin center with global administrator or billing administrator roles.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans</h3>
                <p>
                  Best for businesses that want predictable user-based licensing
                  with the flexibility to licence users to run one app at a time
                  or run unlimited apps.
                </p>
                <div className="price">
                  <sup>$</sup>20<span>Per-User/Month</span>
                </div>
                <p className="small-tt">
                Run unlimited apps and portals per user for one flat monthly rate.
                </p>
                <ul>
                  <li>
                  Includes 500 AI Builder service credits per month.<sup>1</sup>
                  </li>
                  <li>Available to buy now with a credit card.</li>
                  <li>40% discount available to eligible customers with 2,000+ licenses.3 Contact sales for details.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Pay-as-you-go plan</h3>
                <p>
                  Best for businesses that want the agility to pay only when a
                  user runs an app during a monthly period.
                </p>
                <div className="price">
                  <sup>$</sup>10<span>Per Active User/App/Month<sup>2</sup></span>
                </div>
                <p className="small-tt">Use an Azure subscription to pay per user based on the number of unique apps or portals a user runs each month.</p>
                <ul>
                  <li>
                  Requires an Azure subscription.
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
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>
                  Looking to reduce development costs and improve overall
                  efficiency?
                </h3>
                <p>Talk to our Power Apps experts to schedule a free demo.</p>
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
        < div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
          <header className="section-header">
            <h2>
            Explore Our Recent Blogs & Resources
            </h2>
            <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
          </header>
          </div>
          </div>
          <div className="row top-2 gx-5 justify-content-center">
            {/* <Blog /> */}
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h4>Important Power BI Links:</h4>
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

export default PowerApps;