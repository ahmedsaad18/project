import React from 'react'
import SubHeader from '../SubHeader'
import Header from '../Header'
import PageHead from './PageHead'
import Single from './Single'
import Footer from '../Footer'
import BestDeals from './BestDeals'
import { CartProvider } from 'react-use-cart'

function AllProperty() {
  return (
    <CartProvider>
        <SubHeader/>
        <Header/>
        <PageHead/>
        <Single/>
        <BestDeals/>
        <Footer/>
    </CartProvider>
  )
}

export default AllProperty