import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
const WhyChooseBc = () => {
  return (
    <>
      <Head>
        <title>Why Choose Microsoft Dynamics 365 Business Central?</title>
        <meta
          name="description"
          content="Microsoft Dynamics 365 Business Central is a unified business management solution for SMBs that empowers them to streamline critical business processes."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/why-choose-microsoft-dynamics-365-business-central/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-4 align-self-center">
              <h1>Why Choose Microsoft Dynamics 365 Business Central?</h1>
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
                src="/img/wh-business-center-main.svg"
                alt="wh-business-center-main"
                width={644} height={504}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="row justify-content-center">
                <div className="col-lg-9 col-md-9">
                  <header className="section-header">
                    <h2>
                      Let's Get Familiar with Microsoft Dynamics 365 Business
                      Central and its Advantages
                    </h2>
                    <p>
                      <Link href="/products/dynamics-365-business-central/">
                        Microsoft Dynamics 365 Business Central
                      </Link>{" "}
                      is a cloud based, unified business management solution
                      that empowers enterprises to transform their entry level
                      accounting software or legacy Enterprise Resource Planning
                      (ERP) system to a comprehensive solution to manage
                      critical business functions, including finance,
                      operations, sales, and customer service.
                      <br />
                      <br />
                      <b>
                        <Link href="/products/dynamics-365-business-central/">
                          Business Central
                        </Link>{" "}
                        is a proven solution that has successfully served over
                        160,000 customers and millions of users worldwide,
                        assisting them streamlining their processes, improve
                        customer relations, and enable growth.
                      </b>
                    </p>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image src="/img/Group538.png" alt="Group538" width={705} height={529} />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="custom-p-0001">
                <div className="left">
                  <img src="/img/RingChart1.png" alt="RingChart1" />
                </div>
                <div className="right">
                  <p>
                    of consumers said they would stop doing business with a
                    company using outdated technology.
                  </p>
                </div>
              </div>
              <div className="custom-p-0001">
                <div className="left">
                  <img src="/img/RingChart2.png" alt="Ring Chart2" />
                </div>
                <div className="right">
                  <p>
                    of businesses said their employees get more done in the same
                    amount of time thanks to cloud and mobile technologies.
                  </p>
                </div>
              </div>
              <div className="custom-p-0001">
                <div className="left">
                  <img src="/img/RingChart3.png" alt="Ring Chart3" />
                </div>
                <div className="right">
                  <p>
                    of businesses said technology is critical to their company's
                    future.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div class="row justify-content-center">
            <div className="col-lg-9 col-md-9">
              <header className="section-header">
                <h2>
                  Dynamics 365
                  <br />
                  Business Central Advantages
                </h2>
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
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-1.svg" alt="ic-1" />
                        </div>
                        <span>Informed Decisions</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Modern enterprises are aggressively looking to improve
                        their capabilities of making smarter decisions. Their
                        existing business solutions are scattered across the
                        departments, making it difficult to get real time
                        business insights for right business decisions.
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
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-2.svg" alt="ic-2" />
                        </div>
                        <span>Advanced Integrations</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Moreover, Business Central leverages the intelligence of
                        Microsoft Power BI (Business Intelligence) to ensure
                        in-depth organizational reporting, enabling businesses
                        to:
                        <br />
                        <br />
                        <ul>
                          <li>
                            Ensure smart forecasts for Sales, Cash Flows, and
                            Budgets
                          </li>
                          <li>Generate real time inventory levels</li>
                          <li>
                            Facilitate payment recommendations and vendor
                            discounts
                          </li>
                          <li>
                            Deliver payment due reminders to avoid overdue
                            penalties
                          </li>
                        </ul>
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
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-3.svg" alt="ic-3" />
                        </div>
                        <span>Boost Efficiency</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Automates workflows through a seamless integration with
                        Microsoft Office tools, including Outlook, Word, and
                        Excel thus, enabling enterprises to improve their
                        business performances.
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
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-4.svg" alt="ic-4" />
                        </div>
                        <span>Smart Solutions</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Improves productivity and unifies business functions
                        through embedded smart platforms enabling enterprises to
                        automatically track cash flows and audit trails.
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
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-5.svg" alt="ic-5" />
                        </div>
                        <span>Smart Interface</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Simplifies the complicated and painstaking tasks, such
                        as data imports, through an embedded user friendly
                        framework thus, empowering enterprises to save their
                        efforts and focus on critical business tasks.
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
                        data-bs-target="#fin11"
                        aria-expanded="false"
                        aria-controls="fin11"
                      >
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-6.svg" alt="ic-6" />
                        </div>
                        <span>Seamless Searches</span>
                      </button>
                    </h3>
                    <div
                      id="fin11"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Facilitates easy look ups for relevant pages and reports
                        through an integrated simplified wizard, assisting users
                        to quickly and precisely find what they need.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnewsd">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-7.svg" alt="ic-7" />
                        </div>
                        <span>Advanced Capabilities</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewsd"
                    >
                      <div className="accordion-body">
                        Business Central is an advanced business solution,
                        integrated with smart functionalities, delivering
                        relevant business information that enterprises need to
                        identify new trends, prevent recurring issues, and
                        ensure great customer engagements.
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
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-8.svg" alt="ic-8" />
                        </div>
                        <span>Unified Business Functions</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewsd"
                    >
                      <div className="accordion-body">
                        Businesses with advanced accounting and reporting
                        solutions typically face issues when unifying their
                        business capabilities together.
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
                        data-bs-target="#fin8"
                        aria-expanded="false"
                        aria-controls="fin8"
                      >
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-9.svg" alt="ic-9" />
                        </div>
                        <span>Actionable Insights</span>
                      </button>
                    </h3>
                    <div
                      id="fin8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewsd"
                    >
                      <div className="accordion-body">
                        Integrates business data and analytics through
                        Microsoft's leading intelligent solutions empowering
                        business to ensure greater outcomes and gain smart
                        business views.
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
                        data-bs-target="#fin9"
                        aria-expanded="false"
                        aria-controls="fin9"
                      >
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-10.svg" alt="ic-10" />
                        </div>
                        <span>Enhanced Business Management Capabilities</span>
                      </button>
                    </h3>
                    <div
                      id="fin9"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewsd"
                    >
                      <div className="accordion-body">
                        Organizations are looking for a simple to set up and
                        easy to execute solutions. Typically, businesses do not
                        want to spend time on - learning new software; importing
                        data from existing scattered systems; or managing
                        additional cost burdens of replacing hardware and
                        software.
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
                        data-bs-target="#fin10"
                        aria-expanded="false"
                        aria-controls="fin10"
                      >
                        <div className="wr-in wr-in-001">
                          <img src="/img/ic-11.svg" alt="ic-11" />
                        </div>
                        <span>Simplified Personalization</span>
                      </button>
                    </h3>
                    <div
                      id="fin10"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewsd"
                    >
                      <div className="accordion-body">
                        Customizes relevant applications to adapt to the unique
                        business requirements enabling users to easily
                        re-arrange fields, re-name groups, and re-locate
                        elements.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call_to_action call_to_action-height pd-405">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Looking for a Dynamics 365 Business Central demo?</h3>
                <p>
                  It's time to modernize your current ERP solutions by migrating
                  to Dynamics 365 Business Central!
                </p>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to Expert</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseBc;
