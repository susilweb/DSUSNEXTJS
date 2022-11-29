import React, { useState } from "react";
import Head from "next/head";
// import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const Startup = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Dynamics 365 For Professional Services | Dynamics Square</title>
        <meta
          name="description"
          content="Implement Dynamics 365 For Professional Services to centralize, control, &amp; manage your services, drive innovation &amp; maximize delivery."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.cam/industries/professional-services/"
        />
    <meta name="robots" content="noindex,nofollow" />
      </Head>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qLjfAsQRWaM"
        onClose={() => setOpen(false)}
      /> */}
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Dynamics 365 <br />
                  For Professional Services
                </h1>
                <p>
                  Centralize, Control, & Manage Your Professional Services To
                  Drive Innovation & Maximize Your Delivery By Implementing
                  Microsoft Dynamics 365 For Professional Services.
                </p>
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
              <div className="col-lg-6 align-self-center">
                <img
                  src="/img/professional service banner.png"
                  alt="Dynamics 365 For Professional Services"
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
                    Boost Your Professional Services <br />
                    with Dynamics 365
                  </h2>
                  <p>
                    Bring automation in your project & services, control &
                    manage your budget, and enable transparency in time &
                    expenses management with Microsoft Dynamics 365 for
                    Professional Services - an all-in-one solution for your
                    specific industry.
                  </p>{" "}
                  <p>
                    Industry experts at Dynamics Square can help to accelerate
                    process flow, improve efficiency level, and gain accuracy &
                    seamlessness across your industrial space. By configuring
                    your system with advanced Professional service capabilities,
                    we can strengthen your operational environment to level up
                    your professional service practices and start maximizing the
                    potential growth and scalability.
                  </p>
                </header>
              </div>
            </div>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>
                  How Dynamics 365 for Professional Services
                  <br />
                  Can Help to Level-Up Your Industrial Practices <br />
                </h2>
                <p>
                  To drive a strategic approach and roll-out efficiency across
                  your organization while optimizing process flow and ensuring
                  on-time delivery, implementing Microsoft Dynamics 365
                  solutions for Professional Services could be a
                  profitability-driven, highly efficient, and cost-effective
                  deal for your business.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        With Professional Service industry solutions,
                        enterprises can track, manage, and control their entire
                        processes while optimizing resource utilization,
                        ensuring real-time reporting & invoicing, and enabling
                        automation throughout their practices.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Leveraging highly integrated and custom-configured
                        solutions implemented for the Professional Service
                        industry, the Management team can ensure their focus
                        more on project completion instead of sparing time in
                        controlling, managing, assigning, and administration.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Professional Service industry solution is designed to
                        empower everyone in your organization to deliver with
                        maximum potential capability. With project automation,
                        everyone in your organization can stay updated with
                        actual project status along with involved and assigned
                        activities with real-time efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call_to_action call_to_action-height">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="call_to_action-right over-img">
                  <img src="/img/MaskGroup8.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>Talk to Our Expert Team</h3>
                  <p>
                    Discover and drive new business capabilities for your
                    professional service industry. Let's discuss and come up
                    with a highly relevant solution for your industry.
                  </p>
                  <div className="m-o-t m-o-t-inde">
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
            </div>
          </div>
        </section>
        <section className="industry_service_bottoms">
          <div className="container">
            <header className="section-header">
              <h2>
                Dynamics 365 Solutions <br />
                For Your Professional Services{" "}
              </h2>
              <p>
                How professional services firms can use Microsoft Dynamics 365
                to transform their business
              </p>
              <br /> <br />
            </header>
            <div className="row position-relative">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-commerce_user-experience.svg"
                      alt="icons-commerce_user-experienc.svg"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Custom CRM Solution</h3>
                    <p>
                      With real-time access into your customers' data, boost
                      your customer engagement in real-time, accelerate lead
                      generation, and ensure opportunity management, and more.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_Customer-Feedback- (1).svg"
                      alt="Business Central Upgrade-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>HR & Payroll</h3>
                    <p>
                      Engage &amp; onboard the right people, optimize &amp;
                      improve your resource utilization, instantly resolve
                      issues, and increase your user adaption to impact your HRM
                      facilitation and improve your efficiency level.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/connect-collaborate-1.svg"
                      alt="connect-collaborate-1"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Employee Collaboration Portal</h3>
                    <p>
                      Allow your workforce to carry out effective communication
                      and engagement in real-time across your organization with
                      the help of streamlined data to stimulate growth and
                      scalability.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-implementation-service_Sales-.svg"
                      alt="icons-implementation-service_Sales-"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Business Intelligence Analytics</h3>
                    <p>
                      Leveraging built-in intelligence configured with IoT
                      experience, enterprises can predict data, create high-end
                      reports 7 key analytics to strengthen their workforce and
                      make instant informed decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-implementation-service_HR.svg"
                      alt="icons-implementation-service_HR"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Custom Development</h3>
                    <p>
                      With highly customized solutions configured to improve
                      process optimization and accelerate service flow,
                      enterprises can speed up their operational growth and
                      maximize their revenue outcomes.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Budgeting-Planning.svg"
                      alt="Budgeting-Planning"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Budgeting & Planning</h3>
                    <p>
                      With the help of instant AI insights, enterprises can
                      forecast their data, prepare financial reports, budget
                      plans, and more to drive highly elevated results with
                      maximized scalability.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Time-Expense-Management.svg"
                      alt="Time-Expense-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Time & Expense Management</h3>
                    <p>
                      Your Professional Service industry solution can be
                      implemented suited to your specific domain to effectively
                      ensure time &amp; expenses management and to produce
                      maximized results.
                    </p>
                  </div>
                </div>

                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/control-icon-analysis.svg"
                      alt="control-icon-analysis"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Control & Analysis</h3>
                    <p>
                      By effectively leveraging the past business data or
                      project performance with the help of{" "}
                      <a href="/products/erp/">ERP solutions</a> for the
                      Professional Service industry, enterprises can gain
                      accurate analytics to achieve project success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action-center hero-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="call-to-action-content">
                  <h3>
                    How Microsoft's Professional Service Solution Can Help Your
                    Business to Uplift High
                  </h3>
                  <p>
                    If your processes are compromising at some level, nothing
                    will work out, and making productive decisions in business
                    can lead your business toward a productive path. Share your
                    pain business points with us, experts at Dynamics Square can
                    reveal your business requirement and suggest a productive
                    solution for your business.
                  </p>
                  <div className="text-center m-o-t m-o-t-hv">
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
        <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <img
                      src="/img/proffesional service side.png"
                      className="fix-im"
                      alt="proffesional service side"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          data-bs-toggle="modal"
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/proffesional video-service.png"
                            alt="proffesional video-service"
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
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h2>
                    Get Expert Consultation to effectively carry out your
                    Professional Service
                    <br />
                  </h2>
                  <p>
                    If you won't support your regularly increasing practices in
                    a timely manner, your productivity will start suffering
                    soon.{" "}
                    <a href="/products/microsoft-dynamics-365/">
                      Dynamics 365 solutions
                    </a>{" "}
                    for Professional Services can help your business to
                    strategically process, monitor, and control your operations.
                    Connect and share your concern with our experts, we can help
                    to implement your domain-specific solution for your
                    business.
                  </p>
                  <div className="text-lg-start mm-t">
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
            </div>
          </div>
        </section>

        <section className="industry-more-sec">
          <div className="container">
            <header className="section-header">
              <h2>Explore Other Industries</h2>
            </header>
            <div className="row mobile-margin-01">
              <div className="col-lg-12">
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    <Swiper
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1300: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1400: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                      }}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, FreeMode, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <a href="/industries/food-and-beverages/">
                              <div className="img-wrp">
                                <img
                                  src="/img/Food-and-beverage.svg"
                                  alt="Food-and-beverage"
                                />
                              </div>
                              <div className="text-wrp-content">
                                <h3>Food & Beverages</h3>
                                <p>
                                  Efficiently manage your inventory and supply
                                  chain by implementing Dynamics 365 for Food
                                  and Beverages business.
                                </p>
                                <span>Explore Now</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/microsoft-cloud-for-nonprofit/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/NotforProfit.svg"
                                    alt="NotforProfit"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Not for Profit</h3>
                                  <p>
                                    Bring Transparency And Drive Efficiency In
                                    Your Non-Profit Organization With Microsoft
                                    Dynamics 365 For Charities.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/ecommerce/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/Ecommerce.svg"
                                    alt="Ecommerce"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>E-Commerce</h3>
                                  <p>
                                    Optimize Your End-To-End Ecommerce Processes
                                    And Improve Your Customer Experience.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/microsoft-cloud-for-manufacturing/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/microsoft-cloud-for-manufacturing.svg"
                                    alt="microsoft-cloud-for-manufacturing"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Manufacturing & Distribution</h3>
                                  <p>
                                    Keep track of your production lines and
                                    bring transparency with Microsoft Dynamics
                                    365 for Manufacturing and Distribution.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <a href="/industries/startups/">
                                <div className="img-wrp">
                                  <img
                                    src="/img/start-up.svg"
                                    alt="start-up"
                                  />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Startups</h3>
                                  <p>
                                    Leverage maximum possible resources to
                                    manage end-to-end business processes for
                                    your Startup with Microsoft Dynamics 365.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blogs-extra">
          <div className="container">
            <header className="section-header">
              <h2>
                Check out our Best Resources
                <br />
                for Business Central
              </h2>
            </header>
            <div className="row top-2 gx-5">
              {/* <Blog /> */}
              <div className="col-lg-6 align-self-center">
                <img
                  src="/img/n/Dynamics-365-for-professional-services.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="solution-faq faq">
          <div className="container">
            <header className="section-header">
              <h3>
                Have you got
                <br />
                questions about Professional Services industry?
              </h3>
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
                        What is Microsoft Dynamics 365 for Professional Services
                        industry?
                      </button>
                    </h3>
                    <div
                      id="faq-content-1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                        Microsoft Dynamics 365 for Professional Service is a
                        business solution specially designed and configured for
                        the Professional service industry to seamlessly manage,
                        control, and drive end-to-end practices from resource
                        optimization to process acceleration, instantly
                        resolving issues, client management to workforce
                        empowerment.
                        <br />
                        <br />
                        Team of Dynamics Square can enable enterprises to drive
                        project automation, improve financial visibility, ensure
                        seamless client or vendor management, and effective
                        customer engagement. Enterprises can empower their
                        workforce from top management to the executive level to
                        stay updated with the recent activity of the project,
                        event, or task. With built-in intelligence, everyone can
                        make productive decisions that support and ensure
                        overall organizational success.
                        <br />
                        <br />
                        For further information or to implement a Professional
                        Services <a href="/industries/">industry solution</a>,
                        connect with us today
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
                        What is included in Dynamics 365 for Professional
                        Services industry?
                      </button>
                    </h3>
                    <div
                      id="faq-content-2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                        <a href="/products/microsoft-dynamics-365/">
                          Dynamics 365
                        </a>{" "}
                        offers a range of business solutions considering
                        industry-specific needs. Depending on your process flow,
                        these applications can be combined or integrated with
                        your existing system too to effectively carry out your
                        business needs. Dynamics Square can implement a highly
                        customized solution to run your professional services
                        from operations to human resources, project automation
                        to financial management, and more
                        <br />
                        <br />
                        Talk to us to know how specific and productive solutions
                        can be configured for your business.
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
                        What are the benefits of Microsoft Dynamics 365 for the
                        Professional Services industry?
                      </button>
                    </h3>
                    <div
                      id="faq-content-3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                        With Microsoft Dynamics 365, enterprises can simplify,
                        manage, and drive their processes, people, customer,
                        clients, and more while maximizing their profitability
                        and ensuring global scalability. Here are the benefits
                        that can be availed after upgrading your system with
                        Dynamics 365 solution:
                        <br />
                        <br />
                        <ul>
                          <li>
                            By implementing Dynamics 365 for Professional
                            Services, enterprises can keep their eyes on
                            financial flow and estimate their actual revenues.
                          </li>
                          <li>
                            Utilize opportunity management, improve customer
                            engagement, and faster your client or customer
                            delivery.
                          </li>
                          <li>
                            With project automation, bring seamless flow across
                            your project execution environment and simplify
                            billing, invoicing, etc.
                          </li>
                          <li>
                            Allow and empower people in your organization to
                            faster their performance, make instant decisions
                            whenever required to ensure continuous and
                            productive flow while maximizing the overall
                            productivity.
                          </li>
                          <li>
                            By leveraging built-in AI intelligence, enterprises
                            can list their key stakeholders, optimize growth
                            potentials, prepare decision-making analytics, and
                            engage profitable deals.
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
      </main>
    </>
  );
};

export default Startup;
