import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import SlideBar from './component/layout/SlideBar';
import Categories from './component/home/Categories';
import ShowProducts from './component/home/ShowProducts';
import Subscribe from './component/layout/Subscribe';
import Footer from './component/layout/Footer';
import ProductDetails from './component/product-details/product-details';
import Cart from './component/cart/Cart';
import Checkout from './component/checkout/Checkout';

function App() {
  return (
    <Fragment>
  <div className="search-wrapper section-padding-100">
    <div className="search-close">
      <i className="fa fa-close" aria-hidden="true" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="search-content">
            <form action="#" method="get">
              <input type="search" name="search" id="search" placeholder="Type your keyword..." />
              <button type="submit"><img src="img/core-img/search.png" alt="" /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Search Wrapper Area End */}
  {/* ##### Main Content Wrapper Start ##### */}
  <div className="main-content-wrapper d-flex clearfix">
    {/* Mobile Nav (max width 767px)*/}
    <div className="mobile-nav">
      {/* Navbar Brand */}
      <div className="amado-navbar-brand">
        <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
      </div>
      {/* Navbar Toggler */}
      <div className="amado-navbar-toggler">
        <span /><span /><span />
      </div>
    </div>
    {/* Header Area Start */}
   <SlideBar/>
    {/* Header Area End */}
    {/* <Categories/> */}
    {/* <ProductDetails/> */}
    <Checkout/>
   </div>
  {/* ##### Main Content Wrapper End ##### */}
  {/* ##### Newsletter Area Start ##### */}
 <Subscribe/> {/* ##### Newsletter Area End ##### */}
  {/* ##### Footer Area Start ##### */}
  <Footer></Footer>
 </Fragment>


  );
}

export default App;
