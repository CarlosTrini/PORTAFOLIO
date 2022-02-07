import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children, showFooter}) => {

  return (
   <>
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
