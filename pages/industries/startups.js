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
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Dynamics 365 For Startups &amp; Small Business | Dynamics Square
        </title>
        <meta
          name="description"
          content="Dynamics 365 For Startups is the perfect cloud solution for business of any size. Find out all the features and how you can use it to grow a successful small business."
        />
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/startups/"
        />
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
                  Dynamics 365
                  <br />
                  For Startups
                </h1>
                <p>
                Dynamics 365 is a platform that helps startups, small businesses and entrepreneurs with their cloud business management needs.
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
                  src="/img/industry-startup-banner.png"
                  alt="Dynamics 365 For Startups"
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
                kickstart your startup
                <br />
                with microsoft dynamics 365
              </h2>
              <p><a href="/products/microsoft-dynamics-365/">Dynamics 365</a> for Startups provides small businesses with a comprehensive, cloud-based business solution that helps them streamline operations, improve customer engagement, and drive growth. The solution includes CRM, ERP, and productivity tools, all of which are designed to help businesses save time and money. In addition, Dynamics 365 for Startups offers access to a community of like-minded entrepreneurs, mentors, and investors, which can help small businesses thrive. Drive process automation, leverage AI insights, and transform your startup practices to start driving profitability and discovering scalable opportunities all through Microsoft Dynamics 365 for Startups.</p>
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
                Strategic Reasons Of Choosing Dynamics 365 For Your Startup Business
                </h2>
                <p>
                Start optimizing your processes, support your scalable strategy, and manage your end-to-end flow to enable growth potentials and start working toward achieving outcomes and maximizing the same in your startup by implementing Dynamics 365 for the Startup industry.
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
                      Support your business strategy, manage all your processes, and bring an efficient flow in your organization from the very beginning of your business.
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
                      Leverage online sessions, technical help, and online mentorship provided by Microsoft Dynamics 365 to support and improve your operational flow across your organization.
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
                      With high-end customization and required system integration addressing your business context, start gaining your customer base to drive scalable growth along with global compliances.
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
                  Talk to Us for Expert Solution
                  </h3>
                  <p>
                  Let us know your processes involved in your startup business and reveal the best-in-class solution customized and configured as per your specific needs.
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
              Build & Run Your Business With Dynamics
                <br />
                365 Startup Solutions
              </h2>
            </header>
              </div>
            </div>
            <div className="row g-xxl-0">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_seamless customisation.svg"
                      alt="icons-_seamless customisation"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>High-End Customization</h3>
                    <p>
                    Simplify all your startup processes and start driving a productive approach with Dynamics 365 configured and customized as per your startup needs.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_centralised data.svg"
                      alt="centralised data"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Drive Innovation</h3>
                    <p>
                    Connect your resources and processes to drive innovation in terms of team collaboration, process efficiency, and streamlined data.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_manage customer.svg"
                      alt="icons-_manage customer"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Streamline Analytics</h3>
                    <p>Monitor and control your processes with real-time key analytics, customer insights, financial visibility, and more all through Dynamics 365 for Startup industry solutions.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_decison making.svg"
                      alt="icons-_decison making"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Data Automation</h3>
                    <p>Enable your process automation and data centralization with AI efficiency leveraging in-built AI data-driven practices to facilitate an on-cloud environment.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_connect collobrate.svg"
                      alt="icons-_connect collobrate"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Drive Customers</h3>
                    <p>
                    Connect and identify potential customer base to engage and drive with a personalized solution and hourly support. With Dynamics 365 for Startups, facilitate your customers with an omnichannel experience.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_drive automation.svg"
                      alt="icons-_drive automation"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Enterprise Mobility</h3>
                    <p>
                    Leverage centralized data, monitor your processes, and bring transparency across your people and process collaboration through a one-tap solution using mobile devices.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_enterprise mobility.svg"
                      alt="icons-_enterprise mobility"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Informed Decision Making</h3>
                    <p>
                    With effective utilization of real-time AI analytics, key metrics, and sales or customer insights, empower everyone in your organization to make informed decisions to drive challenges.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-_Predict Opportunity.svg"
                      alt="icons-_Predict Opportunity"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Optimization & Forecasting</h3>
                    <p>
                    With data automation, connected processes, and AI insights, Dynamics 365 for small businesses or startups helps optimize operations, forecast sales, and predict future potentials.
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
                  <h3>Talk to Us to Reveal Your Actual Requirements</h3>
                  <p>
                  A healthy conversation can reveal business values in terms of reliable and business-specific solutions. Talk to us, share your requirement, business challenges, etc. to understand what sort of custom-configured business solution we can offer you to seamlessly drive your ongoing practices as well as support your futuristic potentials. Our experts can diagnose your system requirement and can implement Dynamics 365 Startup Businesses solutions to impact growth rate and drive scalability.
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
              <div className="col-lg-6">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <img
                      src="/img/startup-side.png"
                      className="fix-im"
                      alt="bisin_leftimg"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          data-bs-toggle="modal"
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/videoForstartups.png"
                            alt="videoForstartups"
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
                    How Dynamics 365
                    <br />
                    Can Enable Transformation
                    <br />
                    in Your Startup?
                  </h2>
                  <p>
                  Enable maximum resource utilization and boost your process flow with simplified and highly configured Microsoft Dynamics 365 startup solutions.
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
              <h2>Explore Our Recent Blogs & Resources</h2>
              <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
            </header>
            <div className="row top-2 gx-5">
              {/* <Blog /> */}
              <div className="col-lg-6 align-self-center">
                <img src="/img/industry-startup-banner.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Startup;

