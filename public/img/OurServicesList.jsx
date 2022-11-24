import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
const OurServicesList = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dynamics 365 Services &amp; Consulting | Dynamics Square</title>
        <meta name="description"/>
          content="We deliver comprehensive Dynamics 365 services including consulting, training, upgrade and implementation of Microsoft Business Applications to grow your business fast."
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/our-services/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Microsoft Dynamics Services | Trusted by 300+ Clients"
        />
        <meta
          property="og:description"
          content="We deliver comprehensive Dynamics 365 services including consulting, training, upgrade and implementation of Microsoft Business Applications to grow your business fast."
        />
        <meta
          property="og:url"
          content="https://www.dynamicssquare.com/our-services/"
        />
        <meta property="og:site_name" content="Dynamics Square" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/dynamicssquareuk"
        />
        <meta
          property="article:author"
          content="https://www.facebook.com/vickygururani"
        />
        <meta property="fb:app_id" content="2007906422699147" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content="" />
        <meta property="og:image:width" content="570" />
        <meta property="og:image:height" content="340" />
        <meta property="og:image:alt" content="Microsoft Dynamics Services" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Microsoft Dynamics Services | Trusted by 300+ Clients"
        />
        <meta
          name="twitter:description"
          content="Power your business by our unique Microsoft Dynamics Services that includes Implementation services, cloud migration, consulting services and upgrade."
        />
        <meta name="twitter:site" content="@dsquare_us" />
        <meta name="twitter:creator" content="@dsquare_us" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:label1" content="Time to read" />
        <meta name="twitter:data1" content="1 minute" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              Microsoft Dynamics 365 Services
              </h1>
              <p>
              Take your business to the next level by our Dynamics 365 services and solutions.
              </p>
              <div className="text-center text-lg-start">
                <NavLink
                  data-bs-toggle="modal"
                  to="#exampleModal"
                  className="btn-get-started scrollto"
                >
                  <span>Request a Call Back</span>
                </NavLink>
              </div>
            </div>

            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/dynamics-365-hero-image.svg"
                alt="dynamics-365-hero-image.svg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="side-heading-custom-01">
                <h2>
                Microsoft Business Solutions
                </h2>
              </div>
              <div className="custom-p-001">
                <p class="ne4">
                  We deliver comprehensive <b>Microsoft business solutions</b>{" "}
                  (&nbsp;
                  <NavLink
                    title="Enterprise resource planning"
                    to="/products/microsoft-dynamics-erp/"
                  >
                    enterprise resource planning
                  </NavLink>
                  &nbsp;(ERP) and&nbsp;
                  <NavLink
                    title="Customer relationship management"
                    to="/products/microsoft-dynamics-crm/"
                  >
                    customer relationship management
                  </NavLink>
                  &nbsp;(CRM)&nbsp;software applications ) that help your
                  business transform into an ultra-efficient, customer-centric,
                  thriving organization.
                </p>
                <p class="ne4">
                  We analyze your requirements, understand your unique work
                  style, and create a customized blueprint outlining solutions
                  ideal for your business.
                </p>
                <p class="ne4">
                  If your internal processes are consumed by chaos, we'll
                  organize them. If you plan on establishing new clear-cut
                  guidelines and standards for work and conduct, we'll devise
                  them. If you want your teams to be proficient in multiple
                  important technologies, we'll educate and train them. What we
                  offer is a complete and comprehensive solution that helps your
                  business thrive and grow.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="busine_service_bottom-left custom012">
                <img
                  src="/assets/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              Dynamics Services
              <br />
              We Offer
            </h2>
            <p>
              Whether you need implementation, extension, upgrades, maintenance,
              or reassessment for your technology investments, our services help
              you assess your best options for - then bring that change to life.
            </p>
          </header>
          <div className="row p-2">
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Implementation Service</h3>
                <p>
                  Adapts standard approach, implements advanced methodologies,
                  and derive high-end process defining your business values and
                  empowering your business process flow, and enabling growth
                  potentials.
                </p>
                <br />
                <div className="text-lg-center">
                  <NavLink
                    to="/our-services/dynamics-365-implementation-services"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Upgrade Service</h3>
                <p>
                  Upgrade your system capabilities, process flow, adapt
                  operational change, and bring quick user acceptance through
                  our highly integrated and requirement-specific Dynamics 365
                  upgrade services.
                </p>
                <br />
                <div className="text-lg-center">
                  <NavLink
                    to="/our-services/dynamics-365-upgrade-services/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Support Service</h3>
                <p>
                  Drive continuity in your processes and ensure a sustainable
                  approach with our seamless Dynamics 365 Support Services.
                  Continuous monitoring of your system and processes can help to
                  attain lifelong success.
                </p>
                <br />
                <div className="text-lg-center">
                  <NavLink
                    to="/our-services/dynamics-365-support-services"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicesList;
