import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
const ProjectOperations = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 Project Operations - Dynamics Square</title>
        <meta
          name="description"
          content="Automate &amp; Simplify Your Project Operations with Agility and Transparency with Dynamics 365 Project Operations."
        />
           <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/dynamics-365-project-operations/"
        />
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
                Dynamics 365
                <br />
                 Project Operations
              </h1>
              <p>
              Automate & Simplify Your Project Operations with Agility and Transparency with Dynamics 365 Project Operations.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/img/project-operation-banner.png" alt="project-operation-banner" />
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-9">
            <header className="section-header">
              <h2>
              What is dynamics 365 Project Operations?
              </h2>
              <p><b>Strengthen your team's capability, maximize your resource utilization, and faster your project delivery by implementing Dynamics 365 Project Operations.</b></p><br />
              <p>Bring a smoother flow across your project operation practices from sales, resource optimization to project automation, and streamline the delivery part by upgrading your system functionality with Dynamics 365 Project Operations. Enterprises can seamlessly drive team collaboration, roll out a strategic approach in their operations, and can accelerate their project delivery within the desired budget.</p>
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
                            src="/img/icon-automation.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Project Automation</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Bring automation in your project execution and enable everyone working on the project to get real-time updates related to project planning, organizing, and execution to ensure productive flow.</p>
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
                            src="/img/icons_resource-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Resource Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Implement a strategic approach wherein involve the right people in the right project or task, maximize your resource utilization, and drive efficient results while ensuring on-time completion and delivery.</p>
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
                          <img
                            src="/img/icons_finance-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Finance Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                       <p>Accelerate your financial operations and bring seamless flow from project costing, budgeting, invoicing, revenue recognition to compliance management, and more with improved financial visibility.</p>
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
                            src="/img/icons_data-management.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Data Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                       <p>Automate and transform your data flow with real-time accessibility by the people assigned for the specific project. With <a to="/products/microsoft-dynamics-365-finance/">Dynamics Finance</a>, faster project delivery with quality assurance practices.</p>
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
              <h2>Microsoft Dynamics 365 Project Operations Features</h2>
              <h3>
              Simplify & Accelerate Your Project Operations Flow with Dynamics 365 Project Operations.
              </h3>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimize <br />
                        Resource Utilization
                      </h3>
                      <div className="overlay">
                        <p>
                        From administration to operations to delivery part, ensure that you are assigning the right workforce to the right project at the right time with the help of D365 Project Operations.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Accelerate Project <br />
                        Management
                      </h3>
                      <div className="overlay">
                        <p>
                        Speed up your process flow by leveraging built-in functionalities of <a to="/microsoft-dynamics-365-project-service/">Dynamics 365 Project Service Automation</a> including Kanban boards, Gantt charts, and many more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Streamline Project <br />
                        Financials
                      </h3>
                      <div className="overlay">
                        <p>
                        Automate your project financials including project accounting, budgeting, and global financial reporting compliances to drive scalability across global locations.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Time & Expense <br />
                        Management
                      </h3>
                      <div className="overlay">
                        <p>
                        Seamlessly manage and submit time, expenses, etc. and streamline your operational cycle while improving your process flow capabilities in terms of workflow submissions, approvals, and reporting efficiencies.
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
                    src="/img/Project-operation-side image.png"
                    className="fix-im"
                    alt="Project-operation-side"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        to="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/img/Video-Video-Project-Operation.png" />
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
                <h2>Dynamics 365 Project Operations Services</h2>
                <p>
                We offer a full range of services to support you on your Dynamics journey including implementation, upgrade and support.
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
                  Implementing Microsoft Project solutions can help to manage your project operations seamlessly.
                  </p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" to="#exampleModal">
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
                  <p>
                  Bring agility across your project operations with our improved and highly optimized support system.
                  </p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" to="#exampleModal">
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
                  Drive a project-centric approach across your business by upgrading Dynamics 365 Project Operations.
                  </p>
                  <div className="action-content">
                    <a data-bs-toggle="modal" to="#exampleModal">
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
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Dynamics 365 Project Operations Pricing</h2>
                <p>
                  Find Dynamics 365 Project Operations plans and pricing to choose
                  the applications that are right for your business needs.
                </p>
              </header>
            </div>
          </div>
         
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>
              Pricing Plan
                </h3>
                <div className="price">
                  <sup>$</sup>120<span>Per-User/Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Get the visibility, collaboration, and agility needed to drive success across your project-centric business.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <a
                  data-bs-toggle="modal"
                  to="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Get Started Now</span>
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
                <h3>Connect & Discuss with Our Experts</h3>
                <p>
                Connect and reveal a healthy deal for your business to improve business processes and maximize business capabilities.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    to="#exampleModal"
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
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Explore Our Recent Blogs & Resources</h2>
                <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
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
                      to="/pdf/Remote-Service-Modernise-Your-Operations-with-Mixed-Reality.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Remote Service
                      Modernise Your Operations with Mixed Reality
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      to="/pdf/Transform-your-field-service-with-IoT-AI-and-mixed-reality.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Transform Your
                      Field Service With IoT, AI, and Mixed Reality
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      to="/pdf/Five-ways-to-know-if-connected-field-service-is-right-for-your-business.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Connected Field
                      Service is Right for Your Business?
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      to="/pdf/5-innovative-ways-industry-leaders-modernize-their-field-service.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Innovative Ways
                      Industry Leaders Modernize Their Field Service
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      to="/pdf/5-case-studies-from-manufacturing.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>5 Case Studies
                      From Manufacturing
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      to="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide-1-1.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Licensing Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
              <h2>
              Have you got
              <br />
              questions about Project Operations?
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
                      data-bs-target="#faq-content-2"
                    >
                      What is Project Operations in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Microsoft Dynamics 365 Project Operations is designed to connect sales, optimize resources, manage projects, and simplify finances using a single unified application that helps to close deals faster and accelerate project delivery while maximizing the revenue outcomes.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      How do I install Project Operations in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>When it comes to installing project operations in <a to="/products/microsoft-dynamics-365/">Dynamics 365</a>, multiple deployment options come ahead. You can either install Project Operations:</p>
                      <ul>
                        <li>To a new CDS environment</li>
                        <li>To an existing CDS environment</li>
                      </ul>
                     <p>In the case of a new CDS environment, you need to have
                      access to Global or Power Platform Administrator with
                      licensing of Project Operations. Now, create a new CDS
                      environment using the Power Platform admin center. The
                      next step is to select Microsoft Dynamics 365 Project
                      Operations going through:</p>
                      <p><b>
                        Dynamics 365 Apps- Microsoft Dynamics 365 Project
                        Operations
                      </b></p>
                      <p>In the case of an existing CDS environment, you are
                      required to have access to Global or Power Platform
                      Administrator with Project Operations licensing. Now, all
                      you need to locate the environment by going through the
                      Power Platform admin center. Here, you can install project
                      operations.Here is the navigation:</p>
                      <p>Manage Dynamics 365 Apps-Microsoft Dynamics 365 Project
                      Operations.</p>
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
                      Does Project Operations integrate with Dynamics 365
                      Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Project Operations is designed to fulfill a particular purpose. It comprises its sufficient capabilities to streamline and simplify project management. However, you can integrate your Project Operations not just with Business Central even with Microsoft's other products too.</p>
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
                      How do I create a project category in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>In Microsoft Dynamics 365, each category works under the category group. Hence, you need to define the group categories first. Thereafter, you can create project categories under the specific group. Now, let's understand how to create a group category first.</p>
                      <p>To Create Group Category, navigate through:</p>
                      <p><b>Project Management and Accounting Setup Categories
                      Category Groups</b></p>
                      <p>After reaching to Category Group, navigate through clicking 'New', then 'Category group' field, and then select & enter an identifier for the category group.</p>
                      <p>To Create a project category, navigate through:</p>
                      <p><b>Project Management and Accounting{" -> "} Setup {" -> "} Categories {" -> "} Project Categories</b></p>
                      <p>Now, click 'New' once you reach Project Categories.</p>
                      <p>The last step is to select the identifier of the project category.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectOperations;
