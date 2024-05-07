import React from 'react'
import { NavLink,} from 'react-router-dom'
import { CartProvider , useCart} from 'react-use-cart'

function Header() {
  const {totalItems} = useCart();
  return (
    <CartProvider>
         <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <NavLink to="/" className="logo">
                        <h1>Villa</h1>
                    </NavLink>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                      <li><NavLink to="/" className="">Home</NavLink></li>

                      <li><NavLink to="/properties">Properties</NavLink></li>

                      <li><NavLink to="/property">Property Details</NavLink></li>

                      <li><NavLink to="/contact">Contact Us</NavLink></li>

                      <li><NavLink to="/products">Products</NavLink></li>

                      <li><NavLink to="/shop">Shop</NavLink></li>

                      <li><NavLink to="/cart"><i className="fa-solid fa-cart-plus"></i>({totalItems})</NavLink></li>
                     
                      <li><NavLink to="#"><i className="fa fa-calendar"></i> Schedule a visit</NavLink></li>

                      
                  </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
    </CartProvider>
  )
}

export default Header