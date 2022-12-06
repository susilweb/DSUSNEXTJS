import Link from "next/link";
import React from "react";
const Blog = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="blogs-extra-title">
          <h3>Articles</h3>
        </div>

        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <Link href="https://www.dynamicssquare.com/blog/what-are-dynamics-365-for-sales-benefits-and-capabilities/">
            <a
            >
              <img
                src="/img/MicrosoftTeams-image-4.jpg"
                alt="imgs"
                width="200"
                height="104"
              />
            </a>
            </Link>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <Link href="https://www.dynamicssquare.com/blog/what-are-dynamics-365-for-sales-benefits-and-capabilities/">
              <a
              >
               What are the Benefits and Capabilities of Microsoft Dynamics 365 for Sales?
              </a>
              </Link>
            </h4>
            <span>August 3, 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <Link href="https://www.dynamicssquare.com/blog/microsoft-dynamics-nav-vs-business-central/">
            <a>
              <img
                src="/img/Microsoft-Dynamics-NAV-and-Business-Central.jpg"
                alt="imgs"
                width="200"
                height="104"
              />
            </a>
            </Link>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <Link    href="https://www.dynamicssquare.com/blog/microsoft-dynamics-nav-vs-business-central/">
              <a>
               What is the Difference between Microsoft Dynamics NAV and Dynamics 365 Business Central?
              </a>
              </Link>
            </h4>
            <span>June 28, 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <Link href="https://www.dynamicssquare.com/blog/why-your-business-needs-power-bi/">
            <a
            >
              <img
                src="/img/Why-Your-Business-Needs-Power-B.jpg"
                alt="imgas"
                width="200"
                height="104"
              />
            </a>
            </Link>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <Link href="https://www.dynamicssquare.com/blog/why-your-business-needs-power-bi/">
              <a>
                Why Your Business Needs Power BI?
              </a>
              </Link>
            </h4>
            <span>June 22, 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <Link  href="https://www.dynamicssquare.com/blog/how-to-generate-interactive-reports-in-power-bi/">
            <a>
              <img
                src="/img/Generate-Interactive-Reports-in-Power-BI.jpg"
                alt="imgs"
                width="200"
                height="104"
              />
            </a>
            </Link>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <Link  href="https://www.dynamicssquare.com/blog/how-to-generate-interactive-reports-in-power-bi/">
              <a>
               How to Generate Interactive Reports in Power BI?
              </a>
              </Link>
            </h4>
            <span>June 16, 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
