import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-12 col-xl-6">
            <div className="single-product-wrapper">
              {/* Product Image */}
              <div className="product-img">
                <img src="img/product-img/product1.jpg" alt="" />
                {/* Hover Thumb */}
                <img className="hover-img" src="img/product-img/product2.jpg" alt="" />
              </div>
              {/* Product Description */}
              <div className="product-description d-flex align-items-center justify-content-between">
                {/* Product Meta Data */}
                <div className="product-meta-data">
                  <div className="line" />
                  <p className="product-price">$180</p>
                  <a href="product-details.html">
                    <h6>Modern Chair</h6>
                  </a>
                </div>
                {/* Ratings & Cart */}
                <div className="ratings-cart text-right">
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                  </div>
                  <div className="cart">
                    <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="img/core-img/cart.png" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        );
    }
}

export default Product;