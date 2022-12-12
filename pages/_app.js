import  '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layouts from '../components/Layouts'
import {useRouter} from 'next/router';
import Header from '../components/Header';

// function MyApp({ Component, pageProps }) {

//   return 
  
//   <Layouts>
//       <Component {...pageProps} />
//     </Layouts>
// }

// export default MyApp



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if(router.asPath =='/contact-us/' ||
      router.asPath =='/subscriber-thank-you/' ||
      router.asPath =='/email-dynamics365-crm/' ||
      router.asPath =='/emailer-power-bi/' ||
      router.asPath =='/not-for-profit-fundrasing-engagenment/' ||
      router.asPath =='/email-ax-to-finance/' ||
      router.asPath =='/email-gp-to-bc/' ||
      router.asPath =='/email-wms/' 
  )  {
    return (
      <>
      <Header />
      <Component {...pageProps} />
      </>
    )
   
 };

  return <>
  <Layouts>
  <Component {...pageProps} />
  </Layouts>
  </>
}

export default MyApp
