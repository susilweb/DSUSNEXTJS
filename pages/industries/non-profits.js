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
const NonProfits = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Dynamics 365 for Nonprofits Accelerator | Dynamics Square</title>
        <meta
          name="description"
          content="Boost Your Nonprofit Operational Flow and Strategically Manage Your Donors and Volunteers with Microsoft Dynamics 365 for Nonprofits accelerator."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/industries/non-profits/"
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
                <h1>
                  Dynamics 365
                  <br />
                  For NonProfit
                </h1>
                <p>
                  Boost Your Nonprofit Operational Flow And Strategically Manage
                  Your Donors And Volunteers With Microsoft Dynamics 365 For
                  Nonprofits.
                </p>
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
              <div className="col-lg-6 align-self-center">
                <img
                  src="/img/Dynamics-non-profit-Banner.png"
                  alt="Dynamics-non-profit-Banner"
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
                  <h2>
                    Drive Seamless Nonprofit Operations with Microsoft Dynamics
                    365
                  </h2>
                  <p>
                    <b>
                      Engage and manage your donors and volunteers to drive an
                      efficient and sustainable approach. Maximize your
                      operational excellence and effortlessly fulfill your
                      nonprofit goals with Dynamics 365 Nonprofit Accelerator.
                    </b>
                  </p>
                  <br />
                  <p>
                    Seamlessly drive your customers, vendors, donors,
                    volunteers, and workforce with Dynamics 365 for Nonprofits.
                    With this all-in-one integrated solution, nonprofit units
                    can manage their entire organizational practices and can
                    focus more on their core non-profit activities, events, or
                    engagement programs. With automation, they can automate
                    their projects, field service, and more.
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
                <h2>Why Implement Dynamics 365 for Nonprofits</h2>
                <p>
                  Considering your entire Non-profit practices and desired
                  goals,{" "}
                  <Link href="/products/microsoft-dynamics-365/">
                    Dynamics 365
                  </Link>{" "}
                  can be implemented and configured to support your day-to-day
                  operational processes. To drive omnichannel efficiency and
                  carry out your non-profit aims effectively, Dynamics 365 Not
                  for profit solution can be configured accordingly.
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
                        Maximize your resource utilization, enable real-time
                        data efficiency into every process optimization, allow
                        process automation, streamline financial flow and
                        analytics, and make informed decisions. To experience
                        in-depth or visual reporting & analytics experience,
                        integrate your Dynamics 365 account with{" "}
                        <Link href="/products/microsoft-power-bi/">
                          Power BI
                        </Link>
                        .
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
                        Strengthen your fundraising campaigns, build sustainable
                        customer relationships, automate your event & social
                        activities management, and bring a smoother and
                        uninterrupted flow across your non-profit operations.
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
                        Connect and manage your donors, customers, vendors, and
                        volunteers all through a single yet highly integrated
                        Dynamics 365 Nonprofit accelerator. Make informed
                        decisions with AI-based insights.
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
                  <h3>Talk to Our Dynamics 365 Experts</h3>
                  <p>
                    Connect and talk to our experts. Evaluating your non-profit
                    domain needs, they can suggest the optimal solution for your
                    non-profit organization.
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
        <section className="industry_service_bottoms">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-9">
                <header className="section-header">
                  <h2>Microsoft Dynamics 365 For Nonprofits Features</h2>
                </header>
              </div>
            </div>
            <br />
            <div className="row position-relative">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Business-Central-Implementation-icons.svg"
                      alt="Business-Central-Implementation-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Constituent Management</h3>
                    <p>
                      Manage your people and their profiles effortlessly
                      including their biographical information, communication
                      ways, relationships, etc.
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
                    <h3>Donation & Awards Management</h3>
                    <p>
                      Leverage a centralized view of your donations, awards, and
                      more. Stay tuned and keep track of your fund-raising data
                      through Microsoft's Dynamics 365 solution for the
                      non-profit industry.
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
                    <h3>Fundraising &amp; Membership Management</h3>
                    <p>
                      Track and manage your fund-raising activities with
                      Microsoft's non-profit solution. Create and manage
                      membership levels seamlessly with a 360-degree view.
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
                    <h3>Program Delivery</h3>
                    <p>
                      Organize, manage, and control your mission data. Drive
                      mission-critical practices, measure results, demonstrate
                      the stats on the resulting dashboard.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/Business-Central-Implementation-icons.svg"
                      alt="Business-Central-Implementation-icons"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>IATI Processes </h3>
                    <p>
                      Uncover transparency and integrity while driving your
                      global fundraising campaigns or managing social events
                      along with aid money insights.
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
                    <h3>Finance & CRM Data Integrator</h3>
                    <p>
                      To impact and drive a smoother operational flow, integrate
                      your non-profit constituents with awards, donations,
                      social events, finances, and more.
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
                    <h3>Case & Assessment Management</h3>
                    <p>
                      Track & manage clients, cases, and assessments for a
                      specific project, event, or program to support process
                      acceleration and drive mission success.
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
                    <h3>Project Management & Program Design</h3>
                    <p>
                      Monitor and control your social events, project
                      activities, current progress status, and more to drive
                      mission objectives, manage budgets, and attain results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row movi-up ">
              <div className="col-lg-12">
                <div className="center-pic">
                  <img src="/img/Group-948.png" alt="Group-948.png" />
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-items-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <img
                      src="/img/non-profit side.png"
                      className="fix-im"
                      alt="non-profit side"
                    />
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
                  <h2>
                    How Microsoft Dynamics 365 for Charities can Boost Your
                    Non-profit Flow?
                  </h2>
                  <p>
                    Willing to know how Microsoft Dynamics 365 can help you
                    evolve your non-profit organizational flow? Schedule your
                    demo today.
                  </p>
                  <div className="text-lg-start mm-t">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Request a Demo</span>
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
              <div className="col-lg-9">
                <div className="call-to-action-content">
                  <h3>
                    How To Bring A Seamless Flow to your Non-profit
                    organization?
                  </h3>
                  <p>
                    We can understand your specific business world and can build
                    a solution addressing your custom business needs and
                    considering your enterprise values. Just talk to our experts
                    and let's come up with a specific solution for your business
                    to impact your overall organizational practices and maximize
                    your outcomes.
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
                            <Link href="/industries/food-and-beverages/">
                              <a><div className="img-wrp">
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
                              </div></a>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/ecommerce/">
                                <a><div className="img-wrp">
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
                                </div></a>
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
                                <a><div className="img-wrp">
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
                                </div></a>
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
                                <a><div className="img-wrp">
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
                                </div></a>
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

export default NonProfits;
