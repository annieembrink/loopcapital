import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import '@/styles/home/home.css';
import '@/styles/contact/contact.css';
import '@/styles/header.css';

import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);
  return <Component {...pageProps} />
}