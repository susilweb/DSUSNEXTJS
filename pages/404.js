import Link from 'next/link';
const Error = () => {
  return (
    <>
      <section className="Solution-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mobile-1">
              <h1 className='text-center' style={{fontSize:"60px !important"}}>
                404
              </h1>
              <h2 className="text-center">
              The Page You Were Looking For Couldn't Be Found
              </h2>
              <div className='text-center' style={{textAlign:'center'}}>
                <div className="text-center">
                  <Link href="/"><a
                    className="btn-get-started scrollto"
                  >
                    <span>Back To Home</span></a>
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

export default Error;
