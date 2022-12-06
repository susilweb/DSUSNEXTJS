
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
}

  render() {
    return (
      <Html lang='en-US'>
        <Head>
            <link href="/favicon.png" rel="icon" />
            <link href="/favicon.png" rel="apple-touch-icon" />
            <meta name="theme-color" content="#ee3442" />
            <meta name="robots" content="noindex,nofollow" />
            <link
            href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=Mochiy+Pop+One&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
            />
             <link
      href="/vendor/bootstrap/css/bootstrap.min.css"
      rel="stylesheet"
    />
            {/* <script src="https://www.googleoptimize.com/optimize.js?id=OPT-M9Z4742"></script>
            <meta name="google-site-verification" content="xFgE4PTaJv9p6KEkLb3yvhTbsewZhPo7xg8VbUXi_ME" /> */}
            <meta name="robots" content="noindex,nofollow" />
            {/* <Script async
            src="https://www.googletagmanager.com/gtag/js?id=UA-243571673-1"
            strategy="beforeInteractive"
            />
            <Script id="google-analytics" strategy="beforeInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-243571673-1');
                `}
            </Script>
             <Script id="Adoric_Script" strategy="afterInteractive">
                {`
                (function (a, d, o, r, i, c, u, p, w, m) {
                  m = d.getElementsByTagName(o)[0], a[c] = a[c]
                  || {}, a[c].trigger = a[c].trigger || function () {
                  (a[c].trigger.arg = a[c].trigger.arg || []).push(arguments)},
                  a[c].on = a[c].on || function () {(a[c].on.arg = a[c].on.arg || []).push(arguments)},
                  a[c].off = a[c].off || function () {(a[c].off.arg = a[c].off.arg || []).push(arguments)
                  }, w = d.createElement(o), w.id = i, w.src = r, w.async = 1, w.setAttribute(p, u),
                  m.parentNode.insertBefore(w, m), w = null}
                  )(window, document, "script", "https://68645155.adoric-om.com/adoric.js", "Adoric_Script", "adoric","5d7b8ed8217b2eb2098e9eaca5386d15", "data-key");
                `}
            </Script> */}
            
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument