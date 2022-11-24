import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
const SupplyChainManagement = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Dynamics 365 Supply Chain Management - Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics 365 Supply Chain management helps organizations simplify, streamline, and accelerate their supply chain practices just to produce, drive, and scale high."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/dynamics-365-supply-chain-management/"
        />
  
      </Head>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="R3Ol_-prHeI"
        onClose={() => setOpen(false)}
      /> 

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365 <br />
                Supply Chain Management
              </h1>
              <p>Quickly adapt to the market and build a resilient, sustainable supply chain for your business with Dynamics 365 for Supply Chain Management - a cloud-based predictive supply chain management solution.</p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Request a Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/supply-chain-banner.png"
                alt="Dynamics 365 Supply Chain Management"
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
        <h2>What Is Dynamics 365 Supply Chain Management?</h2> 
        <p>Dynamics 365 Supply Chain Management is a cloud-based ERP solution designed and developed by Microsoft. It helps large and mid-sized organizations mitigate supply chain issues through automation and seamlessly accelerates process execution while continuously monitoring end-to-end supply chain practices, from inventory and warehouse operations to the distribution and flow of your goods and services.</p> 
        <p>With D365 Supply Chain Implementation at your premises, you can quickly create an intelligent and resilient supply chain that can automatically react to challenges using real-time visibility, agile planning, and accuracy.</p> 
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
                          <img src="/img/Demand-Analysis-Fulfillment.svg" alt="Demand-Analysis-Fulfillment"  />
                        </div>
                        <span>Market with Speed & Accuracy</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>With Dynamics 365 Supply Chain Management you can design products quickly with accuracy and accelerate the time to market the products and services with its intelligent and centralized product information management capabilities.</p>
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
                          <img src="/img/Accelerate-Time-to-Market.svg" alt="Accelerate-Time-to-Market" />
                        </div>
                        <span>Embrace Agility & Build Confidence</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Automate your demand planning & distribution practices using AI and make inventory decisions through the real-time and data-driven forecasting abilities of Dynamics 365 Supply Chain Management. This cloud-based ERP software helps you proactively derive resource allocation, streamline sales, and bring agility to your production line while eliminating stock-outs and overstocking.</p>
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
                          <img src="/img/Sell-smarter-and-improve-customer-service.svg" alt="Sell-smarter-and-improve-customer-service" />
                        </div>
                        <span>Build Sensible Procurement Strategy & Cost-efficiency</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <p>Help your organization with automated resource scheduling, prevent machine downtime, and streamline procurement processes to efficiently manage end-to-end Supply Chain Operations and improve cost management through vendor collaboration portals and linking to vendor catalogues.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnews">
                <hr className="mob-disp" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fi4"
                        aria-expanded="false"
                        aria-controls="fi4"
                      >
                        <div className="wr-in">
                          <img src="/img/4.jpg" alt="images-name" />
                        </div>
                        <span>Derive Innovative and Sustainable Manufacturing</span>
                      </button>
                    </h3>
                    <div
                      id="fi4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>Create an agile manufacturing process highly configured with AI, IoT, and Mixed reality capabilities to streamline existing manufacturing & distribution systems and reduce error potentials.</p>
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
                        data-bs-target="#fi5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/Increase-Asset-Uptime.svg"
                            alt="Increase-Asset-Uptime"
                          />
                        </div>
                        <span>Derive Consistency and Expediency in Delivery</span>
                      </button>
                    </h3>
                    <div
                      id="fi5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>Simplification in delivery comes with real-time access to inventory data, hence the expedited delivery times. Bring automation and optimize inventory, logistics, and warehousing operations, effortlessly increasing throughput while strengthening procurement management and estimating your accurate logistics costs.</p>
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
                        data-bs-target="#fi6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/sales-proffesional-app.svg"
                            alt="Increase-Asset-Uptime"
                          />
                        </div>
                        <span>Employ Precision & Foresight</span>
                      </button>
                    </h3>
                    <div
                      id="fi6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>Maintain operational excellence by enabling automated cycle counts and performing proactive equipment maintenance to reduce machine downtime and maximize equipment efficiency.</p>
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
            <h2>Dynamics 365 Supply Chain Management Features</h2>
            <h3>Build an intelligent and adaptable supply chain with a Microsoft ecosystem that empowers your business with real-time visibility, agile planning, and business continuity to face any challenge that comes your way.</h3>
            </div>
              <div className="m-o-t m-o-t-b">
                <a
                  data-bs-toggle="modal"
                  href="#exampleModal"
                  className="btn-get-started scrollto"
                >
                  <span>Learn More</span>
                </a>
              </div>
              {/* <div className="downlad_guid">
                        <a href="#">
                        <span>Download Microsoft Guide</span>
                        </a>
                     </div> */}
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Connected <br /> Operations
                      </h3>
                      <div className="overlay">
                        <p>Ensure an integrated approach to your supply chain pipeline to respond quickly to customers and ensure collaboration across all your supply chain operations, from inventory and warehousing to logistics.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Maximize Growth <br/> & Scalability
                      </h3>
                      <div className="overlay">
                        <p>By optimizing supply chain performance and maintaining the right flow of production using Microsoft's agile supply chain solutions, enterprises can maximize scalability and growth.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Ensure Strategic
                        <br /> Planning
                      </h3>
                      <div className="overlay">
                        <p>Using the right supply chain modules, you can optimize logistics and warehousing data flow, analyze and forecast data, and perform agile planning to boost productivity and profitability.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Optimize Resources
                      </h3>
                      <div className="overlay">
                        <p>Utilize better resource planning, cost management, and inventory management to manage inventory levels, reduce downtime, and improve cost management.</p>
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
                    src="/img/supply-chain-page-side-image.png"
                    className="fix-im"
                    alt="Supply Chain Management Service"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/img/Video-Supply Chain Management.png"
                          alt="Video-Supply Chain Management"
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
                <h2>Supply Chain Management Services</h2>
                <p>D365 Supply Chain Management solutions can power up your business and help achieve desired productivity & growth.</p>
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
                  <p>Dynamics 365 Supply Chain Management can help your business achieve new milestones.</p>
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
                  <p>Continuously support your supply chain practices with our upgrade solutions and boost productivity.</p>
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
                  <p>Drive agile flow and support your business continuity with our top-notch services.</p>
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
          <div className="row">
            
          </div>
          <div className="row gy-4 p-9">
            <div className="col-lg-3">
              {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Financial Management</li>
                           <li> <i className="bi bi-check-lg"></i> Inventory Management</li>
                           <li> <i className="bi bi-check-lg"></i> Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Purchase Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Project Management</li>
                           <li> <i className="bi bi-check-lg"></i> Additional Capabilities</li>
                        </ul>
                       
                     </div> */}
            </div>
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365
                  <br />
                  Supply Chain Management
                </h3>
                <div className="price">
                  <sup>$</sup>180<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Scalable, composable, secure, and streamlined solution for an intelligent supply chain.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Read and Approve</li>
                           <li> <i className="bi bi-check-lg"></i> Employee Self Serve</li>
                           <li> <i className="bi bi-check-lg"></i> Run All Reports</li>
                        </ul>
                       
                     </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Create a connected, resilient, and adaptable supply chain</h3>
                <p>Dynamics Square can suggest a highly customized solution for your business needs.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Let's Discuss</span>
                  </a>
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
              questions about D365 Supply Chain Management? 
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
                      What is D365 Supply Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Supply Chain Management is an all-in-one SaaS ERP package that helps in simplifying and transforming supply chain operations for small and mid-sized businesses and large enterprises.</p>
                      <p>This Microsoft SCM module is a powerful ERP solution that empowers your supply chain workforce with not just agile planning and logistics capabilities, but also offers you predictive insights and other real-time connectivity across your organization including production, planning, warehousing automation, and distribution to boost operational efficiency while maximizing profitability and scalability.</p>
                      <p>Get in touch with our team to know more about how D365 Supply Chain Management solutions can help to improve and maximize your supply chain efficiency.</p>                  
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
                      How does D365 Supply Chain Management help manufacturers?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Once a company begins to grow, manufacturers look to support their continuing and continually expanding processes to guarantee that no process abundance occurs. Enterprises can use cloud-based ERP solution - Dynamics 365 for Supply Chain Management - to automate their operations while increasing client demand, adjusting to industry changes, and streamlining the process flow.</p>
                    <p>Furthermore, because Dynamics 365 Supply Chain is equipped with AI, IoT, and Mixed Reality capabilities, you can have in-depth information in real-time to make quick choices.</p>
                    <p>Also, enterprises can better foresee equipment downtime, allowing you to plan and manage your production or process flow ahead of time - resulting in better process flows across your company and scalable growth. Hence, we can say, D365 SCM is a complete tool to manage and automate your supply chain and start gaining ROIs within 22 months.</p>
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
                      Why Choose Dynamics 365 for Supply Chain?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>With Dynamics 365 Supply Chain Management, you can start reaping cost savings and business benefits right away. This intelligent tool can help you manage your entire supply chain workflow with its real-time tracking and process monitoring capability. D365 Supply Chain Management (SCM) enables you to stay updated with actual inventory flow, eases the procurement processes, and assists you in optimizing all your logistics operations.</p>
                     <p>Utilizing Microsoft cloud-data efficiency, you can better streamline and automate your data to ensure informed decisions to support your concurrent business processes and help you become resilient to handle any challenge may come your way.</p>
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
                      What are the key features of Dynamics 365 Supply Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    <p>Several business-driven features are available in Dynamics 365 Supply Chain Management that facilitates the management of your entire supply chain practices in a real-time data-driven manner.</p>
                    <p><b>Below is the list of its core features:</b></p>
                      <ul>
                        <li>Asset Management</li>
                        <li>Cost Accounting</li>
                        <li>Cost Management</li>
                        <li>Inventory Management</li>
                        <li>IoT Intelligence</li>
                        <li>Master Planning</li>
                        <li>Procurement & Sourcing</li>
                        <li>Product Information Management</li>
                        <li>Production Control</li>
                        <li>Sales & Marketing</li>
                        <li>Service Management</li>
                        <li>Transportation Management</li>
                        <li>Warehouse Management</li>
                      </ul>
                      <p><b>Note:</b> Each of the above features can be configured fully or customized to meet your specific business needs. At Dynamics Square, we can implement a highly customized Supply Chain solution that meets the needs of your enterprise.</p>
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
                      How can D365 Supply Chain Management help me drive my business smarter?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>You can automate your data and keep an update on every business flow, from inventory levels to warehousing practices, logistics demands and procurement to transportation management, and more.</p>
                     <p>Contact Dynamics Square for immediate D365 Support or to learn more about how Supply Chain solutions can benefit your total Supply Chain pipeline and create doors for growth and new business opportunity while minimizing investment costs.</p>
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
                     How much does it cost to implement Dynamics 365 Supply Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                   <p>The initial license cost for every user/per month would be $180. In order to use the app on a monthly basis, you will need to pay $30 per user. Thus, you can calculate your total cost based on the number of user licenses you purchase.</p>
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
                     Can I customize or integrate my D365 Supply Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, Microsoft Dynamics 365 Supply Chain is very adaptable and customizable to your specific company requirements. It is built with numerous critical components/modules to support the operational flow of your supply chain. To address your specific supply chain demands and operational flow, you can request your implementation provider whether to implement all the modules or the ones you need.</p>
                      <p>Moreover, you can also integrate D365 SCM with your existing system or other Microsoft business apps to allow your system to run in parallel while assuring a smoother flow in your operating environment. Dynamics Square can help you create, modify, and implement a system to meet your supply chain operating requirements.</p>
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
            <h2>Explore Our RecentResources</h2>
            <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
          </header >      
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
                    <a href="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>Nucleus Research
                      Report 2019
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>The top 8 Trends
                      Every COO Should Know
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>The Savvy
                      Leader's Guide to Building Intelligent Supply Chain
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>Creating an
                      Agile Supply Chain
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>A Quick-Start
                      Guide for Improving Supply Chain Resilience
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>Risk Mitigation
                      Across Today's Supply Chain
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i> Licensing Guide
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="blogs-extra-title">
                        <h4>Learn More</h4>
                     </div>
                     <div className="blogs-extra-right">
                        <ul>
                           <li><a href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Collections automation</a></li>
                           <li><a href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Vendor invoice automation</a></li>
                           <li><a href="#"><i className="bi bi-box-arrow-up-right"></i> Why to Upgrade Dynamics NAV to Business Central</a></li>
                           <li><a href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Asset leasing</a></li>
                        </ul>
                     </div> */}
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default SupplyChainManagement;
