import React, { useState } from "react";
import Head from 'next/head'
// import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const Ecommerce = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Dynamics 365 for Ecommerce Industry | Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics 365 for eCommerce is a powerful platform that helps businesses centralize their data, personalize their customers&#039; and partners&#039; experience, and maximize their growth potentials."
        />
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/ecommerce/"
        />
      </Head>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gbGf0dXUNE"
        onClose={() => setOpen(false)}
      /> */}
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Microsoft Dynamics 365
                  <br />
                  For Ecommerce
                </h1>
                <p>
                Centralize Your Data, Personalize Your Customers' & Partners' Experience, And Maximize Your Growth Potentials With Dynamics 365 For ECommerce.
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
                  src="/img/ecommerce banner.png"
                  alt="Microsoft Dynamics 365 For Ecommerce"
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
              Why Choose Dynamics 365 for Your eCommerce Platform?
              </h2>
              <p>
              Microsoft Dynamics 365 for Ecommerce is designed to automate and streamline your data, manage & serve your customers in real-time, predict sales, plan capacity, and ensure seamless customer fulfillment with the capability of making informed decisions in real-time.
              </p>
              <p>
              Experts with 11+ years of industry exposure at Dynamics Square can help to bring seamless flow across your e-commerce operations. By implementing <a href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</a> for eCommerce, we enable online stores to manage their customers, simplify their warehousing, bring real-time eyes into the entire supply chain cycle, and ensure faster fulfillment that helps to drive continuous growth, and seamless global scalability.
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
                How to accelerate your operational flow with Dynamics 365 for Ecommerce?
                </h2>
                <p>
                Stimulate your operational flow, level up your e-commerce practices, and drive innovation with Dynamics 365 for eCommerce. With the help of data automation and built-in AI capabilities, prepare custom reports and key analytics to optimize resources, fulfill warehousing, and support your decision-making process for improved productivity ahead.
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
                      With the help of Dynamics 365 for eCommerce businesses, enterprises can automate their data, streamline their processes, and enable resource optimization to support process continuation and faster the entire e-commerce flow.
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
                      Using real-time AI data, key insights, and financial analytics; enable everyone in your organization to make instant decisions to drive a seamless e-commerce process cycle from maintaining the right inventory level to preparing a budget, planning capacity, and right production level to timely customer fulfillment.
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
                      Accelerate your order management, manage actual stock level, track shipping status, and manage product delivery along with seamless return & refund process by upgrading your current system capabilities with Microsoft Ecommerce <a href="/products/erp/">ERP solutions</a>.
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
                  <h3>Consult with Our Experts</h3>
                  <p>
                  Connect and consult with our experts today to know how Dynamics 365 for E-commerce businesses could be a long-lasting productive deal.
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
          <div className="row justify-content-center">
              <div className="col-lg-9 col-md-9">
              <header className="section-header">
              <h2> Microsoft Dynamics 365 For E-Commerce Features</h2>
            </header>
              </div>
            </div>
            <div className="row position-relative g-5">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Distribution-Delivery.svg"
                      alt="Distribution-Delivery"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Order Management</h3>
                    <p>
                    Monitor and control your orders and faster customer fulfillment by ensuring <a href="/our-services/dynamics-365-implementation-services/">Microsoft Dynamics 365 implementation</a> for eCommerce companies.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/inventory-management-icon-01.svg"
                      alt="inventory-management-icon-01"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Inventory Management</h3>
                    <p>
                    Optimize your inventory flow, maintain the right stock level wherever and whenever required with the help of Microsoft ERP solutions for eCommerce.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/connect-collaborate.svg"
                      alt="Customer Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customer Management</h3>
                    <p>
                    Engage the right customers at the right time by taking advantage of instant AI insights and key reporting metrics. Serve a personalized experience to your customers in real-time. 
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Production-Mnagement (1).svg"
                      alt="Finance Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Finance Management</h3>
                    <p>
                    With Ecommerce ERP, improve your financial visibility across your financial practices from invoicing & billing to bills of material, planning & budgeting, forecasting, and more. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Design-and-Training.svg"
                      alt="Supply Chain Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Supply Chain Management</h3>
                    <p>
                    ERP solutions for eCommerce can help to manage and improve your end-to-end supply chain pipeline to achieve productive and sustainable results. 
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Service-Management.svg"
                      alt="Production Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Production Management</h3>
                    <p>
                    Manage and control your production line, streamline your planning, process optimization, directing & controlling along with capacity planning in real-time.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-ax-_procurment.svg"
                      alt="Procurement"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Procurement</h3>
                    <p>
                    Bring a consistent flow in your procurement process wherein plan & manage to ensure the right stock-level and distribution by implementing Dynamics 365 for Ecommerce Businesses.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_Constituent Analytics.svg"
                      alt="icons_Constituent Analytics"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Reporting & Analytics</h3>
                    <p>
                    Bring strategic and productive flow within your organization with instant AI insights and reporting analytics capabilities to produce and deliver faster results.
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
                  <h3>Let's Discuss Opportunity</h3>
                  <p>
                  Share your business insights and allow us to come up with a highly relevant solution for your enterprise to adapt, manage, and drive the dynamically changing process flow. By performing a deep system health check, our experts can suggest and implement the highly configured solution for your business to accelerate growth combined with global compliance management.
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
                      src="/img/Ecommerce side.png"
                      className="fix-im"
                      alt="Ecommerce side"
                    />

                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          data-bs-toggle="modal"
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/video-Ecommerce.png"
                            alt="video-Ecommerce"
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
                  How to Uplift Your Business Capabilities with Dynamics 365 for Ecommerce Business Solutions?
                  </h2>
                  <p>
                  Let's connect to understand how Microsoft Dynamics 365 implementation for Ecommerce companies can enable you to drive efficiency and produce better. 
                  </p>
                  <div className="text-lg-start">
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
          <div className="row justify-content-center">
              <div className="col-lg-9 col-md-9">
              <header className="section-header">
              <h2>Explore Other Industries</h2>
            </header>
              </div>
            </div>
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
          <div className="row justify-content-center">
              <div className="col-lg-9 col-md-9">
              <header className="section-header">
              <h2>Explore Our Recent Blogs & Resources</h2>
              <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
            </header>
              </div>
            </div>
            <div className="row top-2 gx-5">
              {/* <Blog /> */}
              <div className="col-lg-6 align-self-center">
                <img src="/img/n/Dynamics-ecommerce-Banner.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Ecommerce;

