import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const CaseStudyShimco = () => {
  return (
    <>
      <Head>
        <title>Shimco | Business Central Implementation</title>
        <meta
          name="description"
          content="Shimco worked with Dynamics Square to implement Dynamics 365 Business Central Cloud. Read the case story to gain insights."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/case-studies/shimco/"
        />
      </Head>

      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">
                    Manufacturer of Shim & Small Parts for Aerospace
                  </span>
                  <h1>Shimco Case Study</h1>
                  <p>
                    Implementation of Microsoft Dynamics Business Central Cloud
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sider-over">
                <Image
                  src="/img/business-central-implementation-banner%20(1).svg"
                  alt="business-central-implementation-banner"
                  width={1024} height={597}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cast-studi-into">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row bg-case">
                <div className="col-lg-3 align-self-center">
                  <img
                    src="/img/cs-shimco-logo-csg.png"
                    alt="cs-shimco-logo-csg"
                  />
                </div>
                <div className="col-lg-9">
                  <p>
                    Established 30 years ago,{" "}
                    <a
                      href="https://shimco.com/"
                      rel="noopener nofollow"
                      target="_blank"
                    >
                      {" "}
                      Shimco{" "}
                    </a>{" "}
                    is a leading shim and small parts manufacturer for
                    manufacturing industries like Defence, Aerospace, Medical,
                    and more. It started as a manufacturer, but over time, it
                    became the technology leader with best-in-class
                    manufacturing capabilities. Shimco supplies its small parts
                    products for initial assembly as well as for maintenance
                    needs. It started using high-tolerance horizontal lathes and
                    CNC milling machines for manufacturing parts as per customer
                    demand. This company can now manufacture a few to a few
                    thousand products without any accuracy and tolerance issues.
                    When the quality of a product is concerned, no one is better
                    than Shimco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why custom-pd-1 custom-pd-2">
        <div className="container">
          <header className="section-header">
            <h2>
              What are The <br />
              Business Challenges?
            </h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6 align-self-center">
              <Image src="/img/cast-stu-pic.png" alt="cast-stu-pic" width={484} height={407}/>
            </div>
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      The performance of Shimco's current{" "}
                      <Link href="/products/microsoft-dynamics-nav/">
                        NAV version
                      </Link>{" "}
                      is not satisfactory at all in terms of inventory
                      management and valuation. They urgently needed to{" "}
                      <Link href="/our-services/dynamics-365-implementation-services/">
                        implement a new ERP
                      </Link>{" "}
                      (Enterprise Resource Planning) solution to manage the
                      departments like inventory, finance,{" "}
                      <Link href="/industries/microsoft-cloud-for-manufacturing/">
                        manufacturing
                      </Link>
                      , and supply chain.
                    </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      Shimco was not satisfied with the functions and
                      capabilities of NAV to manage the accounting needs. This
                      issue was affecting the overall performance of the
                      department.
                    </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      They were facing difficulties in tracking time of
                      employees on the shop floor.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      The current NAV version of Shimco makes it difficult for
                      them to collect the supply chain and inventory data. If
                      the data is available, they cannot collect it in
                      real-time.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      They were using an unreliable third-party solution that
                      empowers manufacturers to measure, analyze, and share
                      production information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-more-sec casestudy-list-more">
        <div className="container">
          <header className="section-header">
            <h2>Solution Delivered</h2>
            <p>Implementing Microsoft Dynamics 365 Business Central Cloud</p>
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
                      200: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1300: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    slidesPerView={3}
                    spaceBetween={15}
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
                          <div className="img-wrp">
                            <img
                              src="/img/material-lightbulb-outline.svg"
                              alt="Food-and-beverage"
                            />
                          </div>
                          <div className="text-wrp-content">
                            <p>
                              Dynamics Square upgraded and implemented the ERP
                              of Shimco from NAV2013 to{" "}
                              <Link href="/products/dynamics-365-business-central/">
                                Microsoft Dynamics 365 Business Central Cloud
                              </Link>
                              .
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="NotforProfit"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                <Link href="/products/dynamics-365-business-central/">
                                  Microsoft D365 Business Central
                                </Link>{" "}
                                enabled the users of Shimco to run and manage
                                the entire business from anywhere and 24/7 with
                                the cloud deployment of servers.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="Ecommerce"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                This new ERP helped the company manage and
                                supervise the accounting tasks without issues or
                                lags.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                To track the time of employees, we developed a
                                custom Time Collection Module and integrated it
                                with the Business Central.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                We replaced their third-party solution that
                                empowers manufacturers to our custom development
                                solution and integrated it with our Time
                                Collection Module.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                <Link href="/">Dynamics Square</Link> helped the
                                client understand all features and tools of
                                Business Central Online and helped them connect
                                data across the departments, like finance,
                                inventory, sales, and purchase.
                              </p>
                            </div>
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

      <section className="Solution-business-why custom-pd-3">
        <div className="container">
          <header className="section-header">
            <h2>Benefits</h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      After the{" "}
                      <Link href="/our-services/dynamics-365-upgrade-services/">
                        upgrade
                      </Link>
                      , the system of Shimco started to perform fast and better
                      without any issues.
                    </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      We have resolved their issues during inventory and{" "}
                      <Link href="/products/dynamics-365-supply-chain-management/">
                        supply chain management
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      Our custom Time Collection Module helped them track the
                      time for employees available on shop floor and helps them
                      manage the data of manufacturers.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      The Business Intelligence started helping the company to
                      make informed decisions about the process or operations in
                      real-time.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      They started automating the processes, making the business
                      more smooth and more seamless.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      As a trusted Microsoft partner, Dynamics Square helped
                      them understand the working of D365 Business Central for
                      growth and scalability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/Group1435.png" alt="Group1435" width={640} height={598}/>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="case-clent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="case-clent-test">
                            <p>We worked with Nitesh to further customize our Microsoft Dynamics Package. He provided us a top level service with well trained staff as well as excellent support when needed. Dynamics Square is a very professional and trustworth. Will surely recommend to everyone</p>
                            <h4>Terence Turner</h4>
                            <span>General Manager | Arteak Limited</span>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

      <section className="call_to_action call_to_action-height pd-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Consult To Reveal Best Approach</h3>
                <p>
                  Connect with us to facilitate your system to drive a parallel
                  approach in the market you deal with. We help enterprises to
                  implement their unique needs.
                </p>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk to Expert</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyShimco;
