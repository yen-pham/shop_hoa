import React, { Component } from 'react';

class SlideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem('user')
        }
    }

    logout = () => {
        localStorage.removeItem('user');
        this.setState({ user: null });
    }
    user = () => {
        if (this.state.user !== null)
            return (
                [<a key="1" className="search-nav" >
                    <img style={{ width: "34%" }} src={JSON.parse(localStorage.getItem('user')).linkimg} />
                    {JSON.parse(localStorage.getItem('user')).username}
                </a>,
                <button key="2" className="btn amado-btn active" onClick={() => this.logout()} ><img />LOGOUT</button>]);
        else return (<a href='/login' >Login</a>)
    }

    render() {
        return (
            <header className="header-area clearfix">
                {/* Close Icon */}
                <div className="nav-close">
                    <i className="fa fa-close" aria-hidden="true" />
                </div>
                {/* Logo */}
                <div className="logo">
                    <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                </div>
                {/* Amado Nav */}
                <nav className="amado-nav">
                    <ul>
                        <li className="active"><a href="shop.html">Shop</a></li>
                        <li><a href="product-details.html">Product</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                    </ul>
                </nav>
                {/* Button Group */}
                <div className="amado-btn-group mt-30 mb-100">
                    <a href="#" className="btn amado-btn mb-15">%Discount%</a>
                    <a href="#" className="btn amado-btn active">New this week</a>
                </div>
                {/* Cart Menu */}
                <div className="cart-fav-search mb-100">
                    <a href="cart.html" className="cart-nav"><img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span></a>
                    <a href="#" className="fav-nav"><img src="img/core-img/favorites.png" alt="" /> Favourite</a>
                    <a href="#" className="search-nav"><img src="img/core-img/search.png" alt="" /> Search</a>
                    {this.user()}
                </div>
                {/* Social Button */}
                <div className="social-info d-flex justify-content-between">
                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                </div>
            </header>

        );
    }
}

export default SlideBar;