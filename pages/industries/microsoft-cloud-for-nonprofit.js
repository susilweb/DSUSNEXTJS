import React, { useState } from "react";
import Head from 'next/head'
// import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const MicrosoftCloudForNonprofit = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Microsoft Cloud for Nonprofit | Dynamics Square</title>
        <meta
          name="description"
          content="Ensure your focus on your mission to simplify your mission-critical practices to drive campaign success with Microsoft Cloud Solution for NonProfit."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/microsoft-cloud-for-nonprofit/"
        />
     <meta name="robots" content="noindex,nofollow" />
        
      </Head>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="k9ZCzwj4FV8&t=2s"
        onClose={() => setOpen(false)}
      /> */}
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Microsoft Cloud
                  <br />
                  For NonProfit
                </h1>
                <p>
                Ensure Your Focus On Your Mission To Simplify Your Mission-Critical Practices To Drive Campaign Success With Microsoft Cloud Solution For NonProfit.
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
                  src="/img/Not-For-Profit-banner.png"
                  alt="Not-For-Profit-banner"
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
              Drive Seamless Operations With Microsoft Cloud For NonProfit
              </h2>
              <p>
              Connect and engage your donors, manage your volunteers, take advantage of program impact dashboard, drive data centralization, ensure your data security, and seamlessly drive mission success with the help of Microsoft Cloud for NonProfits.</p> <p>Microsoft Cloud for Nonprofit can help to strategically drive mission-critical practices while securing donor data and ensuring assigning the right responsibility to the right volunteer. This cloud-based not-for-profit industry solution can be implemented with its standard essence or can be configured according to your customized movements. Microsoft Cloud solution enables nonprofit units to strategically <a href="/our-services/dynamics-365-support-services/">support</a> their different roles and to carry out day-to-day challenges.

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
                Why Implement 
                  <br />
                  Microsoft Cloud for NonProfits <br />
                    </h2>
                <p>
                Microsoft Cloud Solution for Nonprofits empowers the organizations to effectively manage their donors, supporters, volunteers, etc. to produce and drive effective results. With the help of this cloud solution, non-profit hubs can effectively manage donors, supporters, and drive a seamless constituent marketing journey.
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
                      It enables or maximizes the capability of managing volunteers, engaging donors, and ensuring seamless volunteer center management. Microsoft Cloud for Non-Profits enables to combine both the back office and frontend data to enable unified fundraising and drive centralized data-driven practices.
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
                      To support your unique organization flow and fulfill your mission-critical needs, non-profit business domains can get solutions configured and customized to serve their unique or personalized needs. With the help of constituents' analytics, proactively understand how likely the constituents are interested to engage, at what time constraints, and leveraging what sort of channels.
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
                  <h3>
                    Talk to <br />
                    Our Expert Team
                  </h3>
                  <p>
                  Let's simplify your non-profit practices, extend your outreach, and ensure mission success with Microsoft Cloud for NonProfits.
                    <br />
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
          <header className="section-header">
            <h2>
              7 Microsoft Cloud
              <br />
              For Nonprofit Features
            </h2>
          </header>
          <div className="container">
            <div className="row position-relative">
              <div className="col-lg-6 ">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Constituent Management.svg"
                      alt="icons-nonprofits_Constituent Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Constituent Management</h3>
                    <p>
                    Effortlessly engage, manage, and retain your donors. Bring a centralized view of constituents' data to know your mission supporters, fundraisers, and actual donors. 
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons_Personalized Engagement.svg"
                      alt="icons_Personalized Engagement"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Personalized Engagement</h3>
                    <p>
                    Leverage personalized engaging and impact your engaging movements. Connect and engage serious donors with the help of in-built engaging functionality.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons_Constituent Analytics.svg"
                      alt="icons_Constituent Analytics"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Constituent Analytics</h3>
                    <p>
                    Cloud solutions for Non-profits enables the capability to know whether the supporter, donor, or constituents is interested to engage and join your mission.               
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-_centralised data.svg"
                      alt="icons-_centralised data"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Unified Data</h3>
                    <p>
                    Centralize your fundraising and campaign data along with back office and front-line movements including programs, finances, and operations to achieve mission success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Awards Management.svg"
                      alt="icons-nonprofits_Awards Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Donation & Award Management</h3>
                    <p>
                    Boost your donation and award management capabilities from payment processing to fund accounting and fundraising to award management all through Cloud Nonprofits.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Constituent Management.svg"
                      alt="icons-nonprofits_Constituent Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Volunteer Management</h3>
                    <p>
                    Empower your volunteer coordinators to seamlessly match volunteer skills as per needs and enable both the volunteers and coordinators to ensure collaborative success. 
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_program delivery.svg"
                      alt="icons-nonprofits_program delivery"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Program Delivery</h3>
                    <p>
                    To accomplish mission success, Microsoft's non-profit solution enables charity organizations to design, deliver, and monitor current events or movements to level up the foundational success. 
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
                  How to roll out effective and productive strategies across your Non-Profit Organization?
                  </h3>
                  <p>
                  Since every foundation is initiated with different aims or objectives and thereby, there could be specific system configuration needs to support both their ongoing flow as well as futuristic activities. Understanding your unique non-profit flow, we can help to come up with the most reliable and productive solution for your non-profit organization.
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
                      src="/img/non-profit side.png"
                      className="fix-im"
                      alt="non-profit side"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          data-bs-toggle="modal"
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/Video-Non Profit.png"
                            alt="Video-Non Profit"
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
                  Learn How Microsoft Cloud Solution Can Ensure Success for Non-profits?
                  </h2>
                  <p>
                  Here is how Microsoft's cloud solution can help to support your unique non-profit events or movements to connect and engage genuine donors, manage processes with streamlined data, analyze expected donor behavior, and ensure overall mission success.
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
        <section id="pricing" className="pricing">
          <div className="container">
            <header className="section-header">
              <h2>Microsoft Cloud For Nonprofit Pricing</h2>
              <p>
                Contact Dynamics Square To Get Started With Microsoft Cloud For
                Nonprofit
              </p>
            </header>
            <div className="row gy-4 p-9">
              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Basic</h3>
                  <div className="price">
                    <sup>£</sup>0<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>Available To Nonprofits Of All Sizes</strong>
                    </li>
                    <li> Prerequisite licensing costs only</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Standard</h3>
                  <div className="price">
                    <sup>$</sup>---<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>
                        Plan 1 For Nonprofits
                        <br /> 1-250 Employees
                      </strong>
                    </li>
                    <li>Prerequisite licensing costs +</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Standard</h3>
                  <div className="price">
                    <sup>$</sup>---<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>
                        Plan 2 For Nonprofits And IGOs <br />
                        250+ Employees
                      </strong>
                    </li>
                    <li>Prerequisite licensing costs +</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Azure Services</h3>
                  {/* <div className="price"><sup>£</sup>0<span>Per Month</span></div> */}
                  <ul>
                    <li className="textdd">
                      <strong>As Metered</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="price-btn price-btnasd d-flex justify-content-center">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-red"
                  >
                    <span>Get Started Now</span>
                  </a>
                  {/* <a href="#about" className="btn-get-whit">
                              <span>See Licensing Guide</span>
                              </a> */}
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
                            <a href="/industries//food-and-beverages/">
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
                              <a href="/industries/professional-services/">
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
                  src="/img/n/Microsoft-Cloud-For-Non-Profits-Banner.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MicrosoftCloudForNonprofit;
