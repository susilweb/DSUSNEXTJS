import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import Form from '../components/Form';
const ScheduleDemoForm = () => {
  return (
    <>
      <Head>
      <title>Schedule a Demo for Microsoft Dynamics 365 Applications</title>
<meta name="description" content="Schedule a demo today to get a better understanding about how Microsoft Dynamics Business Applications works. Talk to our Dynamics 365 experts today."/>
<link rel="canonical" href="https://www.dynamicssquare.com/schedule-a-demo/" />
      </Head>
      <section className="Solution-banner hero-1 hero hero-demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center text-center">
              <h1>
              Schedule A Demo Today!
              </h1>
              <div>

              </div>
            </div>
          </div>
        </div>
      </section>

         
      <section className="custom-sed-demp-wraper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8  align-self-center">
           
              <div className="sedule-form">
              <h3>Dynamics Square assists brands in deploying Microsoft Business Applications. Schedule a demo today.</h3>
                <Form />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default ScheduleDemoForm;
