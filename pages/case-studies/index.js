import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
const CaseStudyList = () => {
  return (
    <>
      <Head>
      <title>Microsoft Dynamics 365 Case Studies | Dynamics Square</title>
<meta name="description" content="Discover our client's case studies and see how we care about them from start to finish. We have worked with them to provide long lasting Dynamics 365 Support."/>
<link rel="canonical" href="https://www.dynamicssquare.com/case-studies/" />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Case Studies</h1>
              <p>
                Check out some of our case studies to see how Dynamics 365 has
                made a difference for our clients.
              </p>
              {/* <div>
                <div className="text-center text-lg-start">
                  <a href="#" className="btn-get-started scrollto">
                    <span>Borwse List</span>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/case-icons-list.png"
                alt="case-icons-list"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="nav flex-column nav-pills me-3 side-bar-common-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profiless"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true"
                >
                  All
                </button>
                <button
                  className="nav-link"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-homes"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="false"
                >
                  Upgrade
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profiles"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Implementation
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messagess"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Support
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
              <div
                  className="tab-pane fade show active"
                  id="v-pills-profiless"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/crm-trading-1.png"
                            alt="crm-trading"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            See how CRM Trading boosted it's operational
                            efficiency by upgrading from Dynamics NAV 2009 to
                            Dynamics NAV 2018.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/crm-trading/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/cs-DMIC-logo.png"
                            alt="cs-DMIC-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Streamline Manufacturing & Accounting with D365 Business Central On-Premise
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/dmic/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/cs-mexiland-logo.png" alt="MexiLand_logos" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Mexi Land was facing issues with the working of Dynamics NAV 2009. They want to perform better, but NAV 2009 was stopping them from working on full productivity.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/mexi-land/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/timesco-logo.png"
                            alt="timesco-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Timesco improved production capacity and
                            doubled revenue by upgrading Dynamics NAV to
                            Business Central Online.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/timesco/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/cs-lnl-logo.png"
                            alt="cs-lnl-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Improving Operational Efficiency by Upgrading NAV05 to NAV2018
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/thelandlcompany/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/cs-spectra-logo.png"
                            alt="cs-spectra-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implemented Custom EFT Module to improvise Payment Methods
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/spectra/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/wipersupplywide-1-300x54-1.png"
                            alt="wipersupplywide-1-300x54-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Wiper Supply Services doubled sales
                            volume and customers by getting dedicated support
                            from Dynamics Square.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/wiper-supply-services/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/cs-shimco-logo-csg.png" alt="cs-shimco-logo" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implementation of Microsoft Dynamics Business Central Cloud
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/shimco/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-homes"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/crm-trading-1.png"
                            alt="crm-trading"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            See how CRM Trading boosted it's operational
                            efficiency by upgrading from Dynamics NAV 2009 to
                            Dynamics NAV 2018.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/crm-trading/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/cs-DMIC-logo.png"
                            alt="cs-DMIC-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Streamline Manufacturing & Accounting with D365 Business Central On-Premise
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/dmic/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/cs-mexiland-logo.png" alt="MexiLand_logos" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Mexi Land was facing issues with the working of Dynamics NAV 2009. They want to perform better, but NAV 2009 was stopping them from working on full productivity.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/mexi-land/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/timesco-logo.png"
                            alt="timesco-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Timesco improved production capacity and
                            doubled revenue by upgrading Dynamics NAV to
                            Business Central Online.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/timesco/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profiles"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/cs-lnl-logo.png"
                            alt="cs-lnl-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Improving Operational Efficiency by Upgrading NAV05 to NAV2018
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/thelandlcompany/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/cs-spectra-logo.png"
                            alt="Spectra-Aluminum-logo"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implemented Custom EFT Module to improvise Payment Methods
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/spectra/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messagess"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="row">
                    {/* <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img
                            src="/img/wipersupplywide-1-300x54-1.png"
                            alt="wipersupplywide-1-300x54-1"
                          />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                            Explore how Wiper Supply Services doubled sales
                            volume and customers by getting dedicated support
                            from Dynamics Square.
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/wiper-supply-services/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6">
                      <div className="commen-box-2 commen-box-9">
                        <div className="icons icons-0102">
                          <img src="/img/cs-shimco-logo-csg.png" alt="cs-shimco-logo" />
                        </div>
                        <div className="commen-boc-2-info">
                          <p>
                          Implementation of Microsoft Dynamics Business Central Cloud
                          </p>
                        </div>
                        <div className="btn-003">
                          <a
                            href="/case-studies/shimco/"
                            className="btn btn md btn-danger"
                          >
                            Read Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  4
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settingss"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default CaseStudyList;
