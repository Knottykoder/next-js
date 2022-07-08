import Navbar from '../component/Navbar'
import '../styles/globals.css'
import '../component/navbar.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>Project-DEMO</title>
    <meta  name="description" content='this is project demo of next js to understand the how to works in next js '/>
  </Head>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
