import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
const FaqsUgradingDynamics = () => {
  return (
    <>
      <Head>
        <title>FAQ: Upgrading from AX to Dynamics 365 - AX to D365</title>
        <meta
          name="description"
          content="Upgrading from Dynamics AX 2009 and AX 2012 to Dynamics 365 for Operations brings significant new features and capabilities. Operations is available in three."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/faqs-upgrading-dynamics-ax-to-dynamics-365/"
        />
      </Head>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                FAQ's while looking to transition from
                <br />
                AX to Dynamics 365
              </h1>
              <p>
                Upgrading from{" "}
                <Link href="/products/microsoft-dynamics-ax/">Dynamics AX</Link>{" "}
                2009 and AX 2012 to Dynamics 365 for Operations brings
                significant new features and capabilities. Operations is
                available in three deployment scenarios and three types of user.
                This page aims to clarify the upgrade process and options.
              </p>
              <br />
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Talk To Expert</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/AX-Dynamics-365-banner.png"
                alt="AX-Dynamics-365-banner"
                width={723} height={473}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              Are Dynamics AX and <br />
              Dynamics 365 Similar?
            </h2>
            <p>
              Nearly, as both MS Dynamics AX and{" "}
              <Link href="/products/microsoft-dynamics-365/">
                MS Dynamics 365
              </Link>{" "}
              have embedded outstanding{" "}
              <Link href="/products/microsoft-power-bi/">BI capabilities</Link>,
              offering an exceptional user experience, and enabling businesses
              to develop interactive dashboards through high- end reporting
              features.
            </p>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <div className="tabls-cloud table-responsive">
                <table className="table table-striped   align-middle">
                  <thead>
                    <tr>
                      <th>
                        Products <br />
                        Released
                      </th>
                      <th>
                        Lifecycle <br />
                        Start Date
                      </th>
                      <th>
                        Mainstream <br />
                        Support End Date
                      </th>
                      <th>
                        Extended <br />
                        Support End Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Microsoft Dynamics AX 2009 Service Pack 1</td>
                      <td>3 Nov. 2008</td>
                      <td>10 Apr. 2018</td>
                      <td>12 Oct. 2021</td>
                    </tr>
                    <tr>
                      <td>Microsoft Dynamics AX 2012</td>
                      <td>25 Sept. 2011</td>
                      <td>9 Oct. 2018</td>
                      <td>12 Oct. 2021</td>
                    </tr>
                    <tr>
                      <td>Microsoft Dynamics AX 2012 R2</td>
                      <td>19 Feb. 2013</td>
                      <td>9 Oct. 2018</td>
                      <td>12 Oct. 2021</td>
                    </tr>
                    <tr>
                      <td>Microsoft Dynamics AX 2012 R3</td>
                      <td>1 Aug. 2014</td>
                      <td>12 Oct. 2021</td>
                      <td>12 Jan. 2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call_to_action call_to_action-height pd-401">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="images" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Take the next steps for your business</h3>
                <p>
                  Talk to our Dynamics 365 Expert to get the best price quotes.
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

      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Dynamics 365 Finance?
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What are the deployment scenarios?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <Link href="/products/microsoft-dynamics-365-finance/">
                          Dynamics 365 Finance
                        </Link>{" "}
                        deployment is extremely flexible. There are three
                        deployment options: cloud-hosted, on-premises (“local
                        business data”) and hybrid (“cloud + edge”). It is
                        possible to start on one scenario and move to another,
                        in either direction. There are different subscription
                        and infrastructure costs for each scenario.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      What happens to my existing customisations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        {" "}
                        Generally, the older your version of Microsoft Dynamics
                        AX, the more iterations it has undergone, and the more
                        likely the customisations will have to be re-developed
                        for Dynamics 365 for Operations. Custom coding is now
                        done via extensions instead of over-layering. Microsoft
                        has made it a priority to provide code upgrade tools to
                        simplify the migration of custom code.
                      </p>

                      <p>
                        The code upgrade tools in Lifecycle Services (LCS)
                        assist in evaluating the effort for upgrade before
                        making the commitment, automatically migrate code to the
                        current version, and also streamline the process by
                        providing automated merging and documenting where manual
                        merging needs to be performed.
                      </p>

                      <p>
                        As Dynamics AX 2012 R3 has a similar data structure to
                        D365 there will be less refactoring required than older
                        versions; and some customisations may now be covered by
                        standard functionality and will not have to be migrated
                        or re-coded.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      What happens to my existing reports and BI content?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        As with custom code, the upgrade process of reports and
                        BI content is a three-stage approach: analyse, execute
                        and validate. Microsoft's upgrade tools may migrate some
                        SSRS reports and BI cubes from AX 2012 R3, however,
                        content from older versions will need more
                        re-development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      What happens to my existing third-party interfaces?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The interface technology has evolved significantly since
                        AX 2009, so the older your version of AX the more likely
                        the interfaces will require re-development. Transition
                        needs to be assessed on a case-by-case basis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      What happens to my existing Dynamics AX licences?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics 365 for Operations is licenced on a monthly
                        subscription per user or per device. The on-premise
                        version may be licenced by monthly subscription or
                        annual perpetual licence.
                      </p>
                      <p>
                        For existing customers that are active on a Dynamics AX
                        maintenance plan Microsoft is offering a 40% discount on
                        the standard cloud-hosted Dynamics 365 pricing. There
                        are two transition-to-cloud options:
                      </p>
                      <ul className="opyu2 ">
                        <li>
                          <strong>From SA</strong>&nbsp;- allows you to continue
                          paying your Dynamics AX maintenance and add the
                          Dynamics 365 SKUs on top of this at any time. - allows
                          you to drop your existing maintenance payments at
                          renewal and move fully to the cloud service.
                        </li>
                        <li>
                          <strong>Cloud Add-on</strong>&nbsp;- allows you to
                          continue paying your Dynamics AX maintenance and add
                          the Dynamics 365 SKUs on top of this at any time.
                        </li>
                      </ul>
                      <p>
                        Active maintenance (SA or Enhancement Plan) will be a
                        requirement for on-premises D365 ('local business
                        data'). On-premises subscriptions will be 55% of cloud
                        pricing.
                      </p>
                      <p>
                        <strong>
                          There are four user types in D365O:&nbsp;
                        </strong>
                        Full user/Activity/Team member/Device. Our consultants
                        will be happy to provide more details on how your
                        current users will map to the new user types and which
                        options may be most cost effective for your
                        organisation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      What is the upgrade process?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The costs and effort of upgrade are fully evaluated
                        before making the commitment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                      How long will the upgrade process take?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>The following are very general estimates:</p>
                      <ul className="opyu2 ">
                        <li>
                          Mostly standard functionality with minimal change to
                          business processes - 2 to 3 months
                        </li>
                        <li>
                          Customisations that require re-development - 3 to 6
                          months
                        </li>
                        <li>
                          Customisations and significant re-engineering of
                          business processes - 6 to 9 months
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >
                      Will our staff need to be retrained?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <strong>No.</strong>&nbsp;Most of the business logic in
                        Dynamics AX is carried forward to D365O, yet the user
                        interface has been greatly improved to provide a more
                        fluid and intuitive experience.
                      </p>
                      <p>
                        Upgrading from AX 2009 may require more user training -
                        where necessary, this can be supplied throughout the
                        upgrade process to ensure maximum uptake of new
                        functionality and full onboarding at cutover.
                        Additionally, the Task Recorder tool within D365O has
                        been greatly enhanced to provide task guides with
                        step-by-step instructions for completing business
                        processes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-9"
                    >
                      Will the upgrade disrupt our operations
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <strong>No.</strong>&nbsp;Whether on-premises or in
                        cloud, D365O is deployed through LCS. New builds are
                        deployed first to test environments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-10"
                    >
                      How much will the upgrade cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Our experts will carry out a code and data assessment,
                        including BI and reporting content, interfaces and, if
                        required, business processes, then offer a fixed price
                        to upgrade your system to the latest{" "}
                        <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">
                          on-premises or cloud version
                        </Link>
                        , including converting and migrating data. Call us now
                        +1 281 899 0865.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-slider">
        <div className="container">
          <header className="section-header">
            <h2>Why Dynamics Square?</h2>
            <p>
              We employ market leading technologies, consultants, processes and
              proven methodologies to help clients to design, implement and
              manage their business solutions that align to business priorities,
              maximum return on their investment and to create high performance
              organizations.
            </p>
          </header>
          <div className="row pad-3y">
            <div className="col-lg-4 col-md-6">
              <div className="why-slider-sec why-slider-sec-nee">
                <h3>
                  <i className="bi bi-check-lg"></i>{" "}
                  <span>Years of Expertise</span>
                </h3>
                <p>
                  Our years of expertise helps us to align ourselves with our
                  customer's business needs, expectations with Microsoft
                  Business Solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-slider-sec why-slider-sec-nee">
                <h3>
                  <i className="bi bi-check-lg"></i>{" "}
                  <span>In-depth Knowledge</span>
                </h3>
                <p>
                  Our in-depth knowledge of products, technology, and Industry
                  helps us to design the solution that align with our customer's
                  business needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-slider-sec why-slider-sec-nee">
                <h3>
                  <i className="bi bi-check-lg"></i>{" "}
                  <span>Subject Matter Experts</span>
                </h3>
                <p>
                  Our highly experienced team of Microsoft Professionals having
                  the collective experience of over hundreds of successful{" "}
                  <Link href="/our-services/dynamics-365-implementation-services/">
                    Dynamics 365 implementations
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqsUgradingDynamics;
