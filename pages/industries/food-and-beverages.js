import React, { useState } from "react";
import Head from 'next/head'
// import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const Startup = () => {
  const [isOpen, setOpen] = useState(false);
  // const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
        <title>Microsoft Dynamics 365 for Food and Beverages Industry</title>
        <meta
          name="description"
          content="Enable quick adaption, simplify processes, and drive continuity throughout your organization with Dynamics 365 for Food and Beverages Industry Solutions."
        />
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/food-and-beverages/"
        />
      </Head>
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="blXvCkDi1NI"
        onClose={() => setOpen(false)}
      /> */}
       <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Dynamics 365 <br />
                  For Food & Beverages
                </h1>
                <p>
                Manage your inventory levels, have a 360-degree view into your Supply Chain, and drive efficiency with Microsoft Dynamics for Food & Beverages.
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
                  src="/img/food-and-beverages-banner.png"
                  alt="Dynamics 365 For Food & Beverages"
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
                Why Dynamics 365 for your <br />
                food & beverages industry?
              </h2>
              <p>
              Enable quick adaption, simplify processes, and drive continuity throughout your organization with <a href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</a> Food & Beverages Industry Solutions. With high-end customized Food & Beverage ERP, enterprises can engage & manage their customers and drive quality control practices while uplifting their revenue generation and enlarging the right production level.
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
                How to Bring Smoother Operational Flow with Microsoft Dynamics 365 for Food & Beverages?
                </h2>
                <p>
                Stimulate your Food & Beverage operations with real-time efficiency and drive optimal growth with Dynamics 365 for Food & Beverages industry solutions. Manage your entire operational flow from warehousing, distribution, finance, supply chain, to customers and human resources.
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
                      Predict demand, analyze capacity, manage stock level, and improve your financial visibility to bring seamless flow in your food & Beverage domain to roll out efficiency and profitability across your organization.
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
                      Enable smoother transition and seamless distribution model with Dynamics 365 for Food & Beverages industry solution. Leveraging improved visibility in real-time; manage your end-to-end warehousing, plan capacity, and fulfill the dynamically changing customer demands.
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
                      Plan and drive effective business strategies across your Food & Beverages unit by upgrading your system with Microsoft's Food & Beverage ERP. Modernize your workforce to connect and communicate instantly and accelerate the process flow to accomplish desired growth and revenue.
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
                  Connect with Our Experts Today
                  </h3>
                  <p>
                  Let's discuss your business potentials, your desired business goals, and
how Dynamics 365 for Food & Beverage business could be a profit-maximizing deal for your organization.
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
              <h2>
                Microsoft Dynamics 365 For Food & Beverage industry Features
              </h2>
            </header>
              </div>
            </div>
            <div className="row position-relative g-4">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Distribution-Delivery.svg"
                      alt="Distribution-Delivery"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Warehouse & Distribution Management</h3>
                    <p>Track and control your warehousing & distribution pipeline while enlarging your efficiency level and reducing your transportation cost.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Asset-Management.svg"
                      alt="Asset-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Marketing & Sales</h3>
                    <p>
                    Stay updated with your customers' activities in real-time, drive productive sales strategies & marketing campaigns with the help of the Food & Beverage <a href="/products/erp/">ERP solution</a> by Microsoft.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Customer-Management.svg"
                      alt="Customer-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customer Management</h3>
                    <p>
                    Connect &amp; engage your customers as per their preferred communication channel, engage &amp; serve them in real-time to build a long-lasting customer relationship.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Production-Mnagement.svg"
                      alt="Production-Mnagement"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Manufacturing Management</h3>
                    <p>
                    Effectively plan and organize your manufacturing operations. Ensure seamless production flow, predict demand, plan capacity, and more with Food & Beverage solution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Design-and-Training.svg"
                      alt="Design-and-Training"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Supply Chain Management</h3>
                    <p>
                    Maximize your supply chain capability, streamline operational flow, optimize demand, drive smoother distribution, etc. With the help of food & Beverage ERP.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Service-Management.svg"
                      alt="Service-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Analytics & Insights</h3>
                    <p>
                    By taking advantage of built-in AI capabilities to gain real-time reports & key analytics supporting informed decisions making and ensuring productive operational flow.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/predict-opportunity.svg"
                      alt="predict-opportunity"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Production & Quality Control</h3>
                    <p>
                    Maintain the right production flow, ensure quality standards & safety in your food & beverage production firm by <a href="/our-services/dynamics-365-implementation-services/">implementing Dynamics 365</a> for Food & Beverages.
                    </p>
                  </div>
                </div>

                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-ax-_sales-management.svg"
                      alt="Sales-Management"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Financial Management</h3>
                    <p>
                    Maximize your financial visibility and seamlessly manage your accounting, discount, tax & duty practices, etc. by availing seamless system upgrade for food & beverage operations.
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
                  <h3>Connect with Us to Reveal Profitability</h3>
                  <p>
                  Since there could be specific practices in your specific Food & Beverages business model, experts with years of industry exposure and expertise can implement a highly customized solution to bring innovation and efficiency across your operational area with Microsoft Dynamics 365 for Food & Beverages solution. To know more and simplify your Food & Beverages domain practices, connect with our experts today.
                  </p>
                  <div className="text-center m-o-t m-o-t-hv">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Chat with Us</span>
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
              <div className="col-lg-6 align-items-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <img
                      src="/img/food and beverages- side.png"
                      className="fix-im"
                      alt="food and beverages- side"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          data-bs-toggle="modal"
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/Video-Food And beerages.png"
                            alt="Video-Food And beerages"
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
                  How to level-up your Food & Beverages operational capability with Food & Beverage ERP?
                  </h2>
                  <p>
                  This is how Food & Beverages industry can improve and uplift its operational capability to attain profitable results at scale.
                  </p>
                  <div className="text-lg-start">
                    <a
                      data-bs-toggle="modal"
                      href="#exampleModal"
                      className="btn-get-started scrollto"
                    >
                      <span>Request a Demo</span>
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
                              <a href="/industries/startup/">
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
              <h2>
              Explore Our Recent Blogs & Resources
              </h2>
              <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
            </header>
              </div>
            </div>
            <div className="row top-2 gx-5">
              {/* <Blog /> */}
              <div className="col-lg-6 align-self-center">
                <img
                  src="/img/n/Dynamics-food-beverages-Banner.png"
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

export default Startup;

