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
const StartGuide = () => {
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
      router.push("/thank-you-for-registration/");
    }, 500);
  };

  return (
    <>
      <Head>
      <title>
          Why Should You Upgrade from Microsoft Dynamics NAV to Business
          Central?
        </title>
        <meta
          name="description"
          content="When upgrading Dynamics NAV to Business Central, it's important to know that the steps required will depend greatly on how different your version of NAV is from the standard version, as well as a variety of other factors."
        />
         <link
          rel="canonical"
          href="https://www.dynamicssquare.com/e-book/upgrade-nav-to-business-central/"
        />
      </Head>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                A Quick Start Guide To Upgrade From Dynamics NAV to Business
                Central
              </h1>
              <br />
              <div>
                <div className="text-center text-lg-start">
                  <Link   href="#exampleModal1"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Download Now</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <Image src="/img/prebook-banner.png" alt="erp-banner-book" width={800} height={708} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>This Ultimate eBook Will Walk You Through</h2>
              </header>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-let">
                  <h3>What is Microsoft Dynamics NAV?</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Pros & Cons of Dynamics NAV</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>
                    Introduction to Microsoft Dynamics 365 Business Central
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="text-center remove-pre">
                <Image src="/img/Ebbok-1.png" alt="Ebbok-1" width={487} height={613} />
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-rit">
                  <h3>
                    Why is it the right time to upgrade to Dynamics 365 Business
                    Central?
                  </h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>
                    Benefits of upgrading to Dynamics 365 Business Central
                  </h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>All about licencing for Dynamics 365 Business Central</h3>
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
                <Image
                  src="/img/erp-left-about.png"
                  alt="erp-left-about"
                  width={337} height={460}
                />
              </div>
            </div>
            {/* <div className="col-lg-1 align-self-center"></div> */}
            <div className="col-lg-6 align-self-center">
              <div className="aboot-erp-content">
                <h3>What's more about this eBook?</h3>
                <p>
                  Today, business organisations strive for agility, resilience,
                  and the ability to adapt quickly to ever-changing business
                  environments. And with the ongoing technological innovations,
                  it has never been greater.
                </p>
                <p>
                  Our eBook is a perfect guide for organisations that want an
                  upgrade from Dynamics NAV to Dynamics 365 Business Central but
                  are sceptical to adopt the cloud technology and implementation
                  cost and time for a cloud-based business software application.
                </p>
                <p>
                  This eBook will clear all your concerns and it will also show
                  you how you can improve productivity, automate processes, and
                  enhance security and mobility, across every step of the
                  digital transformation journey.
                </p>
                <p>
                  The moment you decide to get there will be several factors you
                  would find yourself stuck with. But with our Quick Start Guide
                  To Upgrade From Dynamics NAV to Business Central, you can
                  navigate the best and most efficient way to make the upgrade.
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
                  <Link  href="#exampleModal1"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Download Now</span></a>
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
                        Why should I upgrade from NAV to Business Central?
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        When businesses start climbing the success ladder, it's
                        obvious that their existing systems will no longer
                        handle complexities, increased number of data,
                        employees, and other elements. As a result, it becomes
                        crucial to upgrade the existing systems with next-gen
                        business software applications like Business Central
                        that come with new capabilities to add more value to add
                        to your organisation.
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
                        What is the latest version of Business Central and its
                        Benefits?
                      </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>
                          Business Central 2022 Wave 1 (BC 20) is the latest
                          version. And D365 Business Central 2022 Wave 2 (BC21)
                          is an upcoming version. Profitable growth begins with
                          effectively managing the revenue. Hence, the key
                          benefits of making an upgrade from NAV to Business
                          Central are:
                        </p>
                        <ol>
                          <li>
                            With highly advanced cloud technology and options
                            for integrating other data analysing software like
                            Power BI, it's easy to optimise all your management
                            processes
                          </li>
                          <li>
                            Improve the decision-making process with its
                            user-friendly interface
                          </li>
                          <li>
                            Secure all your Data with just one application
                          </li>
                          <li>Obtain desired Scalability and Modularity</li>
                          <li>
                            Quickly automate tasks without programming and
                            account knowledge
                          </li>
                          <li>Real-time cash flow status</li>
                          <li>
                            Improve the overall productivity of your business
                            organisation
                          </li>
                          <li>
                            No need to depend more on the human mind for
                            repeated tasks
                          </li>
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
                        How will this guide help me upgrade from Navision to
                        Business Central?
                      </button>
                    </h3>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        At Dynamics Square, we adhere to Microsoft's Mission -
                        “to empower every person and every organisation on the
                        planet to achieve more." And helping people helps us
                        provide authentic, fruitful solutions to people in the
                        best way possible. This guide contains crisp and
                        necessary content that you exactly need. Get in touch
                        with us in case you have queries.
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
                        What does Dynamics NAV upgrade cost?
                      </button>
                    </h3>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        With the ongoing shift towards the extension model and
                        web client functionalities, upgrading from Microsoft NAV
                        to Business Central turns out to be more challenging
                        every year. The trends also seem to be going upwards.
                        But with our help, you can substantially lower the cost
                        of the upgrade which is quite less than replacing your
                        existing system.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        Why do I need to fill out the information requested?
                      </button>
                    </h3>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        We keep your information confidential. The information
                        from your end helps us serve an improved and
                        personalised experience every time you visit our website
                        and provide you with the best solution so that your
                        business can make waves.
                        <br />
                        <br />
                        You can read more about our{" "}
                        <Link href="/privacy-policy/">
                          privacy policy
                        </Link>{" "}
                        here.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="pic-l2">
                <Image
                  src="/img/Cover_Book_Moc.png"
                  alt="Cover_Book_Moc"
                  width={582} height={466}
                />
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

export default StartGuide;
