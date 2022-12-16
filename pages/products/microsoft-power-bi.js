import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";
import FormGuide from "../../components/FormGuide";
const PowerBI = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>
        Microsoft Power BI Partners: Get Power BI Services in the USA
        </title>
        <meta
          name="description"
          content="Utilize Power BI's data visualization capabilities to turn your data sets into actionable insights. Get free consultation & Power BI services with Dynamics Square."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-power-bi/"
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
              <h1>Microsoft Power BI</h1>
              <p>
                Our Power BI experts helps transform your raw data into powerful
                business insights. Strategically track and share your analytical
                data leveraging user dashboards using cross devices.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Schedule a Demo</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Power-BI-1024x586.webp"
                alt="Microsoft Power BI"
                width={1024}
                height={586}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>What Is Microsoft Power Bi?</h2>
                <p>
                  Convert your data into powerful decision-making insights, key
                  metrics, and other analytical reports in visual representation
                  to predict data and instantly make decisions. Microsoft Power
                  BI allows to instantly create extensive reports and visualize
                  them using dashboards. Further, these reports can be shared
                  with people in your organization enabling them to make timely
                  yet productive decisions.
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
                            src="/img/Power-BI-Desktop.svg"
                            alt="Power-BI-Desktop"
                          />
                        </div>
                        <span>Power BI Desktop</span>
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
                          With Power BI Desktop, drive effective data strategy
                          by integrating your data source. Keeping on-premises,
                          build interactive reports and visualized analytics to
                          make smarter and faster decisions.
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
                            src="/img/Power-Bi-Service.svg"
                            alt="Power-Bi-Service"
                          />
                        </div>
                        <span>Power BI Service</span>
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
                          Power BI Service is a powerful solution that helps to
                          visualize data, reports, and analytics throughout your
                          organization to empower your workforce with
                          productivity-driven decisions in real-time.
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
                            src="/img/Power-Bi-Mobile.svg"
                            alt="Power-Bi-Mobile"
                          />
                        </div>
                        <span>Power BI Mobile</span>
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
                          Leverage mobile intelligence with Power BI Mobile. It
                          allows people in your organization to generate custom
                          reports and visual analytics as well as share the same
                          instantly to encourage decision-making.
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
                <h2>Power BI Features & Capabilities</h2>
                <h3>
                  Why Choose Dynamics Square as a Your Power BI Expert Partner?
                </h3>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Highly <br />
                        Customizable
                      </h3>
                      <div className="overlay">
                        <p>
                          Power BI comes with flexible configuration and
                          customization capabilities matching to your customized
                          business context. It can be integrated seamlessly with
                          other Microsoft apps or your existing system.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Transform <br />
                        Your Data
                      </h3>
                      <div className="overlay">
                        <p>
                          Empower your reporting and analytics capabilities with
                          Power BI. Allows your workforce to create highly
                          embedded visual reports & insights and publish & share
                          the same to ensure data-driven strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Secure <br />& Reliable
                      </h3>
                      <div className="overlay">
                        <p>
                          Ensure global compliances management and regulations
                          with highly secured and reliable Power BI
                          implementation. Power BI is designed with inbuilt
                          security features that drive growth and scalability.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Easy User
                        <br /> Adaptation
                      </h3>
                      <div className="overlay">
                        <p>
                          Power BI is designed with an easy-to-use interface and
                          drag & drop functionality that assists in quick
                          user-adaption to instantly create decision-making
                          reports, visual charts, and actionable data
                          representations.
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
      <section className="new-call-to-power-bi">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12">
              <div className="row inner-bgs">
                <div className="col-lg-6 col-md-6 align-self-center">
                  <div className="all-to-power-bi-content">
                    <h3>Do you want to know more about Power BI?</h3>
                    <p>
                      Our exhaustive Power BI Guide helps you to make informed
                      decisions.
                    </p>
                    <div className="button-call-ac">
                      <Link href="/guides/power-bi-guide-for-smb/">
                        <a className="bt-red bt-red-a">Read It Now</a>
                      </Link>
                      <Link href="#powerBIModals">
                        <a
                          data-bs-toggle="modal"
                          className="bt-red-border bt-red-a"
                        >
                          Download as PDF
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="all-to-power-bi-pic text-center">
                    <img src="/img/mask-group3x.png" alt="mask-group3x" />
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
                    src="/img/power-bi-side.png"
                    className="fix-im"
                    alt="Power BI Consultant UK"
                    width={553}
                    height={531}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <img src="/img/video-Power BI.png" />
                          <span className="cente-icns">
                            <Image
                              src="/img/play_icons.svg"
                              alt="play_icons"
                              width={390}
                              height={259}
                            />
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 align-self-center">
              <div className="side-heading">
                <h2>Get Exclusive Power Bi Consulting Services</h2>
                <p>Uplift Your Business with Our Power BI Services</p>
              </div>
              <br />
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Power BI Implementation</h3>
                  <p>
                    Drive standard reporting and AI analytics by availing of
                    highly customized Power BI implementation.
                  </p>
                  <div className="action-content">
                    <Link href="/power-bi-implementation/">Get Started</Link>
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
                  <h3>Power BI Support</h3>
                  <p>
                    Stay ensured that your business operations are at their peak
                    efficiency with our Power BI support.
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
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Power BI Pricing & Licensing</h2>
                <p>
                  Being a Power BI Implementation Partner, we can reveal the
                  best-suited Power BI plan for you.
                </p>
              </header>
            </div>
          </div>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box power-new-price">
                <h3>
                  Power BI <br />
                  Pro
                </h3>
                <div className="price price-power">
                  <sup>$</sup>9.99<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Connect to over 100 data
                    sources
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Mobile app
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>1GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>8 Data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>10 GB per user storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>AI visuals
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embedded APIs and controls
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data security and
                    encryption
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Metrics with content
                    creation and publishing
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Native integration with
                    other Microsoft solutions
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Share dashboards,
                    datasets, and reports with other Power BI users
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Create app work and
                    peer-to-peer sharing
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box power-new-price">
                <h3>
                  Power BI
                  <br />
                  Premium
                </h3>
                <div className="price price-power">
                  <sup>$</sup>20<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>100 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>100 TB of storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Access to one API surface
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>XMLA endpoint read/write
                    connectivity
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data flows
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Analyse data stored in
                    Azure Data Lake Storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Application lifecycle
                    management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Larger storage size for
                    extended deployment
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Advanced AI features
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>48 data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Geo distribution, pin to
                    memory and read-only replicas
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Publish reports to share
                    and collaborate
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box power-new-price">
                <h3>
                  Power BI
                  <br />
                  Premium
                </h3>
                <div className="price price-power">
                  <sup>$</sup>4,995<span>Per Capacity/Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>100 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>100 TB of storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Access to one API surface
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>XMLA endpoint read/write
                    connectivity
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data flows
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Analyse data stored in
                    Azure Data Lake Storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Application lifecycle
                    management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Larger storage size for
                    extended deployment
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Advanced AI features
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>48 data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Geo distribution, pin to
                    memory and read-only replicas
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>On-premise reporting
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>400 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Azure Autoscale add-on
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Multi-location deployment
                    management
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Power Bi Now</span>
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
                <h3>Do you want to watch Power BI in Action?</h3>
                <p>
                  Discuss your business problems with our Power BI experts, we
                  can reveal the best-in-class Power BI solution customized to
                  your business.
                </p>
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
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Power BI?
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
                      What is Power BI?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Power BI is a high-end reporting and analytics tool that
                      is used to create powerful reports, visuals, and other
                      actionable data that can be effortlessly shared within the
                      organization. Microsoft comes with its in-built capability
                      that allows its seamless configuration with Microsoft’s
                      apps and integration with third-party apps. Further,
                      created reports can be visualized on user dashboards that
                      encourage effective decision-making.
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
                      Does Power BI produce Paginated reports?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Yes, Microsoft Power BI is configured with the capability
                      of creating paginated reports being used for ensuring PDF
                      version. Paginated report feature comes and can be availed
                      of with Power BI premium plan. Enterprises can leverage a
                      quick and single integrated view of paginated reports by
                      publishing them on dashboards throughout their
                      organizational space.
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
                      Can I use Power BI for Budgeting & Forecasting?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Power BI is a powerful data visualization and business
                      analytics tool that makes effective use of the data
                      sources you connect with and prepares your data for
                      budgeting and forecasting insights.
                      <br />
                      You could have data on MS Excel, Salesforce, or
                      QuickBooks; Power BI utilizes your data sources and
                      prepares your data for budgeting and forecasting insights.
                      For instance, it could be sales forecasting reports,
                      production analysis, operational budgets, Cashflow
                      statements, asset planning, and more. To know more about
                      how it works, you can contact Power BI experts at Dynamics
                      Square.{" "}
                      <p>
                        MS Power BI is a high-end data analytics, key reporting,
                        and graphical analysis tool that allows creating
                        standard AI reports whether to reveal sales insights,
                        customer analytics, or finance metrics.
                        <br />
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
                      How is Power BI different from traditional BI
                      implementations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Power BI is designed as a powerhouse of reporting &
                      analytics capabilities (configured with AI intelligence
                      and hosted over the cloud) considering the increasing
                      modern business needs and rapidly changing industrial
                      adaption. In the case of traditional BI implementations,
                      enterprises may require compromising at some level in
                      terms of functionality, implementation flexibility, and
                      more.
                      <br />
                      <br />
                      Power BI comes with both on-premises and on-cloud
                      facilitation. Users can either keep their visual reports
                      and key analytics on their on-premises systems or can
                      access and share them leveraging on-cloud facilitation
                      which doesn’t seem possible in the case of traditional BI.
                      Cloud facilitation reduces upfront cost, investment in
                      hardware part, etc.
                      <br />
                      <br />
                      Power BI allows enterprises to create custom reports,
                      visual analytics, and graphical representation. Further,
                      all such key data can be shared and demonstrated on user
                      dashboards to support or roll out the instant
                      decision-making throughout the enterprise walls. With
                      Power BI, enterprises can accelerate their process
                      execution, improve their production line, and can faster
                      user adaption which could not be possible in the case of
                      traditional BI.
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
                      What is Power BI Report Server? Does this mean you are
                      making Power BI available for on-premises systems?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Power BI is a highly embedded SaaS (Software-as-a-Service)
                      solution that allows you to create reports using your
                      desktop or on-premises environment. These reports can be
                      moved to the cloud later. So, it’s your choice whether you
                      want to share your data over the cloud or just want to
                      keep it safe in your on-premises systems with the
                      flexibility of accessing and sharing in your own terms.
                      <br />
                      <br />
                      When it comes to Report Server, it allows you to create
                      powerful interactive reports leveraging SSRS (SQL Server
                      Reporting Services). Report Server is designed as an
                      enterprise-level platform that enables enterprises to
                      scale thousands of users.
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
                      How is Power BI licensed? How much does the Power BI
                      premium cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Initially, Power BI Desktop is freely available to
                      download and use. Enterprises can register their business
                      at no cost and can instantly start creating basic reports.
                      To share these reports, you have to go with a Power BI Pro
                      license.
                      <br />
                      <br />
                      To implement Power BI, connect and consult with Dynamics
                      Square's Power BI experts.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >
                      What if I want more functionality or change?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist8"
                  >
                    <div className="accordion-body">
                      Power BI is a highly configurable and customizable BI
                      reporting & Analytics platform. It can seamlessly be
                      customized suited to your specific business model and
                      advanced reporting & analytical needs. To support your
                      continuously changing or increasing reporting needs, you
                      can even update your Power BI system with more reporting
                      capabilities post-implementation too.
                      <br />
                      <br />
                      Contact us to know how our Power BI Service could be an
                      effective deal for your enterprise now and in the future.
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
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Explore Our Recent Blogs & Resources</h2>
                <p>
                  Whether you are a start-up, an SMB, or an enterAprise, the
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
                <h3>Important Power BI Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  {/* <li>
                    <Link href="/what-is-power-bi/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>What is
                        Power BI?
                      </a>
                    </Link>
                  </li> */}
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
                  {/* <li>
                    <Link href="/power-bi-architecture/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Architecture
                      </a>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/power-bi-reports/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Power BI
                        Reports
                      </a>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/implement-power-bi-for-your-business/">
                      <a>
                        <i className="bi bi-box-arrow-up-right"></i>Why Your
                        Business Should Implement Power BI?
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormGuide />
    </>
  );
};

export default PowerBI;
