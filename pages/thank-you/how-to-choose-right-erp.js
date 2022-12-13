import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
const ThankYouHowToChooseRightErp = () => {
  return (
    <>
      <Head>
        <title>Here&#039;s Your eBook on ERP | Dynamics Square</title>
        <meta
          name="description"
          content='You can access your eBook, "How to Choose the Right ERP for Your Business" from Dynamics Square here at any time.'
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/thank-you/how-to-choose-right-erp/"
        />
      </Head>
      <section className="Solution-banner hero-1 hero hero-demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center text-center">
              <h1>You're All Set!</h1>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-sed-demp-wraper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-8  align-self-center">
              <div className="sedule-form">
                <h3>
                  You'll receive a copy of your eBook straight to your
                  registered email address.
                </h3>
              </div>
              <div className="row bg-3335">
                <div className="col-lg-6 align-self-center">
                  <div className="down-title">
                    <h4>
                      Why Should You Upgrade From Microsoft Dynamics Nav To
                      Dynamics 365 Business Central?
                    </h4>
                    <div className="text-center text-lg-start">
                      <a
                        href="/pdf/How-to-Choose-the-Right-ERP.pdf"
                        className="btn-get-started scrollto btn-mar"
                      >
                        <span>Download the Ebook </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="down-title-img">
                    <img
                      src="/img/Cover_Book_Moc.png"
                      alt="Cover_Book_Moc.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-wrper-erp">
        <div className="container">
          <div className="row p-4">
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/Dynamics-365-service.png"
                alt="Dynamics-365-service.png"
              />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="custom-wrper-erp-title">
                <h3>Upgrade to Dynamics 365 Business Central</h3>
                <p>
                  Willing to implement or upgrade Microsoft D365 Business
                  Central solution? Schedule your Business Central Demo today!
                </p>
              </div>
              <div className="text-lg-start">
                <Link href="/products/dynamics-365-business-central/">
                  <a className="btn-get-started scrollto btn-mars">
                    <span>Get Started </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouHowToChooseRightErp;
