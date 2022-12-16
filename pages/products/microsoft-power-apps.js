import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import Blog from "../../components/Blog";
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
          href="https://www.dynamicssquare.com/products/microsoft-power-apps/"
        />
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
              <h1>Microsoft Power Apps</h1>
              <p>
                Power Apps help you quickly build low-code custom business apps
                to achieve agility in an increasingly digital world.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link  href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/power-apps-banner-01.svg"
                alt="power-apps-banner-01"
                width={1024} height={586}
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
                <h2>What Are Power Apps?</h2>
                <p>
                  Microsoft designed Power Apps to help modern enterprises
                  effortlessly develop and quickly launch apps via pre-built
                  templates, drag and drop facility, and instant deployment for
                  seizing new business opportunities and reshaping avenues for
                  growth. It is a suite of connectors, services, apps, and data
                  platforms (Microsoft Dataverse) for speedy app deployment.
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
                        <p>
                          Power Apps drive business transformations by offering
                          you easy-to-use tools for custom business app
                          development. Using prebuilt tools & templates, your
                          employees can quickly build problem-specific apps.
                        </p>
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
                        <p>
                          Power Apps enable your employees to innovate quickly
                          for faster results. With inbuilt AI components, your
                          employees can develop well-featured apps with advanced
                          functionalities, that is, apps that look and work like
                          native apps or an app developed via a software
                          developer/app developer.
                        </p>
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
                        <span>Freedom To Innovate</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>
                          Microsoft's Power Apps platform is a great place to
                          help your employees ensure that they are free to
                          develop apps for any purpose/automation-related task
                          in the best possible way.
                        </p>
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
                        <p>
                          Responsive design makes Power Apps ensure that users
                          get an incredible experience when operated from
                          various platforms, browsers, and devices like mobile
                          phones, tablets, desktops, and laptops.
                        </p>
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
                        <span>Data Availability</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#acccm"
                    >
                      <div className="accordion-body">
                        <p>
                          Business Apps developed via Power Apps use already
                          available data on the data platform (Microsoft
                          Dataverse) or in various online and on-premises data
                          sources for analysis. The custom apps can also extract
                          data from external sources and use them to get the
                          desired result.
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

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Reinvent Your Business with Microsoft Power Apps</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Enable Your People
                        <br />
                        to Build Apps
                      </h3>
                      <div className="overlay">
                        <p>
                          Power apps help your business by bringing more
                          efficiency and accuracy to solve business problems
                          with pre-built templates, AI components, and a low
                          code approach.
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
                          Automatically generate interactive, and responsive
                          business apps using your data. You can customize
                          business entities and tailor the user experience to
                          specific roles using prebuilt designing tools.
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
                          Leverage Power Apps canvas to begin your designing
                          journey from scratch to professional. Customize every
                          aspect of your business app and optimize it for
                          specific tasks and functions.
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
                          Take advantage of more than 200 data connectors to
                          integrate data and systems already in use. Extend
                          Power Apps with custom connectors and logic like a
                          professional developer.
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
                  <Image
                    src="/img/power apps-side.png"
                    className="fix-im"
                    alt="power apps-side"
                    width={553} height={531}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btn">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <Image src="/img/video-ower-apps.png" alt="pics" width={390} height={259} />
                          <span className="cente-icns">
                            <img src="/img/play_icons.svg" alt="play_icons" />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Microsoft Power Apps Services </h2>
                <p>
                  Integrate a combination of accelerators, data platforms, and
                  our strategic support to modernize your core business
                  applications for advanced growth.
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
                    Implement business-specific PowerApps solutions by our
                    experts to ensure your needs are met on time and within
                    budget.
                  </p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
                    </Link>
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
                    Get constant and seamless support from Dynamics Square to
                    help you manage your web and mobile apps.
                  </p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
                    </Link>
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
                <p>Explore Power Apps Subscription Plans & Costs.</p>
              </header>
            </div>
          </div>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Subscription Plans</h3>
                <p>
                  Best for businesses that want predictable user-based licensing
                  - with the flexibility to license users to run one app at a
                  time or run unlimited apps.
                </p>
                <div className="price">
                  $5<span>Per-User/App/Month</span>
                </div>
                <p className="small-tt">
                  Run one app or portal per user, stacking licenses for access
                  to each additional as their needs change.
                </p>
                <ul>
                  <li>
                    Includes 250 AI Builder service credits per month.
                    <sup>1</sup>
                  </li>
                  <li>
                    Requires access to the Microsoft 365 admin center with
                    global administrator or billing administrator roles.
                  </li>
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
                  $20<span>Per-User/Month</span>
                </div>
                <p className="small-tt">
                  Run unlimited apps and portals per user for one flat monthly
                  rate.
                </p>
                <ul>
                  <li>
                    Includes 500 AI Builder service credits per month.
                    <sup>1</sup>
                  </li>
                  <li>Available to buy now with a credit card.</li>
                  <li>
                    40% discount available to eligible customers with 2,000+
                    licenses.3 Contact sales for details.
                  </li>
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
                  $10
                  <span>
                    Per Active User/App/Month<sup>2</sup>
                  </span>
                </div>
                <p className="small-tt">
                  Use an Azure subscription to pay per user based on the number
                  of unique apps or portals a user runs each month.
                </p>
                <ul>
                  <li>Requires an Azure subscription.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Access Now</span>
                  </a>
                </Link>
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
                  Looking to modernize technology, reimagine processes &
                  transform experiences in a fast-changing world?
                </h3>
                <p>Talk to experts for a free demo.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
              <header className="section-header">
                <h2>
                  Have you got questions <br /> about Microsoft Power Apps?
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
                      What are the limitations of Power Apps?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        One of the major limitations of Power Apps is that they
                        are not open-source software like other app development
                        platforms. Power Apps is a proprietary platform from
                        Microsoft, meaning, that endless customization isn't
                        possible. Also, the Power Apps are not compatible with
                        external systems and run only on PowerApps App Player.
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
                      What is Power Apps and is it SaaS or PaaS?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        As a platform-as-a-service (PaaS), Power Apps provides a
                        variety of business services. It enables you to build,
                        run, and maintain apps without worrying about building
                        and maintaining a complex infrastructure.
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
                      data-bs-target="#faq-content-3"
                    >
                      How many rows can Power Apps handle?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        There is a limit of 15,000 rows in a table that Power
                        Apps cannot read. Whenever you create an Excel table,
                        give it a unique name. Install Power Apps Studio and add
                        the Import from Excel data source option.
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
                      data-bs-target="#faq-content-4"
                    >
                      Can a Power Apps have multiple data sources?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        With a single app, you have the option of using multiple
                        data sources.
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
                      data-bs-target="#faq-content-5"
                    >
                      What is the difference between PowerApps and Power
                      Platforms?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        PowerApps is an application development platform that is
                        part of the broader{" "}
                        <Link href="/products/microsoft-power-platform/">
                          Microsoft Power Platform
                        </Link>
                        , which is built on Azure cloud services. It includes
                        native capabilities for Sales, Service, Field Service,
                        Marketing, and Talent.{" "}
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
                      data-bs-target="#faq-content-6"
                    >
                      Can I use PowerApps without a license?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Through an Azure subscription, you can run Power Apps
                        pay-as-you-go applications (1 app or 1 portal) without
                        any licenses. You only pay according to how many users
                        use the app in a month.
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
                      data-bs-target="#faq-content-7"
                    >
                      Is PowerApps a framework?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Using canvas apps, developers and makers can add data
                        sets and test custom components with a public preview of
                        the Power Apps component framework.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-extra">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-9">
              <header className="section-header">
                <h2>Explore Our Recent Blogs & Resources</h2>
                <p>
                  Whether you are a start-up, an SMB, or an enterprise, the
                  Dynamics Square blog is the best place to get inspired and
                  learn more about Microsoft Business Applications.
                </p>
              </header>
            </div>
          </div>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h4>Important Power BI Links:</h4>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/what-is-power-bi/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>What is
                        Power BI?
                      </a>
                    </Link>
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
                    <Link href="/power-bi-architecture/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Architecture
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/power-bi-reports/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Reports
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/implement-power-bi-for-your-business/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Why Your
                        Business Should Implement Power BI?
                      </a>
                    </Link>
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
