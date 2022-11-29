import Head from 'next/head'
import Iframe from "react-iframe";
const Partner = () => {
    return (
      <>
        <Head>
          <title>Our Partners | Dynamics Square</title>
          <meta name="description" content="Learn about the collaborative work we do with our partners. We create limitless impact in collaboration with industry leaders and innovators. " />
          <link
            rel="canonical"
            href="https://www.dynamicssquare.ca/partner/"
          />
        </Head>
        <section className="Solution-banner hero partener-di">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 mobile-1 text-center">
                <h1>Our Partners</h1>
                <h2>Build Together. Grow Together.</h2>
                <span>Our ISV partners are integral to the success of our business model, and we take pride in offering expertly developed IP to integrate with the Microsoft Dynamics ecosystem and help build you the perfect solution for your business needs.</span>
              </div>
            </div>
          </div>
        </section>
  
        <section className="busine_service_bottom custom0002">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5 align-self-center">
                <Iframe
                  url="https://www.youtube.com/embed/6nMpR4zYtGE"
                  width="100%"
                  height="300px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />
              </div>
              <div className="col-lg-1 align-self-center"></div>
              <div className="col-lg-6 align-self-center">
                <div className="side-heading">
                  <h3>
                  WMS Express - Dynamics Square
                  </h3>
                </div>
                <div className="custom002">
                  <p>
                  Insight Works is a global leader in productivity solutions for manufacturers and distributors offering end-to-end software applications ranging from procurement and warehouse management to manufacturing and shipping.
                  </p>
                  <p>Insight Works specializes exclusively in add-ons for Microsoft Dynamics 365 Business Central. Products include mobile warehouse data collection, shop floor data collection, inventory management, integrated shipping, scheduling and more.</p>
                  <p>Insight Works is headquartered in Canada and boasts a European presence in the Netherlands and remote offices in the United States.</p>
                  <a href="https://www.dmsiworks.com/" target="_blank">
                 www.dmsiworks.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="busine_service_bottom custom0001">
          <div className="container">
            <div className="row g-5">
            <div className="col-lg-6 align-self-center">
            <div className="side-heading">
                  <h3>
                  The Anveo Group
                  </h3>
                </div>
                <div className="custom002">
                  <p>
                  Anveo is a trade mark of conion media GmbH located in Hamburg, Germany. Conion media GmbH was founded in 2005 to build business software with Microsoft Dynamics NAV.
                  </p>
                  <p>Our passion is to build horizonal solutions as add-ons for Microsoft Dynamics NAV. These add-ons, the Anveo product family, is highly optimized to be implemented by other Microsoft Dynamics NAV partners on their own.</p>
                  <p>Anveo is sold world wide via more than 200 Anveo partners</p>
                  <a href="https://www.anveonav.com/en/" target="_blank">
                  www.anveonav.com
                  </a>
                </div>
              </div>
              <div className="col-lg-1 align-self-center"></div>
              <div className="col-lg-3 align-self-center">
                <img src="/img/p4.jpg" alt="p4" />
              </div>
             
            </div>
          </div>
        </section>
        <section className="busine_service_bottom custom0002">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-3 align-self-center">
                <img src="/img/p3.jpg" alt="p3" />
              </div>
              <div className="col-lg-1 align-self-center"></div>
              <div className="col-lg-8 align-self-center">
              <div className="side-heading">
                  <h3>
                  To Increase 
                  </h3>
                </div>
                <div className="custom002">
                  <p>
                  An Independent Software Vendor (ISV) of Microsoft Dynamics 365 Enterprise and Business Operations solutions. To Increase create software solutions and deliver services that enable companies to innovate as they serve their customers and collaborate with their partners and vendors.
                  </p>
                  <p>To Increase offers powerful Industry Specific and Add-on Solutions on Dynamics 365 for Operations, AX2012, and NAV.</p>
                  <a href="http://www.to-increase.com/" target="_blank">
                  www.to-increase.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="busine_service_bottom custom0001">
          <div className="container">
            <div className="row g-5">
            <div className="col-lg-8 align-self-center">
            <div className="side-heading">
                  <h3>
                  Agiles Workflow
                  </h3>
                </div>
                <div className="custom002">
                  <p>
                  A Member of the Agiles Group provides certified industry solutions for shipping companies, fresh food and Non-food traders including BI Programs on Microsoft Dynamics NAV. beside from Industry solutions, Agiles deliver the only workflow application that is fully integrated for Microsoft Dynamics NAV.
                  </p>
                  <a href="http://en.agilesworkflow.com/" target="_blank">
                  www.agilesworkflow.com
                  </a>
                </div>
              </div>
              <div className="col-lg-1 align-self-center"></div>
              <div className="col-lg-3 align-self-center">
                <img src="/img/p2.jpg" alt="p2" />
              </div>
             
             
            </div>
          </div>
        </section>
        <section className="busine_service_bottom custom0002">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-3 align-self-center">
                <img src="/img/new1.jpg" alt="new1" />
              </div>
              <div className="col-lg-1 align-self-center"></div>
              <div className="col-lg-8 align-self-center">
              <div className="side-heading">
                  <h3>
                  E-Con Solutions
                  </h3>
                </div>
                <div className="custom002">
                  <p>
                  E-Con Solutions offers nearly 20 years of focused, expert, experience with CPQ for Microsoft Dynamics. Their proven, innovative toolset brings together everyone and everything involved in configuration, from first glance at your offerings through after-sales. More than 300 businesses and 25,000 users in 25 countries use e-Con every day to turn complexity into success.
                  </p>
                  <a href="https://e-consolutions.com/" target="_blank">
                  www.e-consolutions.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Partner;
