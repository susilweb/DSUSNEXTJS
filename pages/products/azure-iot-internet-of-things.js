import React, { useState } from "react";
import Head from 'next/head'
import ModalVideo from "react-modal-video";
const AzureIoT = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Microsoft Azure IoT (Internet of Things) | Dynamics Square</title>
        <meta
          name="description"
          content="Build and Deploy Highly Secured Azure IoT Solutions to Drive Growth, Sustainability, and Scalability. Get Azure IoT solutions today with Dynamics Square."
        />
           <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/azure-iot-internet-of-things/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="2lqX8SFsO-A"
        onClose={() => setOpen(false)}
      /> 
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              Microsoft Azure IoT
              </h1>
              <p>
              Build and Deploy Highly Secured Azure IoT Solutions to Drive Growth, Sustainability, and Scalability
              </p>
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
              <img src="/img/azure-Banner.png" alt="azure-Banner" />
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
            Explore Azure IoT Products & Services
            </h2>
            <p>
            Securely connect your devices & IoT apps, deploy Azure Cloud Intelligence, retrieve data or analytics, monitor your devices, track equipment performance, reduce production delays, and accelerate your process optimization with Microsoft Azure Cloud solutions.
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
                            src="/img/icons-azure_cloud-embed.svg"
                            alt="icons-azure_cloud-embed"
                          />
                        </div>
                        <span>Azure IoT hub</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Build your own IoT hub with our secured and reliable Azure IoT Hub wherein virtually connect your IoT applications and devices over a cloud-hosted network. Enable your devices to communicate and drive two-way communication while ensuring seamless and real-time data transmission throughout your operational environment.</p>
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
                            src="/img/icons-azure_agile.svg"
                            alt="icons-azure_agile"
                          />
                        </div>
                        <span>Azure IoT Central</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>With Azure IoT Central, build highly secure, reliable, and connected experience. Seamlessly integrate your IoT solution with your existing system to ensure and drive desirable results. Leveraging connected experience with Azure IoT Central, enterprises can predict their IoT investments and can drive transparency between their IoT applications and data.</p>
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
                            src="/img/icons-azure_project-management.svg"
                            alt="icons-azure_project-management"
                          />
                        </div>
                        <span>Azure Sphere</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Azure Sphere enables enterprises to protect their data, devices, and the entire IoT embedded environment as it ensures multiple protection layers to prevent data from any security threats and unauthorized attempts. With Azure Sphere, you can continuously monitor your system performance in terms of potential threats as well as supporting current servicing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accneww">
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
                            src="/img/icons-azure_innovation.svg"
                            alt="icons-azure_innovation"
                          />
                        </div>
                        <span>Azure Digital Twins</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                       <p>Azure Digital Twins is designed to ensure digital representation of real-world objects, data, processes, or resources that help to retrieve valuable business insights. Leveraging such insights, enterprises can optimize operations, investments costs, and more to drive improved strategy and support improved productive growth wrapped with continuity and reliability.</p>
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
                            src="/img/icons-azure_security.svg"
                            alt="icons-azure_security"
                          />
                        </div>
                        <span>Azure IoT Edge</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        <p>Leverage Azure IoT edge to streamline and centralize your data to drive operational efficiency on-premises. Enjoy seamless, secure, and reliable remote deployment of cloud-equipped practices or workloads comprising AI (Artificial Intelligence), Azure Services, and more whereby you can easily yet directly connect and drive your IoT devices implemented locally with cloud intelligence.</p>
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
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/icons-azure_machine-learning.svg"
                            alt="icons-azure_machine-learning"
                          />
                        </div>
                        <span>Azure Machine Learning</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        <p>Empower your developers with high-end development strength and capability to develop, deploy and securely manage data models. With its in-built tools, Azure Machine Learning provides a premium level of support to open-source frameworks. It allows you to develop and deploy data models effortlessly via Machine Learning operations.</p>
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
              <h2>Growth Hacking Reasons</h2>
              <h3>How can IoT Implementation help to improve your operational flow?</h3>
            </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimize <br />
                        Supply Chain
                      </h3>
                      <div className="overlay">
                        <p>
                        Deploying Azure IoT for your supply chain can help improve the operational flow by reducing production delays, equipment downtime, and keep controlling production level and quality standards.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Improved Connected <br />
                      Field Service
                      </h3>
                      <div className="overlay">
                        <p>
                        Dynamics 365 Field Service and IoT configuration enable you to proactively track, troubleshoot, control the issues remotely that helps to reduce downtime and improve customer service in real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Improve <br />
                      Production Flow
                      </h3>
                      <div className="overlay">
                        <p>
                        Get notified whenever there is a moisture or temperature imbalance, so that you can intervene in production to maintain product quality standards while minimizing waste.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Avoid Equipment <br />
                      Downtime
                      </h3>
                      <div className="overlay">
                        <p>
                        Proactively manage your devices and get notified about your device and equipment performance to avoid equipment downtime and quickly manage the maintenance part.
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
                    src="/img/InternetTHingsSide.png"
                    className="fix-im"
                    alt="bisin_leftimg"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/img/Video-Azure IoT.png" alt="iot" />
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
                <h2>Microsoft Azure IoT Service</h2>
                <p>
                We offer a full range of IoT services to support you on your Dynamics journey including implementation, upgrade and support.
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
                  Implement Azure IoT to optimize processes and improve your business capabilities.
                  </p>
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
                  <p>
                  Upgrade your IoT solutions to upgrade your business level with our Microsoft Azure Services.
                  </p>
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
                  <p>
                  Drive continuation and scalability in your business with our premium support services.
                  </p>
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
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Maximize your business potentials</h3>
                <p>Drive new business challenges by implementing Azure IoT</p>
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
          <div className="row top-2 gx-5">
            {/* <Blog /> */}
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Important Links:</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      rel=""
                      href="https://www.youtube.com/watch?v=xn32a320sv4"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Microsoft
                      Azure IoT manufacturing solutions
                    </a>
                  </li>
                  <li>
                    <a
                      rel=""
                      href="https://www.youtube.com/watch?v=-Fwc3dwbM3w"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> IoT for
                      Earth: helping farmers grow a brighter future for us all
                    </a>
                  </li>
                  <li>
                    <a
                      rel=""
                      href="https://www.youtube.com/watch?v=n0LqqadplIA"
                      target="_blank"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Why to
                      Upgrade Dynamics NAV to Business Central
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
            <div className="col-lg-9 col-md-9">
            <header className="section-header">
            <h2>
            Have you got questions about Microsoft IoT?   
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
                      What is Azure IoT and how does it work?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Azure IoT refers to enterprise solutions to enhance business capabilities and extend service levels. Microsoft Azure IoT solution enables enterprises to connect their physical objects over the cloud network including devices, sensors, operational equipment, etc.</p>
                      <p>The cloud-connected infrastructure can be leveraged to streamline information wrapped with AI to track, control, and manage devices remotely. Enterprises can also retrieve required information in real-time to serve various business purposes, for instance, to support informed decision-making, preventing system or equipment downtime. To know more, connect to our experts who can let you know how Azure IoT solutions can help your business to improve, scale, and grow.</p>
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
                    How does Azure IoT Central integrate with Dynamics 365 connected Field Service?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Azure IoT Central is configured with the opportunity to seamlessly integrate with Dynamics 365 Field Service. It required no advanced cloud development skills to integrate and deploy as it allows developers to perform direct integration of Dynamics 365 and Azure IoT. When integrated with Azure IoT, it can be configured to send IoT alerts to the field service executives in real-time to assist them to serve better.</p>
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
                      What is Azure IoT hub?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Azure IoT Hub is used to create and connect secure connections between your equipment and IoT applications. You can remotely connect your devices with your cloud hosted IoT apps. Since it acts as a messaging hub that enables bi-directional communication between your connected devices and IoT apps to support smoother operational flow, proactively manage your devices to prevent downtime, provide timely maintenance, and more.</p>
                      <p>To know how Azure <a href="/products/dynamics-365-internet-of-things/">IoT</a> could help your business to simply, monitor, and scale, connect with us today, we can help to implement as per your specific or customized needs.</p>
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
                     How much does IoT hub cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Businesses can avail of either Basic Tier IoT Hub or Standard Tier IoT Hub as per your business requirement. Costing for your IoT Hub could vary from business to business, to know your exact cost, connect with us, we can offer you the cost-effective Azure IoT solution pricing for your business.</p>
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

export default AzureIoT;
