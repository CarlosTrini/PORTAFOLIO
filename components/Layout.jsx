import React from 'react';

import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

const originSite = (typeof window === 'undefined') ? '' : window.location.origin;

const Layout = ({children, showFooter}) => {

  return (
   <>
       <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta
            property="og:title"
            content="portafolio frontend"
          />
          <meta
            property="og:description"
            content="Portafolio frontEnd con NextJs"
          />
          <meta
            property="og:image"
            content={`${originSite}/images/sites/portafolio.png`}
          />
          <meta property="og:type" content="article" />
          <meta name="description" content="Bienvenido a mi portafolio web, en el cual muestro algunos proyectos realizados durante mis practicas" />
          
          <title>Portafolio web FrontEnd</title>
        </Head>

         <Header />
         <main>
            {children}
         </main>
         {
           showFooter && <Footer />
         }
         
   </>
  );
};

export default Layout;
