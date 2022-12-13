import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
const IndustriesList = () => {
  return (
    <>
      <Head>
        <title>Industries | Dynamics Square</title>
        <meta
          name="description"
          content="Power the growth of your industry by implementing Dynamics 365 Business applications. Our Dynamics 365 experts have the expertise to assist you..."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/industries/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Industries</h1>
              <p>
                Power the growth of your industry by implementing Dynamics 365
                Business applications. Our Dynamics 365 experts have the
                expertise to assist you in any capacity you require.
              </p>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/Dynamics-365-for-professional-services.png"
                alt="Dynamics-365-for-professional-services"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>Choose your Industry</h2>
          </header>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Startup</h3>
                <div className="text-lg-center">
                  <Link href="/industries/startups/">
                    <a className="btn-get-started btn-sm scrollto">
                      <span>View More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Not for Profit</h3>
                <div className="text-lg-center">
                  <Link href="/industries/microsoft-cloud-for-nonprofit/">
                    <a className="btn-get-started btn-sm scrollto">
                      <span>View More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>E-Commerce</h3>
                <div className="text-lg-center">
                  <Link href="/industries/ecommerce/">
                    <a className="btn-get-started btn-sm scrollto">
                      <span>View More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Manufacturing & Distribution</h3>
                <div className="text-lg-center">
                  <Link href="/industries/microsoft-cloud-for-manufacturing/">
                    <a className="btn-get-started btn-sm scrollto">
                      <span>View More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Professional Services</h3>
                <div className="text-lg-center">
                  <Link href="/industries/professional-services/">
                    <a className="btn-get-started btn-sm scrollto">
                      <span>Know More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>Food & Beverages</h3>
                <div className="text-lg-center">
                  <Link href="/industries/food-and-beverages/">
                    <a className="btn-get-started btn-sm scrollto">
                      <span>View More</span>
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
export default IndustriesList;
