import React, { useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import ModalVideo from "react-modal-video";
import Blog from "../../components/Blog";
const Finance = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Dynamics 365 Finance Implementation USA | Dynamics Square</title>
        <meta
          name="description"
          content="Use actionable insights to increase financial visibility and faster your decision making with Microsoft Dynamics 365 Finance Implementation. Contact us now."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-dynamics-365-finance/"
        />
      </Head>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="NhoeKnSp7IM"
        onClose={() => setOpen(false)}
      />

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft <br /> Dynamics 365 Finance
              </h1>
              <p>
                Automate Your Financial Operations, Improve Decision Making,
                Bring Strategic Impact on Your Finance, and Minimize Global
                Financial Complexities & Risks with Dynamics 365 Finance.
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
                src="/img/Dynamics-365-Finance-Banner.svg"
                alt="Microsoft Dynamics 365 Finance"
                width={868}
                height={487}
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
                <h2>What is dynamics 365 Finance?</h2>
                <p>
                  Upfit your Finance capabilities by enabling finance
                  automation, data transparency, real-time financial analytics
                  all through Microsoft Dynamics 365 Finance. With D365 Finance,
                  keep monitoring your system, track & analyze your finance
                  operations with a 360-degree view, forecast financial
                  outcomes, and more while ensuring seamless global compliances
                  and risk management.
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
                          <img src="/img/Budget.svg" alt="icons" />
                        </div>
                        <span>Forecasting & Budgeting</span>
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
                          Support your production planning, forecasting, and
                          budgeting with Microsoft Dynamics 365 Finance. Allow
                          your Finance people to effortlessly and accurately
                          compare actual budget with allocated budget.
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
                          <img src="/img/Financials-3.svg" alt="icons" />
                        </div>
                        <span>Project Management</span>
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
                          Keep tracking your project cycle and stay updated with
                          your real-time project status with Microsoft Dynamics
                          365 Finance. Automate your project operations and
                          accomplish project success.
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
                <div className="accordion" id="accnews">
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
                          <img src="/img/Project.svg" alt="icons" />
                        </div>
                        <span>Finance & Accounting</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Leverage D365 to effectively organize and manage your
                          financial records from payables to accounts
                          receivables to tax management, and more by upgrading
                          your system with Dynamics 365 Finance.
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
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/International-Accounting-3.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Global Financial Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Enable our finance department to ease their regulatory
                          reporting and global accounting. Enable quick user
                          adaptation for the newly configured system to support
                          your global accounting and financing.
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
            <div className="col-lg-5  align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Microsoft Dynamics 365 Finance Features</h2>
                <h3>
                  How Dynamics 365 Finance Can Help to Streamline Your Finance
                  Operations?
                  <br />
                </h3>
              </div>
              <div className="m-o-t m-o-t-b">
                <Link href="#exampleModal">
                  <a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </div>
              {/* <div className="downlad_guid">
                        <Link href="#">
                        <span>Download Microsoft Guide</span>
                        </Link>
                     </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6 col-md-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Faster Your <br />
                        Decision Making
                      </h3>
                      <div className="overlay">
                        <p>
                          Keep tracking your cash flows, predict your profit
                          margins, create budget proposals accurately and
                          finally improve your financial reporting capabilities
                          by implementing Microsoft's Financial Management.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Bring Automation <br />
                        to Your Finance
                      </h3>
                      <div className="overlay">
                        <p>
                          Automate your end-to-end finance operations from
                          invoicing to managing credit risks, bringing
                          transparency in your cash flows, and combining your
                          data intelligence to ensure collaborative finances.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Accelerate <br />
                        Productivity
                      </h3>
                      <div className="overlay">
                        <p>
                          Deploy new subsidiaries efficiently and allow
                          automation in recurring billing while minimizing your
                          audit expenses. Enable seamlessly and accurately
                          calculating financial statements to enhance
                          productivity.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Seamless Global <br />
                        Compliances
                      </h3>
                      <div className="overlay">
                        <p>
                          Optimize and manage your global accounting, payment
                          processing, invoice delivery, tax regulations, and
                          other regulatory compliances while minimizing the
                          risks and improving governance.
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
                    src="/img/finace-video-banner.png"
                    className="fix-im"
                    alt="Dynamics 365 Finance Service"
                    width={570}
                    height={531}
                  />
                  {/* <img
                    src="/img/ico6.svg"
                    className="flot-img"
                    alt="ico6"
                  /> */}
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <Image
                            src="/img/video-Finance.png"
                            alt="video-Finance"
                            width={390}
                            height={259}
                          />
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
                <h2>Dynamics 365 Finance Service</h2>
                <p>
                  Drive Strategic Approach & Simplify Your Financials with
                  Dynamics 365 Finance
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
                    Bring Smoother flow across your financial practices by
                    implementing Dynamics 365 Finance.
                  </p>
                  <div className="action-content">
                    <Link href="/dynamics-365-finance-implementation/">
                      Get Started
                    </Link>
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
                    Upgrade your system with Dynamics 365 Finance to optimize
                    and simplify your finance operations.
                  </p>
                  <div className="action-content">
                    <Link href="/products/microsoft-dynamics-365-finance/">
                      Get Started
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
                    Keep your financial flow smoother, interrupted, and
                    productive by our proactive support services.
                  </p>
                  <div className="action-content">
                    <Link href="/products/microsoft-dynamics-365-finance/">
                      Get Started
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
                <h2>Dynamics 365 Finance Pricing</h2>
                <p>
                  Automate your financial operations, improve decision making,
                  bring strategic impact on your finance, and minimize global
                  financial complexities & risks with dynamics 365 finance.
                </p>
              </header>
            </div>
          </div>

          <div className="row gy-4 p-9">
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>For First Dynamics App</h3>
                <div className="price">
                  <sup>$</sup>180<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    An intelligent, automated, and trusted core financial
                    management solution.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>For Subsequent Dynamics App</h3>
                <div className="price">
                  <sup>$</sup>30<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                    An intelligent, automated, and trusted core financial
                    management solution.
                  </li>
                </ul>
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
                <h3>Looking to implement Microsoft Dynamics 365 Finance?</h3>
                <p>
                  If you're new to Dynamics 365 Finance, already using it and
                  have a challenge, or are looking for a new support partner.
                  Talk to our experts.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get In Touch</span>
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
                <h2>Have you got questions about Dynamics 365 Finance?</h2>
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
                      What is Microsoft Dynamics 365 Finance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 is an enterprise-level finance
                        management solution to proactively manage your
                        end-to-end finance practices. D365 Finance allows
                        enterprises to control and manage their finances,
                        predict sales, manage budgets, and forecast reliable and
                        productive information to support instant yet productive
                        financial decisions.
                      </p>
                      <p>
                        With Microsoft's finance management solution, businesses
                        can streamline their general ledger, cash & bank,
                        payables & receivables, accounts & taxing, credit &
                        collection management, budgeting & electronic invoice
                        creating, and more. All such financial properties make
                        Dynamics 365 Finance a complete financial management
                        solution to innovate, drive, and grow.
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
                      What are the features of Dynamics 365 Finance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Finance is a modern finance
                        management tool to simplify your finance practices while
                        reducing manual efforts, data redundancies, and
                        mitigating the risk of uncertainties. D365 Finance
                        solution is designed to support modern enterprises
                        seeking to simply their finance operations to drive
                        profitability and efficiency.
                      </p>
                      <p>
                        Here are the core features list:Microsoft Dynamics 365
                        is an all-in-package designed to support the modern
                        financial practices in today's high-equipped enterprises
                        that deal globally while struggling with vast
                        competition in their domain.{" "}
                      </p>
                      <p>Here we are revealing the list of features:</p>
                      <ol>
                        <li>General Ledger</li>
                        <li>Accounts Payable</li>
                        <li>Accounts Receivable</li>
                        <li>Cash &amp; Bank Management</li>
                        <li>Tax Management</li>
                        <li>Credit &amp; Collections</li>
                        <li>Budgeting</li>
                        <li>Fixed Assets</li>
                        <li>Cost Accounting</li>
                        <li>Electronic Invoicing</li>
                      </ol>
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
                      How Microsoft Dynamics 365 Finance management can help
                      your business to succeed?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        With Dynamics 365 Finance, Businesses can have a
                        360-degree view into their practices and can proactively
                        control & manage their finances. Since there could be
                        several event or activities to manage being managed in
                        your finance department and in the lack of proper
                        finance configured system or finance embedded tool, your
                        enterprise may lose in terms of proper budgeting,
                        forecasting, and planning.
                      </p>
                      <p>
                        Dynamics 365 is designed to manage your entire financial
                        operations by enabling automation and bringing real-time
                        efficiency into every process along with AI intelligence
                        that enables people in your organization to make faster
                        and productive decisions impacting your organizational
                        growth and future potentials.
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
                      What is included in Dynamics 365 Finance & Operations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <Link href="/products/microsoft-dynamics-365-finance-operations/">
                          Dynamics 365 Finance & Operations
                        </Link>{" "}
                        have been converted into 'Dynamics 365 Finance' and
                        'Dynamics 365 Supply Chain'. Thereby, depending on your
                        core or specific requirement, you can implement it
                        accordingly. With Dynamics 365 Finance, enterprises can
                        drive advanced finance practices including banking &
                        taxation, budgeting & forecasting, cost accounting,
                        invoice generating, sales prediction, credit &
                        collections, global compliances, and more.
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
                      What is the Microsoft Dynamics 365 finance and operations
                      model?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft has made updates wherein Microsoft Dynamics
                        365 Finance and Operations has been transformed as
                        'Dynamics 365 Finance' and '
                        <Link href="/products/dynamics-365-supply-chain-management/">
                          Dynamics 365 Supply Chain
                        </Link>
                        '. With Dynamics 365 Finance model, enterprises can
                        bring a seamless yet accelerated flow in their financial
                        practices. To strengthen business flow and manage your
                        end-to-end practices, Dynamics 365 Finance can be
                        configured as per your customized processes. Further, it
                        can be integrated with whether your existing system or
                        any other third-party applications to efficiently
                        support your finance practices and drive smoother flow
                        throughout your finance unit.
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
                      How much does it cost to implement Dynamics 365 Finance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      When it comes to implementation costing, it can cost
                      businesses $180 per user /per month for the first Dynamics
                      365 app and $30 for subsequent qualifying Dynamics 365
                      app. Connect with our team to know more about Dynamics 365
                      Finance licensing.
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
                      Can I customize my Microsoft Dynamics 365 Finance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Finance is a highly configurable
                        and customizable platform that allows enterprises
                        whether to configure suited to their domain needs or
                        integrate with other systems or apps to manage your
                        entire finance practices while making instant efficient
                        decisions to drive profitability and scalability.
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
          <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>
              Whether you are a start-up, an SMB, or an enterprise, the Dynamics
              Square blog is the best place to get inspired and learn more about
              Microsoft Business Applications.
            </p>
          </header>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/pdf/Nucleus-Research.pdf" >
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Nucleus
                        Research Report 2020 - Dynamics 365 Finance
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/forrester.pdf" >
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Forrester
                        Report - The Economic Impact of Dynamics 365 Finance
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pdf/Top-8-Trends-Every-CFO-Should-Know.pdf"
                    >
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Top 8 Trends
                        Every CFO Should Know
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pdf/A-New-Approach-to-Evaluating-ERP.pdf"
                    >
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>A New Approach
                        to Evaluating ERP
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pdf/Modular-ERP-The-Key-to-Corporate-Agility.pdf"
                    >
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Modular ERP:
                        The Key to Corporate Agility
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf"
                    >
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Licensing
                        Guide
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                <h3>Learn More</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link
                      href="https://youtu.be/jTgqXkQvv1c"
                    >
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>Dynamics 365
                        Finance: Collections automation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://youtu.be/jTgqXkQvv1c"
                    >
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>Dynamics 365
                        Finance: Vendor invoice automation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://youtu.be/V8EErSL028w"
                    >
                      <a target="_blank">
                        <i className="bi bi-box-arrow-up-right"></i>Dynamics 365
                        Finance: Asset leasing
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

export default Finance;
