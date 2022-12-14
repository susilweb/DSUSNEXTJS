import Head from 'next/head';
import Link from 'next/link';
import FormCampaign from "../components/FormCampaign";
import FooterHide from "../components/FooterHide";
const SupportDynamics365Mailer = () => {
  return (
    <>
      <Head>
      <title>Maximize your resource utilization and leverage the full potential | Dynamics Square</title>
        <meta
          name="description"
          content="AI &amp; Machine Learning Capabilities"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/support-dynamics-365/"
        />
      </Head>
      <section
        className="Solution-banner hero-1 hero"
        style={{ overflow: "hidden", paddingBottom: "160px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              Maximize your resource utilization and leverage the full potential
              </h1>
              <p>
              To ensure process continuity, stabilize process optimization, and focus on business scope, SMBs require an optimal support system. Businesses should embrace proactive support services for NAV and D365 Business Central from a trustworthy Partner like <b>Dynamics Square</b>. 
              </p>
              <p>
                <b>Will handle every aspect of your Dynamics 365 system requirements:</b>
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                      Ad-hoc Support to instantly resolve the issues whenever encountered.
                      </p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                      Prepaid Hours Support to provide 50 hours of priority support to our clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                      Annual Support to help you keep the system running 24X7. 
                      </p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                      Allow users to help them understand the latest features & make the solution easy to access for all users. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1  align-self-center"></div>
            <div className="col-lg-5  align-self-center">
              <div className="main-form-wrper main-form-wrper-nav">
                <h3>Please fill the form to connect further</h3>
                <FormCampaign />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHide />
      
    </>
  );
};

export default SupportDynamics365Mailer;
