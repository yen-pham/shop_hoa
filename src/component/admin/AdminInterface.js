import React, { Component } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import TableProducts from './products/TableProducts';
import FormProduct from './products/FormProduct';

class AdminInterface extends Component {
    render() {
        return (
            <section id="container">
                <Navbar/>
                <Menu/>
                <FormProduct/>
            </section>
        );
    }
}

export default AdminInterface;