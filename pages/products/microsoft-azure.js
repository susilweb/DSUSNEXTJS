import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

const MicrosoftAzure = () => {
  return (
    <>
      <Head>
      <title>Microsoft Azure | Microsoft Azure Cloud Services</title>
        <meta
          name="description"
          content="Microsoft Azure is referred to cloud computing service owned and operated by Microsoft to manage hosted applications via its Microsoft-managed data centers."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-azure/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft Azure
                <br />A Hybrid Cloud Application
              </h1>
              <p>
              Uplift Your Process Flow and Improve Your Productivity Level with Microsoft Azure
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                   
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/azurebanner.png" alt="azure-Banner" width={728} height={466} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
         <div className="row justify-content-center">
          <div className="col-lg-9">
          <header className="section-header">
            <h2>
              What Is Microsoft Azure?
            </h2>
            <p>Drive business challenges and uplift your business caliber with highly secured and sustainable Azure cloud computing services designed owned by Microsoft to manage and drive hosted applications. These hosted applications are managed by Microsoft Data Centers that enable organizations to leverage modernized data solutions over a highly secure and reliable cloud infrastructure.</p>
            <p>Microsoft Azure cloud solution comprises Software as a Service (SaaS), Platform as a Service (PaaS), and Infrastructure as a Service (IaaS). To drive extended experience, Microsoft Azure can be integrated or configured either with your existing system, Microsoft tools & applications, or third-party applications. Microsoft Azure cloud enables you to connect your systems, data sources, and entire devices to build a highly secure, sustainable, and efficient solution.</p>
            
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
                        <span>App Service</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                     <p>App Service helps to instantly develop and host cloud apps for mobile and web platforms using RESTful APIs facilitated with automated deployments from GitHub, Azure DevOps, etc.</p>
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
                        <span>Azure Cognitive Services</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                     <p>Enables to create business intelligence solutions including mobile apps, web apps, virtual bots wrapped with the capabilities such as speech recognition, NLP (Natural Language Processing), and more.</p>
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
                        <span>Azure Cosmos DB</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Azure Cosmo DB is referred to as NoSQL database comes with SLA speed, automatic scalability, and more which is further includes open-source APIs for cloud-based document databases.</p>
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
                        <span>Azure Functions</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Azure Functions enable to quickly develop and deploy Web APIs using less server code, responding to database changes, processing IoT streams, managing notification queues, etc.</p>
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
                        <span>Azure Kubernetes Services (AKS)</span>
                      </button>
                    </h3>
                    <div
                      id="fin9"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Azure Kubernetes Services allow to quickly and seamlessly deploy AKS cluster in the Azure environment. It also enables simplifying deployment, management, and operations of Kubernetes.</p>
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
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <span>Azure Quantum (Preview)</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Azure Quantum enables developers to deploy quantum programs using Python and Q# programming languages either in the Azure Portal or in a local development environment leveraging QDK kit.</p>
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
                        <span>Azure SQL</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Azure SQL can be defined as a modern SQL family to perform seamless migration and efficient app modernization. SQL family includes Azure SQL Database, Azure SQL Managed Instance, etc.</p>
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
                        <span>Azure Virtual Desktop</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Seamless virtual desktops and remote apps can be deployed with the help of Azure Virtual Desktop which holds control on any device delivered on Azure that ensures an improved end-user experience.</p>
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
                        <span>Linux Virtual Machines</span>
                      </button>
                    </h3>
                    <div
                      id="fin8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Linux Virtual Machines help to deploy a separate application environment on Azure that works in the form of an image. Ubuntu, Red Hat, etc., platforms can be leveraged as Linux Virtual Machines.</p>
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
                        <span>Windows Virtual Machines</span>
                      </button>
                    </h3>
                    <div
                      id="fin10"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Windows Virtual Machine can be used to implement a separate and independent application environment deployed on Azure. Windows Virtual Machines can be leveraged for supportive versions.</p>
                      </div>
                    </div>
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
                <h3>Take Expert Consultation</h3>
                <p>Allow your business to leverage the highest potential by availing of our expert consultation revealing and streamlining your enterprise's flow.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link  href="#exampleModal"><a
                    data-bs-toggle="modal"
                  
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why mar-back">
        <div className="container">
          <header className="section-header">
            <h2>
              Microsoft Azure Features?
            </h2>
          </header>
          <div className="row pdd1">
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Highly <br />
                    Embedded Cloud
                  </h3>
                  <div className="overlay">
                    <p>
                    Microsoft Azure cloud can be leveraged whether on-premises, hybrid, multi-cloud, or at the edge. Enterprises can deploy high-end cloud apps to support their growth potentials and improve their entire data flow. With Microsoft Azure Solutions, integrate and configure your system, data, and apps to bring and drive a productive approach throughout your business model.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                  Optimal <br />
                  Security
                  </h3>
                  <div className="overlay">
                    <p>Implement a highly secured data model for your business with Microsoft Azure. Microsoft Azure cloud comes with built-in multi-layer security to be utilized across Microsoft data centers, cloud infrastructure, and connected operational data to seamlessly drive, utilize, and distribute the data over a high-end secured network.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Invent & <br />
                    Innovate
                  </h3>
                  <div className="overlay">
                    <p>Invent, innovate, and accelerate your development model, speed up your deployment strategy, and accelerate your time to market. With Azure Cloud computing services, enhance your developer velocity and abandon development barriers. Strengthen your developers' capability with improved tools, drive system collaboration, and support your changing business needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                  Build Your <br />
                  Business Case
                  </h3>
                  <div className="overlay">
                    <p>Build your business case on the Microsoft Azure portal by effectively utilizing financial and technical guidance to get the maximum value of your Azure investment. Reveal your business values and efficiencies that can be optimized on the cloud data model. Addressing your modernized business needs, opt for cloud solutions to generate maximized outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                  Secure & Reliable <br />
                  Migration 
                  </h3>
                  <div className="overlay">
                    <p>Ensure an optimum level of data security and reliability while migrating your data on Microsoft Azure Portal. Leveraging the guidance resources, related tools, and required skill sets, move your business data, server, apps, and other eligible enterprises workloads to the Microsoft Azure Cloud with confidence and highly embedded security.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                  Analytics at  <br />
                  360-Degree View
                  </h3>
                  <div className="overlay">
                    <p>Deploy breakthrough on-cloud analytics solutions to remodel your data into actionable data in real-time supporting your data warehousing, advanced analytics, and key reporting needs for improved decision making. With Microsoft Azure services, ensure and facilitate a secure data distribution throughout your data distribution infrastructure.</p>
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

export default MicrosoftAzure;
