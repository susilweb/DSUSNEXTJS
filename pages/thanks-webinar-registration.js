import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import FooterHide from "../components/FooterHide";
const ThankYouWebinar = () => {
  return (
    <>
      <Head>
      <title>Thank You for Webinar Registration - Dynamics Square</title>
<meta name="description" content="We will send you a confirmation email shortly, with details on how to join."/>
<link rel="canonical" href="https://www.dynamicssquare.com/thanks-webinar-registration/" />
      </Head>
      <section className="Solution-banner">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>
              Thanks For Registering<br /> To Our Webinar!
              </h1>
              <p>
              We will send you a confirmation email shortly, with details on how to join.
              </p>
              <p><b>Until then, take a look at our:</b></p>
              <p><a href="https://www.dynamicssquare.com/blog/" target="_blank" rel="noopener">Resources</a> | <Link href="/webinars/" target="_blank" rel="noopener">Previous Webinars</Link></p><br />
              <div className="text-center">
                <div className="">
                  <Link href="/"><a   className="btn-get-started scrollto">  <span>Back to Home</span></a>
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

export default ThankYouWebinar;
