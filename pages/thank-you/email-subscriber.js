import Head from "next/head";
import Link from "next/link";
import FooterHide from "../../components/FooterHide";
const ThankYouEmailSubscriber = () => {
  return (
    <>
      <Head>
      <title>Email Subscriber - Dynamics Square</title>
<meta name="description" content="Stay connected for newest insights and updates."/>
<link rel="canonical" href="https://www.dynamicssquare.com/thank-you/email-subscriber/" />
      </Head>
      <section className="Solution-banner" style={{paddingBottom:'160px'}}>
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>Thank You !</h1>
              <h2>Stay connected for newest insights and updates.</h2>
              <div className="text-center">
                <div className="">
                  <Link href="/">
                    <a className="btn-get-started scrollto"><span>Back to Home</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHide />
    </>
  );
};

export default ThankYouEmailSubscriber;
