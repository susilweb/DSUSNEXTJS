import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import Blog from "../../components/Blog";
import ModalVideo from "react-modal-video";
const Sales = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 for Sales | A Modern CRM Solution</title>
        <meta
          name="description"
          content="Attract & engage potential customer base and connect & serve them in real-time with omnichannel efficiency. With Dynamics 365 for Sales, uplift your sales capabilities, improve your sales turnover, and drive profitability."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/microsoft-dynamics-365-sales/"
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
              <h1>Dynamics 365 Sales</h1>
              <p>
                Attract & engage potential customer base and connect & serve
                them in real-time with omnichannel efficiency. With Dynamics 365
                Sales, uplift your sales capabilities, improve your sales
                turnover, and drive profitability.
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
              <Image src="/img/Sales-banner.png" alt="Dynamics 365 Sales" width={771} height={478} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>What is dynamics 365 Sales?</h2>
                <p>
                  Microsoft Dynamics 365 Sales is referred to as a highly
                  configured application to manage your day-to-day sales
                  operations from ordering to warehousing and supply chain to
                  customers all through collaborated teamwork, omnichannel
                  efficiency, and AI-based sales analytics. Leveraging{" "}
                  <Link href="/dynamics-365-sales-insights-an-overview/">
                    Sales insights
                  </Link>{" "}
                  , enterprises can make informed decisions, strategize their
                  sales process, and close deals faster.
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
                          <img src="/img/sales-hub-app.svg" alt="icons" />
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
                        <p>
                          Developed on unified interface framework configured
                          with responsiveness that facilitates users with
                          interactive app view and navigation for any screen or
                          device. The Sales Hub app is designed to be used by
                          both desktops and mobile devices and comes with
                          Microsoft Dynamics 365 Sales Enterprise Plan.
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
                        <p>
                          Sales Professional App is designed similar to the
                          Sales Hub app. The only difference is- the entities
                          that Sales Professional app comprises are a subset of
                          entities included in the Sales Enterprise licensing.
                          This app comes and can be availed of with Microsoft
                          Dynamics 365 Sales Professional licensing Plan.
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
            <div className="col-lg-5 align-self-center">
              <div className="wy-sultion-left-head">
                <h2>Dynamics 365 For Sales Features</h2>
                <h3>
                  Why Configure Microsoft Dynamics 365 Sales for Your Business?
                </h3>
              </div>
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
                        <p>
                          Leverage integrated view of customer and sales data to
                          attain real-time updates whereby connect and engage
                          with right customers at right time to drive improved
                          conversions.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Drive Team <br />
                        Collaboration
                      </h3>
                      <div className="overlay">
                        <p>
                          Dynamics 365 Sales enables your sales team to
                          seamlessly engage and collaborate in real-time. Such
                          real-time collaboration helps your salespeople to
                          ensure success and drive profitability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Close <br />
                        More Deals
                      </h3>
                      <div className="overlay">
                        <p>
                          Offer omnichannel experience to your customers and
                          empower your workforce to connect and engage with
                          potential customers leveraging the cross-network
                          facilitation to close more deals.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Better <br />
                        Decision Making
                      </h3>
                      <div className="overlay">
                        <p>
                          Bring automation in your sales practices, empower your
                          workforce to make improved decisions utilizing data
                          intelligence and access to in-depth sales analytics in
                          real-time to maximize growth potentials.
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
                    src="/img/sales-side image.png"
                    className="fix-im"
                    alt="Dynamics 365 Sales Service"
                    width={561} height={531}
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <Link href="#javascript:void(0)">
                        <a onClick={() => setOpen(true)}>
                          <Image
                            src="/img/Video-Sales.png"
                            alt="sales-video-Sales"
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
                <h2>Dynamics 365 Sales Service</h2>
                <p>
                  We offer a full range of services to support you on your
                  Dynamics 365 Sales journey including implementation, upgrade
                  and support.
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
                  <h3>Dynamics 365 Sales Implementation</h3>
                  <p>
                    Implement Dynamics 365 Sales to empower your Salespeople and
                    strengthen your sales practices.
                  </p>
                  <div className="action-content">
                    <Link href="/dynamics-365-sales-implementation/">
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
                  <h3>Dynamics 365 Sales Upgrade</h3>
                  <p>
                    Level up your sales processes and maximize your
                    profitability by upgrading your system with D365 Sales.
                  </p>
                  <div className="action-content">
                    <Link href="/our-services/dynamics-365-upgrade-services/">
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
                  <h3>Dynamics 365 Sales Support</h3>
                  <p>
                    Ensure continuous approach and drive smoother sales
                    experience with our Dynamics 365 Sales support services.
                  </p>
                  <div className="action-content">
                    <Link href="/our-services/dynamics-365-support-services/">
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
                <h2>Dynamics 365 Sales Pricing</h2>
                <p>
                  Choose The Applications That Are Right For Your Business
                  Needs.
                </p>
              </header>
            </div>
          </div>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box box-99">
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
              <div className="box box-99">
                <h3>Dynamics 365 Sales Enterprise</h3>
                <div className="price">
                  <sup>$</sup>95<span>Per User/Month</span>
                </div>
                <p className="small-tt">
                  Industry-leading sales force automation with contextual
                  insights and advanced customization capabilities
                </p>
                <ul>
                  <li>Now includes limited capacity of AI features</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box box-99">
                <h3>Dynamics 365 Sales Premium</h3>
                <div className="price">
                  <sup>$</sup>135<span>Per User/Month</span>
                </div>
                <p className="small-tt">
                  Dynamics 365 Sales Enterprise plus prebuilt customizable
                  intelligence solutions for sellers and managers
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <Link href="#exampleModal">
                  <a data-bs-toggle="modal" className="btn-get-red">
                    <span>Get Power Apps Now</span>
                  </a>
                </Link>
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
                <p>
                  Drive new business challenges by implementing Dynamics 365
                  Sales
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started Now</span>
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
                      What is Microsoft Dynamics 365 Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Sales is designed to accelerate
                        and manage your sales campaigns with in-built AI
                        insights and modern customer management facilitation. It
                        helps to automate your sales or customer data to engage
                        and drive the right customers at right time using any
                        device whether desktop, mobile, or tablet. With Dynamics
                        365 Sales, proactively manage your customers,
                        collaborate with your team, and drive profitability.
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
                      What is Dynamics 365 for Sales used for?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <Link href="/products/microsoft-dynamics-365/">
                          Dynamics 365
                        </Link>{" "}
                        is referred to as a powerful sales management
                        application integrated with AI capabilities that enables
                        both the salespeople and sales managers to access and
                        leverage the sales insights, customer data, and other
                        key analytics that help them to connect and engage
                        potential customers in real-time and serve them a
                        customized solution they anticipate. With Dynamics 365
                        Sales, enterprises can empower their sales workforce to
                        make quick decisions, ensure efficient team
                        collaboration, and drive campaign success.
                      </p>
                      <p>
                        To know how to leverage Dynamics 365 for your Sales
                        practices, connect with us, we can help.
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
                      How does Microsoft Dynamics 365 help in Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        With Microsoft Dynamics 365, enterprises can manage
                        their end-to-end sales processes, automate their data,
                        improve customer experience, and eventually impact their
                        revenue generation. This sales management application
                        helps enterprises streamline their sales and customer
                        data, seamlessly engage customers when they are in need,
                        and serve them a custom yet quality deal.
                      </p>
                      <p>
                        Dynamics 365 sales comes with highly configured sales
                        analytics that helps everyone involved in your sales
                        campaigns to make productive decisions instantly and
                        drive productivity. To understand how Dynamics 365 can
                        help you drive sales, customers, and close deals faster,
                        contact us today, our expert can help you to understand
                        and reveal the best sales management solution for your
                        business.
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
                      Is Dynamics 365 Sales available on-premises?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics 365 Sales is configured to be implemented for
                        both the{" "}
                        <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">
                          on-premises
                        </Link>{" "}
                        and on-cloud facilitation for Dynamics Sales Enterprise
                        plan. When it comes to deploying Sales Professional
                        plan, you are left with on-cloud facilitation only.
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
                      How much does it cost to implement Microsoft Dynamics 365
                      for Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics 365 Sales helps to transform your entire sales
                        model. It enables businesses to improve and uplift their
                        digital sales experience. They can connect and engage
                        the actual customers in real-time. With centralized
                        data, Dynamics 365 Sales enables people to collaborate
                        and process the same customer data in real-time which
                        helps to streamline and accelerate sales.
                      </p>
                      <p>
                        Instant sales reports and other actionable insights help
                        everyone in the sales team to make informed decisions in
                        real-time as Dynamics 365 sales eliminate the need for
                        manual data processing and repetitive tasks.
                      </p>
                      <p>
                        When you get handy with sales insights and customer
                        behavior in real-time, it helps convert the leads and
                        close the sales faster. Sales managers can monitor and
                        control the sales process and can suggest supporting the
                        ongoing sales process or campaign.
                      </p>
                      <p>
                        With predictive insights, salespeople can manage sales,
                        customers, and can determine their priorities to impact
                        and accelerate sales and profitability.
                      </p>
                      <p>
                        <b>Dynamics 365 Sales Professional</b>
                      </p>
                      <p>
                        For first Dynamics 365 App - 48 pounds/ per user
                        (approx.)
                      </p>
                      <p>
                        For Subsequent Dynamics 365 App - 15 pounds/per user
                        (approx.)
                      </p>
                      <p>
                        <b>Dynamics 365 Sales Enterprise</b>
                      </p>
                      <p>
                        For First Dynamics 365 App - 70 Pounds/per user
                        (approx.)
                      </p>
                      <p>
                        For Subsequent Dynamics 365 App - 15 pounds/per user
                        (approx.)
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
                      How does Dynamics 365 Sales Works?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics 365 Sales is designed and configured to manage
                        your end-to-end sales practices, optimize resources, and
                        engage customers to drive efficient sales and gain
                        improved customers' experience. Leveraging sales
                        reports, customer analytics, and other key actionable
                        insights, enterprises can make productive decisions with
                        real-time efficiency.
                      </p>
                      <p>
                        These reports & analytics helps to understand customer
                        behavior, know production status, inventory flow, and
                        more. Microsoft's Sales solution empowers your
                        salespeople to prioritize their tasks, monitor & control
                        their processes, and drive profitability.
                      </p>
                      <p>
                        If you are seeking to improve your sales practices, we
                        can let you know how Dynamics 365 Sales could be a
                        fruitful deal to support your concurrent as well as
                        future sales practices.
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
                      How do I access Dynamics 365 Sales Professional?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        To access Dynamics 365 Sales Professional, you are
                        required to sign in first. For doing so, simply follow:
                        Microsoft 365 App Launcher-Dynamics 365 Make sure, you
                        have availed of a subscription for Dynamics 365 Sales
                        Professional plan. Further, navigate to Dynamics 365
                        home page and select Sales Professional. Now, your
                        system is ready to start optimizing things. To learn
                        more, connect with our professionals today, we are here
                        to help.
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
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Explore Our Recent Blogs & Resources</h2>
                <p>
                  Whether you are a start-up, an SMB, or an enterprise, the
                  Dynamics Square blog is the best place to get inspired and
                  learn more about Microsoft Business Applications.
                </p>
              </header>
            </div>
          </div>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <Link href="/pdf/6-strategies-to-boost-sales-productivity.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>6 Strategies
                        to Boost Sales Productivity
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Building-relationships-in-todays-sales-environment.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Building
                        Relationships in Today's Sales Environment
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Dynamics-365-Sales-Professional.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Dynamics 365
                        Sales Professional
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Dynamics365SalesKeyCapabilitiesOverviewFINAL63017.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Key Capability
                        of Dynamics 365 Sales
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf">
                      <a target="_blank">
                        <i className="bi bi-file-earmark-pdf"></i>Licensing
                        Guide
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

export default Sales;
