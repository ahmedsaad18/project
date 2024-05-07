import React from 'react'
import SubHeader from '../SubHeader'
import Header from '../Header'
import ContPage from './ContPage'
import ContSection from './ContSection'
import Footer from '../Footer'
import { CartProvider } from 'react-use-cart'


function AllContact() {
  return (
    <CartProvider>
        <SubHeader/>
        <Header/>
        <ContPage/>
        <ContSection/>
        <Footer/>
    </CartProvider>
  )
}

export default AllContact