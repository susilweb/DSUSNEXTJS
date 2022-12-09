import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
const CaseStudySpectra = () => {
  return (
    <>
      <Head>
      <title>Spectra Aluminum | Implement Custom EFT Module</title>
<meta name="description" content="Spectra Aluminum worked with Dynamics Square to implement custom EFT Module to improvise Payment Methods."/>
<link rel="canonical" href="https://www.dynamicssquare.com/case-studies/spectra/" />
      </Head>

      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">Industry-leading Aluminium Extrusion Industry</span>
                  <h1>
                  Spectra Case Study
                  </h1>
                  <h2>Implemented Custom EFT Module to improvise Payment Methods</h2  >
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
                    src="/img/cs-spectra-logo.png"
                    alt="cs-spectra-logo"
                  />
                </div>
                <div className="col-lg-9">
                  <p>
                  Established in 1978, <a
                      href="https://www.spectraaluminum.com/"
                      rel="noopener nofollow"
                      target="_blank"
                    >
                      {" "}
                      Spectra Aluminum{" "}
                    </a>{" "} is a world-class aluminium extrusion industry located near Toronto, Canada. It is a family-owned and operated business with a track record of delivering high-quality aluminium products to worldwide customers. Its sole aim is to provide high-quality products, whether a simple aluminium extrusion or a complex design with a customizable requirement. They offer services managed in-house only like, CAD design, 3D prototyping, Brite Dip and etch custom anodizing, full-colour spectrum dyeing, custom fabrication, automated packaging, and more. 
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
                    Spectra wanted to implement an EFT (Electronic Funds Transfer) on their existing database per banking portal norms.
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
                    They had difficulties managing several vendors and channel partners to release payments.
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
                    From printing cheques to advice for banks, Spectra were doing it all manually. 
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
                    The manual release of payment leads to errors and consumes a lot of staff time, making the entire process cumbersome.
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
            <h2>Support Offered to Spectra</h2>
            <p>Implementing EFT to Manage Payments </p>
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
                            Dynamics Square helped Spectra implement the EFT to manage the payments automatically. 
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
                              Dynamics Square successfully reduced the time taken to process a payment to the vendor.
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
                              We helped them eliminate unnecessary steps where the cheque needed to be sent to the vendor for approval.
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
                              Also, Dynamics Square configured the system to send the remittance advice automatically to the customer via mail to check the status of any new payment and shows the error, if any. 
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
                    <strong>Reduced Transaction Time:</strong> The payment transaction processes fluently once the company decide the amount. The employees of Spectra have to click a button, and the system-generated file directly loads into the bank to process the payment.
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
                    <strong>Eliminate Redundant Tasks:</strong> There is no need to print cheques or send them to customers. Most of the manual tasks were eliminated after implementing the customized EFT by Dynamics Square. 

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
                      Tools to Manage Bulk Transaction: Dynamics Square helped Spectra understand the tools to manage the bulk and frequent transitions.
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

      <section className="case-clent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="case-clent-test">
                <p>
                Implementing the Custom EFT tool by Dynamics Square helped us streamline payments to our vendors and eliminating majority of related manual tasks. Dynamics Square demonstrated a clear and nuanced understanding of Business Central. Working with Dynamics Square meant the project was delivered on Time and without cost overrun.
                </p>
                <h4>Mary Nyugen</h4>
                <span>Spectra Aluminium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <Link  href="#exampleModal"><a
                    data-bs-toggle="modal"
                  
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span></a>
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

export default CaseStudySpectra;
