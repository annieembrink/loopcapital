import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import '@/styles/home/home.css';
import '@/styles/contact/contact.css';
import '@/styles/portfolio/portfolio.css';
// import '@/styles/header.css';

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
    AOS.init();
  }, []);
  return <Component {...pageProps} />
}