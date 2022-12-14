import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import FormSubsriber from '../components/FormSubsriber';
import FooterHide from '../components/FooterHide';

const SubscribeUpdates = () => {
  return (
    <>
      <Head>
      <title>Subscribe Updates - Dynamics Square</title>
<meta name="description" content="Subscribe Now For Latest Updates Stay Updated With upcoming insights, Offers and More."/>
<link rel="canonical" href="https://www.dynamicssquare.com/subscribe-updates/" />
      </Head>
      <section className="Solution-banner hero hero-demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center text-center">
              <h1>
              Subscribe Now For <br /> Latest Updates
              </h1>
              <div>

              </div>
            </div>
          </div>
        </div>
      </section>

         
      <section className="custom-sed-demp-wraper"  style={{paddingBottom:'160px'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8  align-self-center">
           
              <div className="sedule-form">
              <h3>Stay Updated With upcoming insights, Offers and More</h3>
                <FormSubsriber />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <FooterHide />
    </>
  );
};

export default SubscribeUpdates;
