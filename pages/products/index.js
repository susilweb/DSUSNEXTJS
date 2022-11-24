import React, { useState } from "react";
import Head from 'next/head'
// import ModalVideo from "react-modal-video";
const ProductHome = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
      <title>Microsoft Dynamics 365 Products - Dynamics Square</title>
      <meta name="description" content="Microsoft Dynamics 365 Products | Dynamics Square: Microsoft Business Applications Transform your business digitally with Microsoft Business Applications"/>
        <link rel="canonical" href="https://www.dynamicssquare.ca/products/" />
        
      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              Products
              </h1>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductHome;
