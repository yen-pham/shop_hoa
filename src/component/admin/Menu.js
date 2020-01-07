import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <aside>
  <div id="sidebar" className="nav-collapse ">
    {/* sidebar menu start*/}
    <ul className="sidebar-menu" id="nav-accordion">
      <p className="centered"><a href="profile.html"><img src="assets/img/ui-sam.jpg" className="img-circle" width={60} /></a></p>
      <h5 className="centered">Marcel Newman</h5>
      <li className="mt">
        <a className="active" href="index.html">
          <i className="fa fa-dashboard" />
          <span>Dashboard</span>
        </a>
      </li>
      <li className="sub-menu dcjq-parent-li">
        <a className="dcjq-parent">
            <i className="fa fa-th" />
            <span>User Tables</span>
            <span className="dcjq-icon" /></a>
        <ul className="sub" style={{overflow: 'hidden', display: 'none'}}>
            <li><a href="basic_table.html">Admin Table</a></li>
            <li><a href="responsive_table.html">User Table</a></li>
        </ul>
        </li>
      <li className="sub-menu dcjq-parent-li">
        <a className="dcjq-parent">
            <i className="fa fa-th" />
            <span>Bill Tables</span>
            <span className="dcjq-icon" /></a>
        <ul className="sub" style={{overflow: 'hidden', display: 'none'}}>
            <li><a href="basic_table.html">All Bill</a></li>
            <li><a href="basic_table.html">Bill Accept</a></li>
            <li><a href="responsive_table.html">User Table</a></li>
        </ul>
        </li>
        <li className="sub-menu dcjq-parent-li">
        <a className="dcjq-parent">
            <i className="fa fa-th" />
            <span>Products Tables</span>
            <span className="dcjq-icon" /></a>
        <ul className="sub" style={{overflow: 'hidden', display: 'none'}}>
            <li><a href="basic_table.html">Products</a></li>
            
        </ul>
        </li>
  
    </ul>
    {/* sidebar menu end*/}
  </div>
</aside>

        );
    }
}

export default Menu;