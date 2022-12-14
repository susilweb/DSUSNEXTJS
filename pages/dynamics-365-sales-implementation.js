import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
const SupplyChainImplementationServices = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>Dynamics 365 Sales implementation | Dynamics Square</title>
        <meta
          name="description"
          content="Proactively track your customer issues, and serve them in real-time with support and Dynamics 365 Sales implementation from Dynamics Square."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/dynamics-365-sales-implementation/"
        />
      </Head>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-4 align-self-center">
              <h1>Dynamics 365 Sales Implementation</h1>
              <p>
                With Dynamics 365 Sales, connect salespeople, optimize
                workflows, and simplify all your sales practices to drive new
                leads, sales orders, and accounts while reducing efforts and
                increasing sales team efficiency.{" "}
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to our Expert</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Sales-banner.png"
                alt="Dynamics 365 Sales Implementation"
                width={771} height={478}
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
                <h2>Your Trusted Dynamics 365 Sales Implementation Partner</h2>
                <p>
                  Dynamics Square follows smooth and personalized Dynamics 365
                  Sales implementation processes for any company size or
                  industry. Our core functional expertise is to provide you with
                  a highly customized, scalable, and flexible Dynamics 365 Sales
                  solution that understands your business and helps you grow at
                  pace.
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
                        <div className="wr-in"></div>
                        <span>Understand Your Customers</span>
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
                          Drive smoother customer engagement. Improve sales by
                          truly understanding your customers. Enabling seamless
                          collaboration between your sales team and the
                          customers helps you build long-term relationships.
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
                        <div className="wr-in"></div>
                        <span>Empower Your Salespeople</span>
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
                          Boost the morale of your salespeople with{" "}
                          <Link href="/products/microsoft-dynamics-365-sales/">
                            Dynamics 365 Sales
                          </Link>
                          ' Streamlined data intelligence, enabling your sales
                          team to quickly respond to customer queries, and
                          track, manage, and return orders.
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in"></div>
                        <span>Deliver Exceptional Sales Experience</span>
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
                          Improve the performance of your entire sales by
                          delivering a 360-degree sales experience to your
                          customers with Dynamics 365 Sales implementation.
                          Provide customer-centric sales engagements, leading
                          you to earn lifetime loyalty and higher revenue.
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
                <div className="accordion" id="accnewss">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fins1"
                        aria-expanded="false"
                        aria-controls="fins1"
                      >
                        <div className="wr-in"></div>
                        <span>Make Sales Operations Faster</span>
                      </button>
                    </h3>
                    <div
                      id="fins1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        <p>
                          Boost your sales by implementing Dynamics 365 Sales
                          and get real-time notifications on your customer
                          engagements to stay updated. Better manage to upsell
                          and cross-sell scenarios along with improved cash flow
                          management.
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
                        data-bs-target="#fins2"
                        aria-expanded="false"
                        aria-controls="fins2"
                      >
                        <div className="wr-in"></div>
                        <span>Increase Your ROI</span>
                      </button>
                    </h3>
                    <div
                      id="fins2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        <p>
                          Increase your ROI by setting up SMART (specific,
                          measurable, achievable, relevant, and time-bound) and
                          well-defined ROI-goals with the intelligence of
                          Dynamics 365 Sales.
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
                        data-bs-target="#fins3"
                        aria-expanded="false"
                        aria-controls="fins3"
                      >
                        <div className="wr-in"></div>
                        <span>
                          Build Strong Relationships with Your Customers
                        </span>
                      </button>
                    </h3>
                    <div
                      id="fins3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewss"
                    >
                      <div className="accordion-body">
                        <p>
                          Make your sales organization more effective by
                          allowing them to spend more time engaging with
                          customers and developing relationships. For example,
                          by providing a unified customer view for better
                          understanding, Dynamics 365 Sales enables you to
                          streamline and automate critical sales processes and
                          empower your sales team with intelligent
                          recommendations based on actionable insights.
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

      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="side-heading-custom-01">
                <h2>Additional Sales Apps to Boost Your Sales</h2>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="side-heading-custom-01">
                <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>
                  Sales Hub App
                </h3>
              </div>
              <div className="custom-p-001" style={{ paddingBottom: "24px" }}>
                <p>
                  You can get started quickly with Dynamics 365 Sales with this
                  free and preinstalled app that has several core and premium
                  features from Microsoft. And complete tasks on the go with the
                  sales Hub app's modern, seamless, and intuitive user interface
                  (UI). The app is available for desktops as well as mobile
                  devices.
                </p>
              </div>
              <div className="side-heading-custom-01">
                <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>
                  Sales Professional App
                </h3>
              </div>
              <div className="custom-p-001">
                <p>
                  By easily customizing tables, dashboards, forms, views,
                  charts, and business processes without writing any code, the
                  sales professional app is a modular app designed by Microsoft
                  for your sales professionals and sales managers to perform
                  administration-related tasks seamlessly.
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
                <h3>Implement Dynamics 365 Sales & Close Deals Faster</h3>
                <p>
                  Dynamics 365 Sales is your one-stop sales solution. Let's talk
                  and discuss your business needs so that we can implement the
                  best Dynamics 365 solution for you.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to our experts now!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box-6-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box-6-pic">
                <Image src="/img/imp-left.svg" alt="imp-left.svg" width={531} height={771} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box-6">
                <div className="box-6-top-head">
                  <h2>Our Dynamics 365 Sales Implementation Methodology</h2>
                  <p>
                    Microsoft's Sure Step Methodology is the cornerstone of our
                    custom approach to streamline your business processes and
                    guarantee maximum security and transparency.
                  </p>
                  <p>
                    <b>
                      Dynamics 365 Sales Implementation: Our Step-By-Step
                      Process
                    </b>
                  </p>
                </div>
                <div className="box-6-bottom">
                  <div className="posi-bottm">
                    <Swiper
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                      }}
                      loop={true}
                      spaceBetween={10}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Thumbs, Autoplay]}
                      className="mySwiper2"
                    >
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>ANALYSIS PHASE</h4>
                          <p>
                            Following an in-depth analysis of your project idea
                            and requirements, we have created a plan mirroring
                            your specific business practices.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>DESIGNING PHASE</h4>
                          <p>
                            Developing your customization, configuration, and
                            integration requirements follow the project analysis
                            step.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>DEVELOPMENT PHASE</h4>
                          <p>
                            As part of this step, we develop your project, which
                            includes custom coding, interface design, system
                            integration, data migration, and other related
                            tasks.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>DEPLOYMENT PHASE</h4>
                          <p>
                            This step ensures the final deployment of your
                            project, including essential training and user
                            acceptance testing (UAT).
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-bottom">
                          <h4>POST-GO-LIVE SUPPORT</h4>
                          <p>
                            This final step involves end-user training and
                            technical support whenever necessary, ensuring your
                            system works as intended.
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="posi">
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      loop={false}
                      spaceBetween={5}
                      slidesPerView={5}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-1-icons.svg"
                            className="overmain-thumb"
                            alt="Component-1-icons"
                          />
                          <img
                            src="/img/Component-1-iconss.svg"
                            className="over"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-2.svg"
                            className="overmain-thumb-1"
                            alt="Component-2"
                          />
                          <img
                            src="/img/Component-2-iconss.svg"
                            className="over-1"
                            alt="Component-2-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-3.svg"
                            className="overmain-thumb-2"
                            alt="Component-3"
                          />
                          <img
                            src="/img/Component-3-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-4.svg"
                            className="overmain-thumb-3"
                            alt="Component-4"
                          />
                          <img
                            src="/img/Component-4-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="box-6-pics">
                          <img
                            src="/img/Component-5.svg"
                            className="overmain-thumb-4"
                            alt="Component-5"
                          />
                          <img
                            src="/img/Component-5-iconss.svg"
                            className="over-1"
                            alt="Component-1-icons-red"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-3334">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>
                  Why should Dynamics Square be Your Dynamics 365 Sales
                  Implementation Partner?
                </h2>
                <p>
                  Being a certified Microsoft{" "}
                  <Link href="/products/microsoft-dynamics-365/">
                    Dynamics 365 Gold Partner
                  </Link>{" "}
                  and having years of industry experience, our team can help
                  improve your operational flow, simplify processes, and drive
                  efficient results through our stress-free Dynamics 365 Sales
                  implementation process and additional support.
                </p>
              </header>
            </div>
          </div>
          <div className="row pad15x">
            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/img/microsft-p-icons.svg" alt="microsft-p-icons" />
                  <h3>
                    Authorized Microsoft <br />
                    Gold Partner
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    We are an authorized Gold Microsoft Partner that offers
                    business-specific solutions that are based on a standard
                    approach, agile practices, and modern-embedded strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/img/Group997.svg" alt="Group997.svg" />
                  <h3>
                    Proficient <br />
                    Team
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    We are a group of highly skilled and experienced{" "}
                    <Link href="/">Dynamics 365 consultants</Link>, certified by
                    Microsoft, and have years of experience implementing the
                    platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/img/Group772.svg" alt="Group772" />
                  <h3>
                    Dedicated <br />
                    Support
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    From the planning & analysis phase to user training and
                    post-implementation, we offer a dedicated support model that
                    helps our clients maintain continuity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/img/Group1003.svg" alt="Group1003" />
                  <h3>
                    Lower Implementation Cost <br />
                    and Exclusive Offers
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    In comparison to other Microsoft implementation partners, we
                    offer a 40% discount on high-end and custom-configured
                    implementations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img
                    src="/img/proffesionalserviceicon.svg"
                    alt="proffesionalserviceicon"
                  />
                  <h3>
                    Custom
                    <br />
                    Configured
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    Our domain-specific solutions can support revenue-generating
                    campaigns based on your current process flow and business
                    goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/img/Group1000.svg" alt="Group1000" />
                  <h3>
                    Flexible <br />
                    Delivery
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    Understanding the time constraints of your project, we
                    ensure and deliver your project within the committed
                    deadline.
                  </p>
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
                  Why should Dynamics Square be Your Dynamics 365 Sales
                  Implementation Partner?
                </h2>
                <p>Click through our FAQs for best answers!</p>
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
                      How can I use the inbuilt AI capabilities in D365 Sales to
                      improve forecast accuracy and improve my overall sales
                      performance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        D365 Sales is built on intelligent capabilities,
                        allowing sales managers to easily improve forecast
                        accuracy, identify at-risk opportunities, and increase
                        win rates within just a few clicks using its dynamic and
                        user-friendly user interface that provides
                        recommendations accordingly.
                      </p>
                      <p>
                        Bring your data from Dynamics 365, Office 365, and
                        LinkedIn together and share additional insights with
                        your sales team and managers.
                      </p>
                      <p>
                        <b>
                          Inbuilt AI capabilities in D365 Sales can help your
                          sales teams in the:
                        </b>
                      </p>
                      <ul>
                        <li>
                          <b>Focusing on the organic deals </b>- Meaning the
                          deals that get converted to real customers.
                        </li>
                        <br />
                        <li>
                          <b>Connecting with potential buyers </b>- This AI
                          feature in D365 Sales shows your sales teams the
                          colleagues who are in interaction with a prospect and
                          can put out effective info based on data from Office
                          365.
                        </li>
                        <br />
                        <li>
                          <b>Keeping track of customer relationships </b>- Using
                          AI for Sales in Dynamics 365 Sales, salespeople can
                          better engage with high-priority customers based on
                          the data from various sources that reveal relationship
                          health and risks in real-time.
                        </li>
                        <br />
                        <li>
                          <b>Personalize customer engagement </b>- Intelligent
                          capabilities in D365 for Sales empower your sales team
                          to deliver personalized and relevant information or
                          recommend talking points for the next actions to take
                          with customers.
                        </li>
                        <br />
                        <li>
                          <b>Sales Execution Automation </b>- Enhance sales
                          teams' productivity based on contextual insights that
                          accurately suggest when and how to create new records.
                          For example, creating new contacts and activities
                          using info gleaned from notes entered by salespeople.{" "}
                        </li>
                        <br />
                        <li>
                          <b>
                            Understand sales performance and lead proactively{" "}
                          </b>
                          - This allows your sales managers to grasp how sales
                          are performing and coach themselves effectively on
                          sales engagement and key productivity metrics.
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
                      data-bs-target="#faq-content-2"
                    >
                      How can Dynamics 365 Sales help me identify and
                      orchestrate B2B buying journey insights?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Sales professional is a
                        cloud-based sales management and customer relationship
                        management (CRM) app that effectively helps you identify
                        customer insights that you can act on by unifying
                        critical data.
                      </p>
                      <p>
                        Embedded conversation intelligence based on sales
                        insights enables your sales team for real-time
                        exploration of the customer journey through each stage
                        of the sales pipeline.
                      </p>
                      <p>
                        Additionally, intuitive visualizations can provide
                        crucial insights into the purchase experience and
                        identify and proactively resolve sales performance
                        problems.
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
                      What can I achieve if I choose Dynamics 365 Sales instead
                      of SAP Sales Cloud or Salesforce?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        If you are looking for a robust system that can help you
                        zero in on the right leads, contacts, and opportunities,
                        help you nurture your sales from leads, and build your
                        team's sales pipeline, there's no software other than
                        Dynamics 365 Sales that can do it all proactively.
                      </p>
                      <p>
                        And if you believe Salesforce or SAP Sales Cloud has a
                        leg up on Dynamics 365 Sales, you're probably
                        misinformed since{" "}
                        <strong>
                          Gartner Magic Quadrant research done in 2021 for Sales
                          Force Automation
                        </strong>{" "}
                        concluded that Microsoft Dynamics 365 for Sales is “the
                        best bet” for{" "}
                        <Link href="/products/microsoft-dynamics-crm/">
                          CRM
                        </Link>
                        .
                      </p>
                      <p>
                        So, without a doubt, here is what you can achieve
                        seamlessly with D365 sales:
                      </p>
                      <ul>
                        <li>
                          Client management, order management, and competitors'
                          management.
                        </li>
                        <li>
                          Insight-based sales acceleration, engagement platform,
                          and proactive activity information.
                        </li>
                        <li>
                          Forecasting and pipeline intelligence, facilitating
                          digital selling, and pipeline manager workspace.
                        </li>
                        <li>
                          Proposal management, lead management, and product
                          information management.
                        </li>
                        <li>
                          Process manufacturing support, Microsoft Relationship
                          Sales integration, and process automation.
                        </li>
                        <li>
                          Visual insights, simplified opportunity-to-invoice
                          process, and pipeline management.
                        </li>
                        <li>
                          Customer 360-degree views, relationship intelligence,
                          and business process flow.
                        </li>
                        <li>
                          Document management, Outlook add-in, and Microsoft
                          Teams collaboration.
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
                      data-bs-target="#faq-content-4"
                    >
                      What is guided selling within Dynamics 365 Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        B2B selling is becoming more challenging, and leading
                        businesses are supporting sales teams in achieving
                        improvements by offering prescriptive recommendations
                        for opportunity progression.
                      </p>
                      <p>
                        D365 Sales' guided selling capability delivers
                        insight-based sales acceleration through an engagement
                        platform, which is an intelligent framework that helps
                        your salespeople comprehend and respond to client
                        inquiries with an interactive and value-driven approach
                        inspired by real-time data.
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
                      Does D365 Sales use AI for planning and inventory?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, organizations can use D365 Sales' dynamic planning
                        capabilities to cut costs and increase inventory
                        efficiency, accurate scheduling, and routing. Embedded
                        forecasting and pipeline intelligence combine real-time
                        and historical data to improve sales and inventories in
                        real-time.
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
                      How much does it cost to implement Dynamics 365 Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The cost of Dynamics 365 Sales depends on the size of
                        your organization or the number of salespeople and the
                        number of purchased licenses. But for your
                        understanding, clients generally spend $5,000 to $10,000
                        for an annual subscription, while $15,000 for merely the
                        installation of the D365 Sales project.
                      </p>
                      <p>See Also Other CRM:</p>
                      <ul>
                        <li>
                          <Link href="/products/microsoft-dynamics-365-customer-service/">
                            Dynamics 365 for Customer Service
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/microsoft-dynamics-365-marketing/">
                            Dynamics 365 for Marketing
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/microsoft-dynamics-365-field-service/">
                            Dynamics 365 Field Service
                          </Link>
                        </li>
                      </ul>
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

export default SupplyChainImplementationServices;
