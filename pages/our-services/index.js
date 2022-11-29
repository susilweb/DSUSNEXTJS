import Head from 'next/head'

const Inedex = () => {
    return (
        <>
        <Head>
        <title>Dynamics 365 Services &amp; Consulting | Dynamics Square</title>
        <meta name="description"
          content="We deliver comprehensive Dynamics 365 services including consulting, training, upgrade and implementation of Microsoft Business Applications to grow your business fast." />
          <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/our-services/"
        />
        </Head>
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
                <a
                  data-bs-toggle="modal"
                  href="#exampleModal"
                  className="btn-get-started scrollto"
                >
                  <span>Request a Call Back</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6 align-self-center">
              <img
                src="/img/dynamics-365-hero-image.svg"
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
                <p className="ne4">
                  We deliver comprehensive <b>Microsoft business solutions</b>{" "}
                  (&nbsp;
                  <a
                    title="Enterprise resource planning"
                    href="/products/microsoft-dynamics-erp/"
                  >
                    enterprise resource planning
                  </a>
                  &nbsp;(ERP) and&nbsp;
                  <a
                    title="Customer relationship management"
                    href="/products/microsoft-dynamics-crm/"
                  >
                    customer relationship management
                  </a>
                  &nbsp;(CRM)&nbsp;software applications ) that help your
                  business transform into an ultra-efficient, customer-centric,
                  thriving organization.
                </p>
                <p className="ne4">
                  We analyze your requirements, understand your unique work
                  style, and create a customized blueprint outlining solutions
                  ideal for your business.
                </p>
                <p className="ne4">
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
                  src="/img/microosoft-partner.png"
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
                  <a
                    href="/our-services/dynamics-365-implementation-services"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
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
                  <a
                    href="/our-services/dynamics-365-upgrade-services/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
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
                  <a
                    href="/our-services/dynamics-365-support-services"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>View More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}

export default Inedex;
