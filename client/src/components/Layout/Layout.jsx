import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast';
import {Helmet} from "react-helmet";

function Layout({children, title, description,keywords, author}) {
  return (
    <div>
         <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
     <Header/>
        <main style={{minHeight:'70vh'}}>
        <Toaster />
      {children}
  
      </main>
      <Footer/>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title:'E-commerce app',
  description:'mern stack projecr',
  keywords:'mern , react, node , monogodb',
  author:'Nikith'
}
