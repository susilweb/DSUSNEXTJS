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
        <title>Microsoft Cloud For Manufacturing - Dynamics Square</title>
        <meta
          name="description"
          content="Connect and streamline, people, workflow, and processes to support your production line, bring efficiency, and improve your customer experience with Microsoft Cloud for Manufacturing."
        />
        <meta name="robots" content="noindex,nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/industries/microsoft-cloud-for-manufacturing/"
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
                  Microsoft Cloud
                  <br />
                  For Manufacturing
                </h1>
                <p>
                Connect and streamline, people, workflow, and processes to support your production line, bring efficiency, and improve your customer experience with Microsoft Cloud for Manufacturing.
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
                  src="/img/manufacturing-banner.png"
                  alt="Microsoft Cloud For Manufacturing"
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
                Manage it all, with <br />
                Microsoft Cloud for Manufacturing!
              </h2>
              <p>
              Microsoft Cloud for Manufacturing industry solution is designed to maximize your operational capabilities and improve your entire process flow from warehousing, supply, logistics to distribution and fulfillment. This integrated cloud manufacturing industry solution can help manufacturing hubs to uncover new business potential and accelerate their process flow by connecting people, operations, workflow, etc. to start gaining profitable results at scale.
              </p>
              <p>With Microsoft Cloud solutions, Manufacturing firms can uplift their operational performance, optimize their resources, enlarge their employees' productivity level, and level up their distribution to ensure customer satisfaction and improve their business returns. Microsoft, with their cloud solution, helps manufacturers to extend and faster their operational efficiency, supply chain capacity, digital expansion to impact the futuristic growth and agility ahead.</p><p>Empower your workforce to quickly adapt to system changes or dynamic processes, enable resilient supply chain, and boost agility across your operational space. With cloud manufacturing, enterprises can seamlessly roll out transparency, reduce ownership cost, drive agile approach, and unwrap the digital transformation while expanding their caliber to deliver new services.

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
                Why Microsoft Cloud for Manufacturing Solution? 
                </h2>
              
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
                      With this advanced cloud-embedded solution for the Manufacturing industry, manufacturers can bring a revolutionary change in their overall operational work infrastructure. They can enhance their employees' skill set, automate their workflow, and drive effective remote efficiency.
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
                      Considering your global outreach, it can help you to seamlessly connect, monitor, and manage your digital channels incorporating <a href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</a>, <a href="/products/microsoft-power-platform/">Microsoft Power Platforms</a>, Microsoft Teams, HoloLens 2, Microsoft Azure, etc. all through Microsoft Cloud Manufacturing Industry Solution.
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
                      It also enables you effortlessly and effectively manage your regulatory compliances, secure your privacy part, and leverage transparency across their operational space, supply chain flow, logistics & distribution to ensure satisfactory customer fulfillment. Cloud Manufacturing solution can help to upskill your workforce with the right capability, ensure smart factory modernization, and to enable business intelligence to support the right manufacturing flow and ensure gaining desired business results.
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
                  A healthy conversation with us can lead you toward a growth-hacking solution for your Manufacturing unit
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
                Microsoft Cloud
                <br />
                For Manufacturing Features
              </h2>
            </header>
            <div className="row position-relative">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/custom-crm-solutions.svg"
                      alt="custom-crm-solutions"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Workforce Management</h3>
                    <p>
                    Empower your employees by allowing them to seamlessly connect and collaborate at anytime and anywhere with no more hassles even in the case of remote working.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_flexibility.svg"
                      alt="icons_flexibility"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Drive Agility</h3>
                    <p>
                    Enable agility in your end-to-end manufacturing operations with Microsoft's cloud solution designed for the Manufacturing industry. Enable everyone to seamlessly drive challenges.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_supply-chain (1).svg"
                      alt="icons_supply-chain (1)"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Resilient Supply Chain</h3>
                    <p>
                    Integrate both your internal and external Supply Chain along with stakeholders, customers, etc. to minimize disruption, ensure a resilient supply chain, and bring transparency.                                
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons-power-automate_Enhanced-Efficiency (1).svg"
                      alt="icons-power-automate_Enhanced-Efficiency (1)"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Digital Transformation</h3>
                    <p>
                    Build and deploy digital twins and enable digital thread capability to maximize your product and service level. With Built-in intelligence, gain real-time analytics and drive continuity. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_customer-relation.svg"
                      alt="icons_customer-relation"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Customer Engagement</h3>
                    <p>
                    With cloud extension, strengthen the capability of your sellers, marketers, and service executives. Allow your people to effectively connect and engage customers with maximized outcomes.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_Improved-Visibility.svg"
                      alt="icons_Improved-Visibility"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Improved Visibility</h3>
                    <p>
                    With the help of Microsoft Cloud for Manufacturing, understand your customer issues and proactively solve them with quick and instant efforts even before your customer could know.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_Streamline-Operations.svg"
                      alt="icons_Streamline-Operations"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Streamline Operations</h3>
                    <p>
                    Securely and seamlessly connect your people, products, and operational practices with real-time effectiveness to instantly track and monitor complex things and ensure improved workflow.
                    </p>
                  </div>
                </div>

                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/icons_Manufacturing-Intelligence.svg"
                      alt="icons_Manufacturing-Intelligence"
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Manufacturing Intelligence</h3>
                    <p>
                    Manufacturers can drive integrated business intelligence with automation capability. Further, combining it with IoT, Mixed Reality, etc. can help to optimize processes and enhance device effectiveness.
                    </p>
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
                      src="/img/manufacturing side.png"
                      className="fix-im"
                      alt="manufacturing side"
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <a
                          data-bs-toggle="modal"
                          href="#javascript:void(0)"
                          onClick={() => setOpen(true)}
                        >
                          <img
                            src="/img/video-Manufacturing.png"
                            alt="video-Manufacturing"
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
                  How to upgrade your manufacturing capabilities with a Cloud Manufacturing solution?
                  </h2>
                  <p>
                  Let's understand how to upgrade your manufacturing capabilities, enable a smarter factory experience, and drive innovation by implementing a Cloud Manufacturing solution.
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
        <section className="call-to-action-center hero-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="call-to-action-content">
                  <h3>
                  How to Uplift Your Manufacturing Capabilities with Microsoft Cloud Manufacturing Solution?
                  </h3>
                  <p>
                  Let's come together to understand your business context and how cloud manufacturing industry solution can help to support your ongoing as well as futuristic processes to attain growth, drive innovation, and ensure success.
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
                  src="/img/n/Cloud-For-Manufacturing-banner.png"
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

