import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const IndustriesManufacturing = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 for Manufacturing - Dynamics Square</title>
        <meta
          name="description"
          content="Enable Seamless Manufacturing and Drive Agile Distribution with Dynamics 365 for Manufacturing."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/industries/manufacturing/"
        />
      </Head>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qLjfAsQRWaM"
        onClose={() => setOpen(false)}
      />
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>Microsoft Dynamics 365 for Manufacturing</h1>
                <p>
                  Enable Seamless Manufacturing and Drive Agile Distribution
                  with Dynamics 365 for Manufacturing.
                </p>
                <br />
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get Started</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <img
                  src="/img/Dynamics-manufacturing-Banner.png"
                  alt="Dynamics-manufacturing-Banner"
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
                    {" "}
                    Manage it all, with <br />
                    Dynamics 365 for Manufacturing
                  </h2>
                  <p>
                    Create a resilient future, drive innovation, optimize
                    operations, ensure agile distribution & manufacturing,
                    deepen your customer relationship, and uplift your revenue
                    with{" "}
                    <Link href="/products/microsoft-dynamics-365/">
                      Microsoft Dynamics 365
                    </Link>{" "}
                    for Manufacturing and distribution.
                  </p>
                  <p>
                    Connect your systems, processes, and data to bring seamless
                    flow across your manufacturing & distribution operations
                    while minimizing disruptions and maximizing time to market.
                    With the help of Dynamics 365 for Manufacturing, build and
                    improve your relationships with customers to maximize your
                    business outcomes.
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
                  Why Manufacturers Need to Implement Microsoft Dynamics 365?
                </h2>
                <p>
                  By implementing{" "}
                  <Link href="/industries/microsoft-cloud-for-manufacturing/">
                    Microsoft Cloud for manufacturing
                  </Link>{" "}
                  ERP solution, orgnanisations can centralize data, unify
                  operations, and maximize resource utilization. Leveraging AI
                  insights, manufacturers can optimize their operations,
                  minimize machine downtime, and drive improved customer
                  engagement.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Streamline your production information while ensuring
                        safety and quality training practices throughout your
                        manufacturing unit. Manage and drive seamless and
                        proactive distribution and fulfillment satisfying the
                        dynamically changing customer needs.
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
                        Predict demand using in-built AI insights, streamline
                        procurement, and minimize repetitive tasks. Microsoft
                        Dynamics 365 for distribution and planning can help and
                        enable to drive integrated warehousing wrapped with 99.9
                        % uptime.
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
                        Take advantage of{" "}
                        <Link href="/products/azure-iot-internet-of-things/">
                          Azure IoT Capabilities
                        </Link>{" "}
                        and built-in intelligent manufacturing solutions to
                        centralize sales data and enable omnichannel efficiency
                        in your manufacturing and distribution operations.
                        Effortlessly manage Bills of Materials, ensure capacity
                        planning, and monitor inventory availability & flow, and
                        support your production lines to drive a parallel
                        approach.
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
                  <img src="/img/MaskGroup8.png" alt="images" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>Connect With Our Professionals</h3>
                  <p>
                    Let's connect and reveal your manufacturing needs to avail
                    the optimal industry solution.
                    <br />
                  </p>
                  <div className="m-o-t m-o-t-inde">
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
            </div>
          </div>
        </section>
        <section className="industry_service_bottom">
          <div className="container">
            <div className="row position-relative">
              <div className="col-lg-4">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Business-Central-Implementation-icons.svg"
                      alt="Business-Central-Implementation-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Design & Training </h3>
                    <p>
                      Dynamics 365 for Manufacturing strengthens manufacturing
                      hubs to quickly introduce new products or services,
                      stimulate change management, improve quality, and
                      strengthen productivity.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Business Central Upgrade-icons.svg"
                      alt="Business Central Upgrade-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Planning & Sourcing</h3>
                    <p>
                      Plan production lines and distribution models in
                      real-time. Predict demand and streamline your procurement
                      process leveraging intelligent manufacturing solutions.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Business-Central-Support-icons.svg"
                      alt="Business-Central-Support-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Production Management</h3>
                    <p>
                      Drive agile, seamless, and scalable flow in your
                      operations by making effective use of IoT and AI
                      intelligence. With Microsoft Dynamics 365 for
                      distribution, improve your customer engagement and fulfill
                      dynamically changing needs.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Business-Central-Support-icons.svg"
                      alt="Business-Central-Support-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Distribution & Delivery </h3>
                    <p>
                      Monitor and control your stock level, streamline
                      warehousing, and ensure seamless order fulfillment in
                      timely accordance. Bring and drive smoother distribution
                      and delivery model across your operational unit using
                      Microsoft Dynamics 365 for distribution.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Business-Central-Implementation-icons.svg"
                      alt="Business-Central-Implementation-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Asset Management</h3>
                    <p>
                      Bring resilient manufacturing to connect, control, and
                      manage your assets. Predict asset maintenance, ensure
                      process optimization to reduce equipment downtime, and
                      increase the efficiency throughout your manufacturing
                      process.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Business Central Upgrade-icons.svg"
                      alt="Business Central Upgrade-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Sales Management</h3>
                    <p>
                      Automate your sales, improve prediction capabilities, and
                      facilitate omnichannel experience to accomplish your
                      manufacturing goals. Dynamics 365 for Manufacturing helps
                      to forecast sales opportunities and faster your lead
                      generation process.{" "}
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Business-Central-Support-icons.svg"
                      alt="Business-Central-Support-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customer Management</h3>
                    <p>
                      Enrich your customer experience to impact your overall
                      manufacturing and distribution flow. Build & drive
                      high-end customer engagement with instant AI-based
                      actionable data.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Business-Central-Support-icons.svg"
                      alt="Business-Central-Support-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Service Management</h3>
                    <p>
                      Provide extensive customer experience with the help of
                      proactive field service and instant remote support.
                      Dynamics 365 for manufacturing improves the service level
                      for their customers to impact their revenue model.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row movi-up ">
              <div className="col-lg-12">
                <div className="center-pic">
                  <img src="/img/Group-948.png" alt="Group-948.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-items-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <img
                      src="/img/bisin_leftimg.jpg"
                      className="fix-im"
                      alt="bisin_leftimg"
                    />
                    <img src="/img/ico6.svg" className="flot-img" alt="ico6" />
                    <div className="video-ytube">
                      <div className="popup-btn">
                        <Link href="#javascript:void(0)">
                          <a onClick={() => setOpen(true)}>
                            <img
                              src="/img/Video-Non Profit.png"
                              alt="Video-Non Profit"
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
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h3>
                    How Dynamics 365 Can Transform your Manufacturing
                    Operations?
                  </h3>
                  <p>
                    If you want to get in-depth insights on how implementing
                    Dynamics 365 for manufacturing can help to streamline
                    process, request a free demo today.
                  </p>
                  <div className="text-lg-start mm-t">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Request a demo</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action-center hero-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="call-to-action-content">
                  <h3>Next-gen Manufacturing ERP Solution for your Business</h3>
                  <p>
                    Keeping your custom requirement in mind, our experts can
                    reveal the best-potential solution to manage, drive, and
                    control your manufacturing & distribution unit, accelerating
                    your workflow, supporting your growth strategy, and enabling
                    scaling opportunities.
                  </p>
                  <div className="text-center m-o-t m-o-t-hv">
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
        <section className="industry-more-sec">
          <div className="container">
            <header className="section-header">
              <h3>EXPLORE Other Industries</h3>
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
                      slidesPerView={3}
                      spaceBetween={30}
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
                            <Link href="/industries/food-and-beverages/">
                              <a>
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
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/microsoft-cloud-for-nonprofit/">
                                <a>
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
                                      Your Non-Profit Organization With
                                      Microsoft Dynamics 365 For Charities.
                                    </p>
                                    <span>Explore Now</span>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/ecommerce">
                                <a>
                                  <div className="img-wrp">
                                    <img
                                      src="/img/Ecommerce.svg"
                                      alt="Ecommerce"
                                    />
                                  </div>
                                  <div className="text-wrp-content">
                                    <h3>E-Commerce</h3>
                                    <p>
                                      Optimize Your End-To-End Ecommerce
                                      Processes And Improve Your Customer
                                      Experience.
                                    </p>
                                    <span>Explore Now</span>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/professional-services/">
                                <a>
                                  <div className="img-wrp">
                                    <img
                                      src="/img/proffesional-service.svg"
                                      alt="proffesional-service"
                                    />
                                  </div>
                                  <div className="text-wrp-content">
                                    <h3>Professional Services</h3>
                                    <p>
                                      Streamline And Efficiently Manage Your
                                      Professional Services with Microsoft
                                      Dynamics 365 Business Applications.
                                    </p>
                                    <span>Explore Now</span>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/microsoft-cloud-for-manufacturing/">
                                <a>
                                  <div className="img-wrp">
                                    <img
                                      src="/img/Food-and-beverage.svg"
                                      alt="Food-and-beverage"
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
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/startups/">
                                <a>
                                  <div className="img-wrp">
                                    <img
                                      src="/img/Food-and-beverage.svg"
                                      alt="Food-and-beverage"
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
                              </Link>
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
      </main>
    </>
  );
};

export default IndustriesManufacturing;
