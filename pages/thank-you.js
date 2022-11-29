import Head from 'next/head';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
const ThankYou = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/' , null, { shallow: true })
  //   }, 4000)
  // }, [])
  return (
    <>
      <Head>
        <title>Thank You | Dynamics Square</title>
        <meta
          name="description"
          content="Thanks for getting in touch - someone will contact you soon!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/thank-you/"
        />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <section className="Solution-banner hero-1 custom-pd-4">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>Thank You !</h1>
              <h2>
                Thanks for getting in touch - someone will contact you soon!
              </h2>
              <div className="text-center">
                <div className="">
                  <a href="/" className="btn-get-started scrollto">
                    <span>Back to Home</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
