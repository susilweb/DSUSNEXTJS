import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import emailjs from "@emailjs/browser";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
const Howtochooserighterp = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const [closeModal, setCloseModal] = useState(false);
  function handleCloseModal() {
    document.getElementById("exampleModal").classList.remove("show", "d-block");
    document
      .querySelectorAll(".modal-backdrop")
      .forEach((el) => el.classList.remove("modal-backdrop"));
  }
  const sendEmail = (e) => {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cxxhqoq",
        "template_f80fich",
        form.current,
        "7Ae4EIVY__86NsTQD"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(function () {
      setCloseModal(true);
      e.target.reset();
      router.push("/thank-you/how-to-choose-right-erp/");
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Free ERP eBook | Ultimate Guide to Choose the Right ERP</title>
        <meta
          name="description"
          content="Our guide will take you step-by-step through how to get started with ERP software, from the very beginning. Jump in and explore our free ERP eBook!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.US/ebook/how-to-choose-right-erp/"
        />
      </Head>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Ultimate Guide to <br />
                Choose the Right ERP
                <br />
                For Your Business
              </h1>
              <br />
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal1">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Download Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/erp-banner-book.png" alt="erp-banner-book" width={980} height={578}/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              By reading this E-book on ERP
              <br />
              You Will learn
            </h2>
          </header>
          <div className="row">
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-let">
                  <h3>When is the Right Time to Implement ERP?</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>How to Choose the Right ERP for Your Business?</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Steps for Successful ERP Implementation</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="slider-sp-wrpp">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper phone-slider"
                >
                  <SwiperSlide>
                    <img src="/img/cover-1.jpg" alt="cover-1.jpg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/img/right-time-to-implement-ERP.png"
                      alt="cover-1.jpg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/img/reason-for-implementing-ERP.png"
                      alt="cover-1.jpg"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/img/choose-right-WRP.png"
                      alt="choose-right-WRP"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/img/things-to-considerchoosing-ERP.png"
                      alt="things-to-considerchoosing-ERP"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/img/step-for-successful-ERP.png"
                      alt="step-for-successful-ERP"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="/img/selecting-right-ERP.png"
                      alt="selecting-right-ERP"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-rit">
                  <h3>Strategic Reasons for Implementing Modern ERP</h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>Things to Consider While Choosing Modern ERM System</h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>Selecting the Right ERP System</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboot-erp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="pic-ll">
                <Image src="/img/erp-left-about.png" alt="erp-left-about" width={337} height={460}
  />
              </div>
            </div>
            {/* <div className="col-lg-1 align-self-center"></div> */}
            <div className="col-lg-6 align-self-center">
              <div className="aboot-erp-content">
                <h3>More about this E-book</h3>
                <p>
                  As business houses start climbing the ladders of prosperity,
                  their systems start getting complex.
                </p>

                <p>
                  As a result, there will surely come a time when the manual
                  systems will fail to handle the increased number of data,
                  employees, and other elements. This is when it becomes crucial
                  to get help from other options such as software.
                </p>

                <p>
                  Now, the choice of software depends upon several factors,
                  mostly the requirement of the company. There can be some
                  companies that may consider getting individual software for
                  individual departments.
                </p>

                <p>
                  On the contrary, some business houses may prefer to get a
                  single ERP software.
                </p>
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
              <div className="call_to_action-left call_to_action-lefts">
                <h3>
                  Get started with your Ultimate Guide to choose right ERP for
                  Your Business
                </h3>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal1">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Download Now</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="header-title-left">
            <h3>FAQ</h3>
          </div>
          <div className="row pd-121">
            <div className="col-lg-6 align-self-center">
              <div className="fax-accd">
                <div className="accordion" id="faqaccer">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is an ERP?
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        An ERP or 'Enterprise Resource Plannin' is a set of
                        integrated software applications that allow us to
                        automate most of the business practices related to the
                        operational or productive aspects of our company.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What are the benefits of an ERP?
                      </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>Key ERP benefits include:</p>
                        <ol>
                          <li>Optimization of management processes</li>
                          <li>Improve the decision-making process</li>
                          <li>Data security</li>
                          <li>Modularity and Scalability</li>
                          <li>Task Automation and much mor</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Is this eBook really free?
                      </button>
                    </h3>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes!
                          <br />
                          <br />
                          At Dynamics Square, we adhere to Microsoft's Mission -
                          “to empower every person and every organization on the
                          planet to achieve more.”
                          <br />
                          <br />
                          And this can be achieved by providing authentic,
                          fruitful content to our readers in the best way
                          possible. We hope you'll find it useful. Get in touch
                          with us if you have any question!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        Why do I need to fill out the information requested?
                      </button>
                    </h3>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>
                          Dynamics Square will always keep your personal
                          information safe.
                          <br />
                          The only purpose of requesting information from you is
                          just to serve an improved experience to you every time
                          you visit our website.
                          <br />
                          <br />
                          We ask for your information in exchange for a valuable
                          resource in order to a improve your browsing
                          experience by personalizing the Dynamics Square site
                          to your needs; b send information to you that we think
                          may be of interest to you by email or other means; You
                          can read more about our{" "}
                          <a
                            href="/privacy-policy/"
                            target="_blank"
                            rel="noopener"
                          >
                            privacy policy
                          </a>{" "}
                          here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="pic-l2">
                <img src="/img/Cover_Book_Moc.png" alt="Cover_Book_Moc" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {!closeModal && (
        <div
          className="modal fade form-main-model"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Register For Free EBook
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <p></p>
              </div>
              <p>Fill the form and receive it straight to your inbox.</p>
              <div className="modal-body">
                <div className="main-form-wrper">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Full Name"
                        name="name"
                        required
                      />
                      <input type="hidden" value={router.asPath} name="url" />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="*Work Email"
                        name="email"
                        pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Company Name"
                        name="company_name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="*Phone Number"
                        name="phone"
                        pattern="^\d{10,13}$"
                        required
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        I agree to the
                        <Link href="/privacy-policy/" target="_blank">
                          Privacy Policy
                        </Link>
                        and
                        <Link href="/terms-of-use/" target="_blank">
                          Terms of Service
                        </Link>
                        .
                      </label>
                    </div>

                    <div className="spiner-wrper">
                      <button
                        type="submit"
                        className="btn btn-primary fomr-submit"
                      >
                        Download Now
                      </button>
                      <div className={display} role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Howtochooserighterp;
