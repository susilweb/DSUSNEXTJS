import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
import Link from "next/link";
const Finance = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Finance Partner | Dynamics Square</title>
        <meta
          name="description"
          content="Boost your financial visibility and faster your financial decision making by implementing Microsoft Dynamics 365 Finance. Book a free consultation today."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-365-finance/"
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
              <p>Dynamics 365 Finance helps you make sense of complex financial histories, maximize financial visibility and profitability, and keep your business on top of complicated billing and payment processes at multiple stages.</p>
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
                src="/img/Dynamics-365-Finance-Banner.svg"
                alt="Microsoft Dynamics 365 Finance"
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
                <h2>
                  What is dynamics 365 Finance?
                </h2>
                <p>Microsoft Dynamics 365 Finance is an all-in-one ERP software application that drives automation, data transparency, and real-time financial insights for your organisation. With Dynamics 365 Finance, you can effectively improve your organization's financial capabilities. D365 Finance helps you maintain system monitoring, track and evaluate your financial processes with a 360-degree view, and anticipate financial results while ensuring smooth global compliance and risk management.</p>
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
                        <p>Use Microsoft Dynamics 365 for Finance to support your production planning, forecasting, and budgeting. Make it possible for your finance team to quickly and correctly compare the allotted budget to the actual budget.</p>
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
                        <p>Implement Microsoft Dynamics 365 Finance to continue monitoring your project cycle and to keep informed of the progress of your projects in real-time. Also, accelerate the automation process of your project management processes to achieve project success faster.</p>
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
                       <p>By migrating from legacy systems to Dynamics 365 Finance, you can efficiently organize and manage your financial data, including payables, accounts receivables, tax management, and more.</p>
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
                        <p>Help your finance department with global budgeting and regulatory reporting. For the newly configured system to support your international accounting and financing, enable rapid user adaptation with D365 Finance.</p>
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
            <h2>Features of Microsoft Dynamics 365 Finance</h2>
              <h3>How Can Microsoft Dynamics 365 Finance Help Streamline Your Financial Operations?</h3>
              </div>
              <div className="m-o-t m-o-t-b">
                <a data-bs-toggle="modal"
                    href="#exampleModal" className="btn-get-started scrollto">
                  <span>Explore Now</span>
                </a>
              </div>
              {/* <div className="downlad_guid">
                        <a href="#">
                        <span>Download Microsoft Guide</span>
                        </a>
                     </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6 col-md-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Make Decision <br />
                      Making Faster
                      </h3>
                      <div className="overlay">
                        <p>
                        Keep tracking your cash flows, predict your profit margins, create budget proposals accurately and finally improve your financial reporting capabilities by implementing Microsoft's Financial Management.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Accelerate  <br />
                      Productivity
                      </h3>
                      <div className="overlay">
                        <p>Minimize your audit costs by simply establishing new subsidiaries and enabling automated recurring billing. To increase efficiency, enable precise and smooth financial statement calculation easily with Dynamics 365 Finance.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Automate Your <br />
                      Finances
                      </h3>
                      <div className="overlay">
                        <p>Automating all your end-to-end financial processes, from billing to controlling credit risks, makes cash flows transparent, and helps you merge data intelligence to ensure cooperative finances.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Seamless Global <br />
                      Compliances
                      </h3>
                      <div className="overlay">
                        <p>Reduce risks and enhance governance by managing and optimizing your global accounting, payment processing, invoice fulfillment, tax rules, and other regulatory compliance.</p>
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
                    src="/img/finace-video-banner.png"
                    className="fix-im"
                    alt="Dynamics 365 Finance Service"
                  />
                  {/* <img
                    src="/img/ico6.svg"
                    className="flot-img"
                    alt="ico6"
                  /> */}
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/img/video-Finance.png"
                          alt="video-Finance"
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
                <h2>Dynamics 365 Finance Service</h2>
                <p>Dynamics 365 Finance can help you substantially simplify your finances and help drive a strategic business approach.</p>
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
                  <p>By implementing Dynamics 365 Finance, you can create a smoother flow throughout your financial procedures.</p>
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
                  <p>Upgrading to Dynamics 365 Finance helps you better optimize, improve, automate, and simplify your all-financial processes.</p>
                  <div className="action-content">
                    <a  data-bs-toggle="modal" href="#exampleModal">
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
                  <p>With the help of our proactive D365 Finance support services, you can keep your cashflows uninterrupted, easy, and productive.</p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" href="#exampleModal">Get Started</a>
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
              <p>D365 Finance can effectively automate financial processes, enhance decision-making, strategically influence finances, and mitigate risk and inefficiencies associated with global finance.</p>
            </header>
          </div>
        </div>
         
          <div className="row gy-4 p-9">
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>
                For First Dynamics App
                </h3>
                <div className="price">
                  <sup>$</sup>180<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  An intelligent, automated, and trusted core financial management solution.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>
                For Subsequent Dynamics App
                </h3>
                <div className="price">
                  <sup>$</sup>30<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  An intelligent, automated, and trusted core financial management solution.
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
                <h3>Looking For Microsoft Dynamics 365 Finance Implementation Partner?</h3>
                <p>If you're new to D365 Finance, have been using it but are facing challenges, or seeking a new implementation partner, consult with our experienced ERP system specialists to get seamless and error-free Dynamics 365 Finance implementation services.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Let's Talk!</span>
                  </a>
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
            Have you got questions about <br /> Dynamics 365 Finance?   
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
                      What is Microsoft Dynamics 365 Finance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Finance is a full-fledged ERP system enabling enterprises to control finances, estimate sales, manage budgets, and predict reliable and useful information through advanced AI-driven analytics and financial intelligence.</p>
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
                      <p>Microsoft Dynamics 365 Finance is a cutting-edge financial management application that makes it easier to manage all your financial processes while minimizing human labor, duplication of data, and risk of ambiguity. The D365 Finance app is made to assist contemporary businesses looking to streamline their financial processes and increase efficiency and profitability.</p>
                      <p>Here are the core features list:Microsoft Dynamics 365 is an all-in-package designed to support the modern financial practices in today's high-equipped enterprises that deal globally while struggling with vast competition in their domain. </p>
                      <p><b>Here is the list of features to boost your productivity:</b></p>
                      <ol>
                        <li>Accounts Receivable</li>
                        <li>General Ledger</li>
                        <li>Accounts Payable</li>
                        <li>Tax Management</li>
                        <li>Cash & Bank Management</li>
                        <li>Budgeting</li>
                        <li>Credit & Collections </li>
                        <li>Cost Accounting</li>
                        <li>Fixed Assets</li>
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
                    >How can Microsoft Dynamics 365 Finance help your business succeed?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Your business may experience inaccurate budgeting, forecasting, and planning since your finance department may need to manage several events or activities, or because you may not have a system or tool that is well-equipped to manage all your finances. With D365 Finance, businesses can get a 360-degree picture of their operations and can proactively control and manage their transactions.</p>
                      <p>D365 Finance is aimed at handling all your financial operations through automation, bringing real-time efficiency into every process and AI-driven intelligence that empowers employees to act more quickly and productively, which positively influences the future development and growth of your company.</p>
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
                      <p>Dynamics 365 Finance & Operations, or D365 F&O, is a Cloud-Based SaaS. This multipurpose business app is often the right choice and well-suited for large or diversified organizations looking to manage their finances, inventory, and other business ops using cloud technology. Large or international groups looking for advanced automation, efficiency, and control can implement this powerful business management app.</p>
                      <p>Though this cloud-based enterprise resource planning ERP software is known as Finance & Operations or F&O, Microsoft technically disintegrated D365 F&O into two different apps:</p>
                      <p><b>Dynamics 365 Finance:</b> With the license for this app, you can manage budgeting, project management, financials, and accounting.</p>
                      <p><b>Dynamics 365 Supply Chain Management:</b> Dynamics 365 Finance and Dynamics 365 Supply Chain Management are implemented simultaneously. It is up to the companies to choose whether they want individual users to access one or both apps. Your Dynamics 365 Implementation partner can help you choose the right arrangement of licenses for you.</p>
                      <p><b>Note-1:</b> With the license for this app, you can manage budgeting, project management, financials, and accounting.</p>
                      <p><b>Note-2:</b> Earlier, Dynamics 365 F&O was known as Dynamics AX. It was mainly deployed on-premises, while D365 F&O was mostly on the cloud. Because of no continuous support from Microsoft, many Dynamics AX users are migrating to Finance & Operations/Dynamics 365 Finance.</p>
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
                     What is the Microsoft Dynamics 365 finance and operations model?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Microsoft made significant updates and transformed Microsoft Dynamics 365 Finance and Operations into "Dynamics 365 Finance" and "<Link href="dynamics-365-supply-chain-management"><a>Dynamics 365 Supply Chain</a></Link>", respectively. Enterprises can provide their financial procedures with a smooth yet expedited flow via the Dynamics 365 Finance model.</p>
                      <p>Dynamics 365 Finance can be customized in accordance with your unique processes and can help improve the company's process flows and manage your end-to-end procedures. Besides that, it can also be coupled with any other third-party apps or your current system to effectively assist your financial practices and promote easier operations throughout your finance department and beyond.</p>
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
                    >How much does it cost to implement Dynamics 365 Finance?</button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body"><p>Microsoft Dynamics 365 is a comprehensive solution created to assist contemporary financial practices in today's well-equipped businesses that operate internationally while contending with intense industry rivalry. Hence, businesses may incur setup fees of $180 per user per month for the first Dynamics 365 app and $30 for each additional eligible Dynamics 365 app. To find out more about the license for Dynamics 365 Finance, get in touch with our experts.</p></div>
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
                     <p>Microsoft Dynamics 365 Finance is a highly configurable and customizable platform that offers businesses the option to tailor it according to their specific domain needs or integrate it with other business software or apps to manage financial operations and make quick, effective decisions that lead to an increase in profitability and scalability.</p>
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
            <div className="col-lg-9">
            <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>Our blogs are an ideal resource for finding inspiration and learning more about Microsoft Business Applications, regardless of your niche and size - a start-up, SMB, or corporate.</p>
          </header>
            </div>
          </div>
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
                      href="/assets/pdf/Nucleus-Research.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Nucleus Research
                      Report 2020 - Dynamics 365 Finance
                    </a>
                  </li>
                  <li>
                    <a href="/assets/pdf/forrester.pdf" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>Forrester Report
                      - The Economic Impact of Dynamics 365 Finance
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Top-8-Trends-Every-CFO-Should-Know.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Top 8 Trends
                      Every CFO Should Know
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/A-New-Approach-to-Evaluating-ERP.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>A New Approach
                      to Evaluating ERP
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Modular-ERP-The-Key-to-Corporate-Agility.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Modular ERP: The
                      Key to Corporate Agility
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Licensing Guide
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                <h3>Learn More</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      rel=""
                      href="https://youtu.be/jTgqXkQvv1c"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Dynamics 365
                      Finance: Collections automation
                    </a>
                  </li>
                  <li>
                    <a
                      rel=""
                      href="https://youtu.be/jTgqXkQvv1c"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Dynamics 365
                      Finance: Vendor invoice automation
                    </a>
                  </li>
                  <li>
                    <a
                      rel=""
                      href="https://youtu.be/V8EErSL028w"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>Dynamics 365
                      Finance: Asset leasing
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

export default Finance;
