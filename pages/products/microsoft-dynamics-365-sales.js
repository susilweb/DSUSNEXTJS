import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
import Link from "next/link";
const Sales = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Sales | D365 Sales ERP Solution</title>
        <meta
          name="description"
          content="Attract & engage potential customer base and connect & serve them in real-time with omnichannel efficiency. With Dynamics 365 for Sales, uplift your sales capabilities, improve your sales turnover, and drive profitability. "
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/microsoft-dynamics-365-sales/"
        />
        
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="5mS_J5z9v7o"
        onClose={() => setOpen(false)}
      /> 
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365 Sales
              </h1>
              <p>Dynamics 365 Sales empowers your sales team to work smarter, close deals faster and build long-term relationships with customers.</p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get D365 Sales Demo Today!</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/img/Sales-banner.png" alt="Dynamics 365 Sales" />
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
              What is dynamics 365 Sales?
            </h2>
            <p>Microsoft's Dynamics 365 Sales is an AI-driven sales management application that helps you win new customers through teamwork and manage your day-to-day business operations through its modern customer relationship management (CRM) capabilities. Integrating preferred communication channels like Microsoft Teams to Dynamics 365 Sales, you can better connect sellers to customers, accelerate your revenue generation, and close sales faster.</p>
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
                            src="/img/sales-hub-app.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Sales Hub App</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                     <p>It is free and preinstalled app rich with several core and premium features from Microsoft for you to quickly get started with Dynamics 365 Sales. The sales Hub app comes with a modern, seamless, and intuitive user interface (UI) to help you complete tasks on the go. It is available for both desktops and mobile devices.</p>
                     <p><b>Remember:</b> You can access it if you either choose for Microsoft Dynamics 365 Sales Enterprise Plan or opt for the Sales Premium user's plan.</p>
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
                            src="/img/sales-proffesional-app.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Sales Professional App</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <p>The sales professional app is a modular app designed by Microsoft to empower your sales professionals and sales manager to seamlessly perform administration-related tasks by easily customizing tables, dashboards, forms, views, charts, and business processes without writing any code.</p>
                     <p><b>Remember:</b> To take advantage of this app, you must have any of three licenses - Dynamics 365 Sales Premium, Dynamics 365 Sales Enterprise, or Dynamics 365 Sales Professional.</p>
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
            <h2>Dynamics 365 For Sales Features</h2>
              <h3>Access the Sales Intelligence with Microsoft Dynamics 365 Sales.</h3>
            </div>
            
              <div className="m-o-t m-o-t-b">
                {/* <a  href="#about" className="btn-get-started scrollto">
                  <span>Know More</span>
                </a > */}
              </div>
              {/* <div className="downlad_guid">
                        <a  href="#">
                        <span>Download Microsoft Guide</span>
                        </a >
                     </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Break-Through <br />
                      Customer Experience
                      </h3>
                      <div className="overlay">
                        <p>Using in-the-moment insights from this cloud-based sales management solution, you can establish strong relationships with your customers and create new opportunities in the times of disruptive market changes.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Drive Teamwork & <br />
                      Win New Customers
                      </h3>
                      <div className="overlay">
                        <p>Dynamics 365 Sales enables your sales team to seamlessly engage and collaborate in real time, helping them win new customers, ensure success, and drive profitability.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Close <br />
                        Deals Faster
                      </h3>
                      <div className="overlay">
                        <p>With a scalable and intuitive sales tool like Microsoft Dynamics 365 Sales, you can enable your salespeople to work smarter, quicker, and more productively to leverage cross-network facilitation to close more deals.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Infuse Better <br />
                      Decision-Making
                      </h3>
                      <div className="overlay">
                        <p>Automate your sales practices, empower your sales workforce with D365 Sales' data intelligence, and access in-depth sales analytics in real-time to maximize your growth potential.</p>
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
                    src="/img/sales-side image.png"
                    className="fix-im"
                    alt="Dynamics 365 Sales Service"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a 
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/img/Video-Sales.png"
                          alt="sales-video-Sales"
                        />
                        <span className="cente-icns">
                          <img
                            src="/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span>
                      </a >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Dynamics 365 Sales Service</h2>
                <p>You can rely on us for complete implementation, upgrade, and support services for Dynamics 365 Sales.</p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Dynamics 365 Sales Implementation</h3>
                  <p>Enhance your sales practices and empower your salespeople with Dynamics 365 Sales.</p>
                  <div className="action-content">
                    <a href="/our-services/dynamics-365-implementation-services/">
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
                  <h3>Dynamics 365 Sales Upgrade</h3>
                  <p>Boost your sales processes and maximize your profitability by upgrading to D365 Sales.</p>
                  <div className="action-content">
                    <a href="/our-services/dynamics-365-support-services/">
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
                  <h3>Dynamics 365 Sales Support</h3>
                  <p>Drive a smoother sales experience with our Dynamics 365 Sales support services.</p>
                  <div className="action-content">
                    <a href="/dynamics-nav-to-business-central/">
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
            <h2>Dynamics 365 Sales Pricing</h2>
            <p>Choose the sales application that fits right for your business needs.</p>
          </header>
          </div>
          </div>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-999">
                <h3>Dynamics 365 Sales Professional</h3>
                <div className="price">
                  <sup>$</sup>65<span>Per User/month</span>
                </div>
                <p className="small-tt">
                Core sales force automation and Microsoft 365 integration
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box box-999">
                <h3>Dynamics 365 Sales Enterprise</h3>
                <div className="price">
                  <sup>$</sup>95<span>Per User/Month</span>
                </div>
                <p className="small-tt">
                Industry-leading sales force automation with contextual insights and advanced customization capabilities
                </p>
                <ul>
                  <li>Now includes limited capacity of AI features</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-999">
                <h3>Dynamics 365 Sales Premium</h3>
                <div className="price">
                  <sup>$</sup>135<span>Per User/Month</span>
                </div>
                <p className="small-tt">Dynamics 365 Sales Enterprise plus prebuilt customizable intelligence solutions for sellers and managers</p>
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
                </a >
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
                <h3>Maximize your business potential</h3>
                <p>Drive new business challenges by implementing Dynamics 365 Sales</p>
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
      <section className="solution-faq faq">
        <div className="container">
        <div className="row justify-content-center">
    <div className="col-lg-8 col-md-8">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Sales?
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
                      What Is Microsoft Dynamics 365 Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Microsoft Dynamics 365 Sales helps you accelerate your revenue through an AI-driven approach. This sales management application can effectively manage your sales campaigns using actionable insights and modern customer management facilitation. It also helps you automate their sales or customer data for better customer engagement and navigate the right ones at the right time to close the deals. Using any device, whether desktop, mobile, or tablet, you can proactively accelerate your sales and drive profitability by connecting customers to your sales team.</p>
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
                    What is Dynamics 365 for Sales used for?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Sales is a powerful sales management software application that comes integrated with AI capabilities. It allows salespeople and sales managers to access and leverage actionable sales insights, customer data, and other key analytics to connect and engage existing and potential customers in real time.</p>
                      <p>Dynamics 365 Sales is a powerful sales management software application that comes integrated with AI capabilities. It allows salespeople and sales managers to access and leverage actionable sales insights, customer data, and other key analytics to connect and engage existing and potential customers in real time.Enterprises can have customized solutions based on their needs.Dynamics 365 Sales enables your sales teams to make correct choices, and help customers with effective team collaboration, which ultimately boosts campaign success.</p>
                      <p>Drop us a line to get a demo of how to use Dynamics 365 Sales or how it can improve your marketing practices. We are all ears!</p>
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
                      How Can I increase my sales with Microsoft Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Enterprises can use Microsoft Dynamics 365 to manage their end-to-end sales processes, automate their data, improve client experience, and eventually boost revenue generation. This sales management tool assists businesses in streamlining their sales and customer data, engaging clients when they are in need, and serving them a customized but high-quality offer.</p>
                      <p>Dynamics 365 sales include pre-configured sales analytics that enables everyone involved in your sales campaigns to make effective decisions and drive productivity. Let us know if you want to see how Dynamics 365 can help you boost your sales, win new customers, and quickly complete transactions. Our experts can reveal to you an ideal sales management solution for your organization.</p>
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
                      Is Dynamics 365 Sales available on-premises?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>For the Dynamics Sales Enterprise plan, Dynamics 365 Sales is set to be executed both on-premises and in the Azure cloud. When it comes to implementing a Sales Professional plan, only on-cloud facilitation is available.</p>
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
                    How much does it cost to implement Microsoft Dynamics 365 for Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>You can transform your complete sales model with Dynamics 365 Sales. It allows you to enhance and elevate your digital sales experience. You also encourage collaboration among sales teams and engage real-time customers. Dynamics 365 Sales' centralized data allows you to collaborate and process the same customer data in real time, which ultimately helps you to streamline and accelerate sales.</p>
                      <p>Since Dynamics 365 sales eliminate the need for manual data processing and tedious activities, instant sales reports and other actionable insights enable everyone on the sales team to make wise decisions.</p>
                      <p>When you and your sales team have access to real-time sales information and customer behavior, converting leads and closing more deals becomes quicker. ales managers can also monitor and control the sales processes by providing legit recommendations.</p>
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
                    Dynamics 365 Sales Professional Pricing
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <ul>
                        <li>For the first Dynamics 365 App - 48 pounds/ per user (approx.)</li>
                        <li>For Subsequent Dynamics 365 App - 15 pounds/per user (approx.)</li>
                        <li>Dynamics 365 Sales Enterprise</li>
                        <li>For First Dynamics 365 App - 70 Pounds/per user (approx.)</li>
                        <li>For Subsequent Dynamics 365 App - 15 pounds/per user (approx.)</li>
                      </ul>
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
                      How do I access Dynamics 365 Sales Professional?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Accessing Dynamics 365 Sales Professional is easy. All you need is a Microsoft Account and then simply follow this: open “Microsoft 365 App Launcher” → go to “Dynamics 365” and click on the D365 Tile. Make sure you have availed yourself of a subscription for Dynamics 365 Sales Professional plan.</p>
                      <p>Further, navigate to Dynamics 365 home page and select a Sales Professional. Now, your system is ready to start optimizing your business processes.</p>
                      <p>Know more by connecting with our <a data-bs-toggle="modal"
                    href="#exampleModal">Dynamics 365 professionals</a> today. We are here to help.</p>
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
            <h2>Explore Our Recent Resources</h2>
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
                      href="/pdf/6-strategies-to-boost-sales-productivity.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>6 Strategies to
                      Boost Sales Productivity
                    </a >
                  </li>
                  <li>
                    <a 
                      target="_blank"
                      href="/pdf/Building-relationships-in-todays-sales-environment.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Building
                      Relationships in Today's Sales Environment
                    </a >
                  </li>
                  <li>
                    <a 
                      target="_blank"
                      href="/pdf/Dynamics-365-Sales-Professional.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Dynamics 365
                      Sales Professional
                    </a >
                  </li>
                  <li>
                    <a 
                      target="_blank"
                      href="/pdf/Dynamics365SalesKeyCapabilitiesOverviewFINAL63017.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Key Capability
                      of Dynamics 365 Sales
                    </a >
                  </li>
                  <li>
                    <a 
                      target="_blank"
                      href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Licensing Guide
                    </a >
                  </li>
                </ul>
              </div>
              {/* <div className="blogs-extra-title">
                        <h4>Learn More</h4>
                     </div>
                     <div className="blogs-extra-right">
                        <ul>
                           <li><a  href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Collections automation</a ></li>
                           <li><a  href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Vendor invoice automation</a ></li>
                           <li><a  href="#"><i className="bi bi-box-arrow-up-right"></i> Why to Upgrade Dynamics NAV to Business Central</a ></li>
                           <li><a  href="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Asset leasing</a ></li>
                        </ul>
                     </div> */}
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Sales;
