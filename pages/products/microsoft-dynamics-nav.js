import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
const MicrosoftDynamicsNAV = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Dynamics NAV (Navision) Support Partner</title>
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-dynamics-nav/"
        />
        <meta
          name="description"
          content="Need Microsoft Dynamics NAV support? Whether you're using an older or newer version, we offer high quality, low cost Navision support services. Contact us now to get started."
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="4sdOb8PUE-o"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft
                <br />
                Dynamics NAV
              </h1>
              <p>
                Grow your business at a scale with Dynamics NAV - a complete ERP
                solution from Microsoft that caters to the needs of SMBs and
                small to mid-sized businesses ranging from financial, supply
                chain, manufacturing, and project management to service
                management.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get NAV Support</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/nav-banner.png" alt="Microsoft Dynamics NAV" width={1024} height={576} />
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom custom001">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>
                  What Is Microsoft <br /> Dynamics NAV?
                </h2>
              </div>
              <div className="custom002">
                <p>
                  Dynamics NAV, also known as Navision or NAV (now known as{" "}
                  <Link href="/products/dynamics-365-business-central/">
                    Business Central
                  </Link>
                  ), is a unique ERP software that simplifies an organization/s
                  basic to complex needs. Microsoft developed NAV to help small
                  and mid-size businesses (SMBs) and local subsidiaries of large
                  international groups to seamlessly manage their finances,
                  sales, warehousing and supply chain operations, accounting,
                  stocks, and customers.
                </p>
                <p>
                  Being UK's leading{" "}
                  <Link href="/">Microsoft Gold Partner</Link>, we help
                  businesses of all sizes grow faster and on a larger scale by
                  providing value for money. Get in touch with our Microsoft
                  consultants for all your Dynamics NAV support services.
                </p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <Image
                    src="/img/NAV-implementation.jpg"
                    className="fix-im"
                    alt="d605-left"
                    width={1000} height={563}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Key Benefits of Implementing Microsoft Dynamics NAV ERP</h2>
                <p>
                  Over 400K companies uses Dynamics NAV which possesses robust
                  digital functionalities that are rarest to find with other{" "}
                  <Link href="/products/microsoft-dynamics-erp/">
                    ERP solutions
                  </Link>{" "}
                  available today, some of them include:
                </p>
              </header>
            </div>
          </div>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnewas">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <span>Finance & Account Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnewas"
                    >
                      <div className="accordion-body">
                        <p>
                          Everyone needs support when life take turns, and so do
                          organizations. They need software that regularly
                          monitors different business aspects of their company
                          with the lowest chances of error and minimum data
                          redundancy. NAV's finance and account management
                          module does exactly that! Microsoft Dynamics NAV ERP
                          assists businesses in smoothly managing financial
                          operations by taking care of banking, cash flow,
                          analytical accounting, asset management, allocations,
                          and related tasks.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <span>Manufacturing and Supply Chain Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnewas"
                    >
                      <div className="accordion-body">
                        <p>
                          Manufacturers seek swift ways to manufacture their
                          products, bring the finished product to the market at
                          full tilt, and continuously run the supply chain.
                          Dynamics NAV better supervises the smooth
                          transformation of raw materials into finished products
                          and facilitates distribution and the supply chain.
                          With NAV ERP, merchants and business owners can easily
                          track and manage their production status and orders,
                          maintain proper inventory, evaluate and finalize
                          business with vendors, and maintain a vendor
                          directory.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Sales & Marketing Support </span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnewas"
                    >
                      <div className="accordion-body">
                        <p>
                          The innovative and effective tools of NAV ERP allow
                          your sales and marketing people to build strong
                          relationships with their customers by accessing
                          accurate, real-time, and updated insights to manage
                          contacts and networks, seize opportunities, organize
                          and execute target campaigns, promote sales, and close
                          deals faster. Dynamics NAV ERP is best for nurturing
                          sales from lead to order, tracking accounts and
                          contacts, and creating sales collateral.
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
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin11"
                        aria-expanded="false"
                        aria-controls="fin11"
                      >
                        <span>Project Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin11"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          Microsoft Dynamics NAV ERP is an excellent tool that
                          makes project tracking easy. Using the Capacity
                          Management feature, users can create proper estimates,
                          manage capacity and capabilities, and track the
                          projects and their progress down the line. NAV
                          efficiently undertakes project management with the
                          updated data of costs, time, budget, and required
                          resources to complete a project successfully.
                          Supervising the delivery time along with proper
                          quality checks, assigning, transferring, and combining
                          projects to suit the business requirements is easy
                          with NAV.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin12"
                        aria-expanded="false"
                        aria-controls="fin12"
                      >
                        <span>Business Intelligence & Reporting</span>
                      </button>
                    </h3>
                    <div
                      id="fin12"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          With the native integration of{" "}
                          <Link href="/products/microsoft-power-bi/">
                            Power BI
                          </Link>
                          , Excel, and Office 365 to Dynamics NAV ERP at no
                          additional costs, companies can have enhanced business
                          visualization and the visibility to instantly make
                          critical & informed decisions to streamline their
                          processes. Contextually relevant Power BI
                          reports/analytics and visualizations on dashboards
                          about contacts, vendors, customers, and invoices help
                          employees track almost all performance and view
                          business processes conveniently, providing a holistic
                          approach to streamline operations immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin13"
                        aria-expanded="false"
                        aria-controls="fin13"
                      >
                        <span>
                          Multi-currency Support & Mobile Service Management
                        </span>
                      </button>
                    </h3>
                    <div
                      id="fin13"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                        <p>
                          NAV offers seamless multi-currency support and makes
                          service operations management possible with optimum
                          efficiency, helping you maintain long-term
                          relationships with your customers. For organizations
                          seeking to expand their business to a global level,
                          Dynamics NAV can help you organize all the service
                          requests, service-contract management, and equipment
                          tracking, maintain stringent currency requirements,
                          and provide support for multiple languages and
                          regional specifications to scale business operations
                          beyond geographical borders.
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

      <section className="Solution-business-whys">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Pricing and licensing for Dynamics NAV</h2>
                <p>
                  NAV comes with a variety of capabilities for managing business
                  processes and operations. With 400K+ customers, Dynamics NAV
                  consists of some advanced and unique functions that no other
                  ERP solution provider in the market provides. Some
                  capabilities of Dynamics NAV are listed below with the
                  relevant subscription pack.{" "}
                </p>
              </header>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="parten-more parten-more-ss">
                <h3>Starter Pack</h3>
                <span>Features</span>
                <p>
                  Starter packs provide functionalities related to financial and
                  trade operations for the three users of the organization.
                  Besides managing finances, you can also manage supply chains,
                  sales, and projects. Additionally, users can get insights into
                  the product's processes and operations.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="parten-more  parten-more-ss">
                <h3>Extended Pack</h3>
                <span>Features</span>
                <p>
                  You should consider the Extended Pack if you are a growing
                  organization with complex and advanced business requirements.
                  As an add-on to the starter pack, it also lets you manage{" "}
                  <Link href="/industries/microsoft-cloud-for-manufacturing/">
                    manufacturing
                  </Link>{" "}
                  and warehouses. Further customizations can be requested from
                  the vendor partner if necessary.{" "}
                </p>
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
                <h3>
                  Are you unhappy with your current Dynamics NAV ERP partner?
                </h3>
                <p>Transform Your Business Strategy With Dynamics Square.</p>
                <p>
                  We have over 135+ NAV consultants with real-world industry
                  experience eager to help your business at every step of the
                  way.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to NAV Expert </span>
                    </a>
                  </Link>
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
                    src="/img/Microsoft-Dynamics-NAV-sede-pic.png"
                    className="fix-im"
                    alt="Dynamics 365 Finance Service"
                    width={520} height={513}
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
                            src="/img/Microsoft-Dynamics-NAV_video.png"
                            alt="Microsoft-Dynamics-NAV_video"
                            width={390} height={259}
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
                <h2>
                  Microsoft Dynamics <br /> NAV Partner UK{" "}
                </h2>
                <p>
                  Dynamics Square is with you to help your business grow,
                  evolve, transform, and perform better. Get the best Dynamics
                  NAV support now.
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
                    We can help you integrate Microsoft Dynamics NAV with your
                    enterprise practices efficiently.
                  </p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
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
                    Make the switch to Business Central if you want to improve
                    your Dynamics NAV account.
                  </p>
                  <div className="action-content">
                    <Link href="/dynamics-nav-to-business-central/">
                      <a>Get Started</a>
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
                    With our Navision{" "}
                    <Link href="/our-services/dynamics-365-support-services/">
                      Support
                    </Link>
                    , you can improve consistency by streamlining your
                    processes.
                  </p>
                  <div className="action-content">
                    <Link href="#exampleModal">
                      <a data-bs-toggle="modal">Get Started</a>
                    </Link>
                  </div>
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
              questions about Dynamics NAV?
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
                      Is Microsoft Dynamics the same as Navision?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, Microsoft Dynamics is the same as Navision and is
                        built on the same codebase, offering the same
                        functionalities and was first introduced in 1984 as a
                        simple tool with limited capabilities by Microsoft to
                        cater for the needs of managing finance, accounts,
                        warehouse, and debt management. From 1984 to 2017, NAV
                        received several updates with lots of features. However,
                        in 2018, Microsoft renamed Dynamics Navision as{" "}
                        <Link href="/products/dynamics-365-business-central/">
                          Dynamics 365 Business Central
                        </Link>{" "}
                        — an all-in-one cloud-based ERP software to manage your
                        overall business by helping you make smarter business
                        decisions.
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
                      How much does Microsoft NAV Cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        It is difficult for anyone to estimate the{" "}
                        <Link href="/dynamics-365-business-central-implementation/">
                          Dynamics NAV implementation
                        </Link>{" "}
                        costs since no such available data can be validated as
                        fixed pricing. Every business owner has different
                        requirements and needs Dynamics NAV functionalities
                        accordingly. For example, company size, industry type,
                        number of users, active discounts and offers, and the
                        storage required are the deciding factors for the
                        Microsoft Dynamics NAV implementation pricing. However,
                        for your ease of understanding and to provide you with
                        an idea, the pricing of the Dynamics NAV cloud begins at{" "}
                        <b>£180 a user/month</b>.
                      </p>
                      <p>
                        <b>Note : </b>Selecting your plan (Starter Pack or
                        Extended Pack) and the customizations will decide the
                        ultimate price. The users can pay their Dynamics NAV
                        support partner the total fee or a per month/use fee.
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
                      data-bs-target="#faq-content-3"
                    >
                      Why Choose Dynamics Square as Your Microsoft Dynamics NAV
                      Support Partner?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        With Dynamics NAV, we support SMBs in planning,
                        controlling, and optimizing business processes with the
                        help of efficient, transparent, automated, and reliable
                        NAV ERP solutions. We offer the best Dynamics NAV
                        support solutions on the market, so your business gains
                        transparency and you gain more control over business
                        processes, allowing your organization to grow over time.
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
                      Which industries does Dynamics NAV target to help?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics NAV is mainly for SMBs in various sectors, but
                        the most common industries are manufacturing (20.3%),
                        distribution (16.2%), and professional services (15.7%).
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
                      Is Dynamics NAV a cloud-based ERP system?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes. NAV is available on the cloud. It is hosted on the{" "}
                        <Link href="/products/microsoft-azure/">
                          Microsoft Azure
                        </Link>{" "}
                        hosting platform, allowing users with remote access to
                        NAV's full functionalities via Terminal Services or via
                        an HTML5 web client.
                      </p>
                      <p>
                        <b>Dynamics NAV Features:</b>
                      </p>
                      <ul>
                        <li>
                          Single dashboard to help manage business operations,
                          aid employees to be more productive and efficient, and
                          assist the entire business to grow at scale.
                        </li>
                        <li>
                          Permits smoother communication and data transfer,
                          allowing you and your employees to work
                          collaboratively to achieve the same goal.
                        </li>
                        <li>
                          Excellent drill-down capability in terms of its
                          integration with Excel, making it' easy to export or
                          copy data to Excel and vice versa.
                        </li>
                        <li>
                          The general ledger feature makes NAV ERP application
                          more flexible and adaptable.
                        </li>
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
                      data-bs-target="#faq-content-6"
                    >
                      Which operating system is suitable to run the Dynamics NAV
                      ERP software?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Since Microsoft designed it, NAV runs on Windows-based
                        client operating systems. But you can access the web
                        client on any device regardless of OS, provided the
                        device has a supported browser and an Internet
                        connection.
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
                      data-bs-target="#faq-content-7"
                    >
                      Can I run a NAV using my Mac workstation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        NAV does not support Mac native client applications. You
                        must set up Mac workstations for Terminal
                        Services/Windows virtualization to run it. Also, Mac
                        users have the option of running NAV using a
                        browser-based web client.
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
                      data-bs-target="#faq-content-8"
                    >
                      What kind of technical support is available for Dynamics
                      NAV from Dynamics Square?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        As a Microsoft Gold Partner, we not only offer you tech
                        support in multiple service level offerings but also
                        provide you with an extensive network of authorized
                        Dynamics NAV services along with in-depth implementation
                        and solution consulting from our highly trained and
                        experienced team of consultants.
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
                      data-bs-target="#faq-content-9"
                    >
                      Is Dynamics NAV customizable?
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes. Users can have a variety of default user
                        configurations and a full range of functional
                        capabilities. You only need to purchase the Application
                        Builder and Solution Developer (available as a la
                        carte). Connect with us; we're all ears for all your
                        solution customization needs.
                      </p>
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

export default MicrosoftDynamicsNAV;
