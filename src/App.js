import React, { Component } from 'react';
import {  BrowserRouter as Router, Route  } from "react-router-dom";
import './App.css';
import ShowProducts from './component/home/ShowProducts';
import UserInterface from './component/UserInterface';
import AdminInterface from './component/admin/AdminInterface';
import Cart from './component/cart/Cart';
import ProductDetails from './component/product-details/product-details';
import Checkout from './component/checkout/Checkout';
import Login from './component/login/Login';
import Register from './component/login/Register';

class App extends Component  {
  
  render() {
    return (
            <Router>
            <Route path="/" exact render={()=>(<UserInterface><ShowProducts/></UserInterface>)} />
           <Route path="/checkout"  render={()=>(<UserInterface><Checkout/></UserInterface>)}/>
       
           <Route path="/productDetail/${id}" location={this.props.location} 
     render={(props)=>(<UserInterface><ProductDetails /></UserInterface>)}/>
       
           <Route path="/cart" render={()=>(<UserInterface><Cart/></UserInterface>)}/>
        
           <Route path="/admin" render={()=>(<AdminInterface/>)}/>
        
           <Route path="/login" render={()=>{if(localStorage.getItem('user')==null)
              return <Login/> 
              else return (<UserInterface><ShowProducts/></UserInterface>)}}/>
         <Route path="/register" render={()=>(<Register/>)}/> 
    </Router>)

}}
 export default App;

 
 