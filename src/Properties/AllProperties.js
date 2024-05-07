import React from 'react'
import SubHeader from '../SubHeader'
import Header from '../Header'
import Page from './Page'
import Section from './Section'
import Footer from '../Footer'
import { CartProvider } from 'react-use-cart'

function AllProperties() {
  return (
    <CartProvider>
    <SubHeader/>
    <Header/>
    <Page/>
    <Section/>
    <Footer/>
    </CartProvider>
  )
}

export default AllProperties