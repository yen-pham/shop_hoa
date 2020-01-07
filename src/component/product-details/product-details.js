import React, { Component } from 'react';
import {hoa} from '../../connectFirebase/Connect';



class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state ={
      products:[] ,
     
    }
  }
    
    componentWillMount() {
 
        var productList=[];
        var categoryList=[];
        var i=0;
        hoa.ref('products').on('value',(product)=>{ product.forEach(element => {
          productList[i]=element.val();
          productList[i].key=element.key;
          // console.log(productList.length);
          i++;
          // console.log(i);
          
          
      });
              this.setState({products:productList});  
      });
     
       
   };
    
    
    render () { 
      
    return (<div className="single-product-area section-padding-100 clearfix">
    <div className="container-fluid">
          { this.state.products.map((value,key) =>{
        if(value.key==this.props.computedMatch.params.id){
        
          return  ( 
               
               <div className="row">
                 <div className="col-12 col-lg-7">
                   <div className="single_product_thumb">
                     <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                       <div className="carousel-inner">
                         <div className="carousel-item active">
                           <a className="gallery_img" href="img/product-img/pro-big-1.jpg">
                             <img className="d-block w-100" src="img/product-img/pro-big-1.jpg" alt="First slide" />
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-12 col-lg-5">
                   <div className="single_product_desc">
                     {/* Product Meta Data */}
                     <div className="product-meta-data">
                       <div className="line" />
                       <p className="product-price">$180</p>
                       <a href="product-details.html">
                         <h6>White Modern Chair</h6>
                       </a>
                       {/* Ratings & Review */}
                       <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                         <div className="ratings">
                           <i className="fa fa-star" aria-hidden="true" />
                           <i className="fa fa-star" aria-hidden="true" />
                           <i className="fa fa-star" aria-hidden="true" />
                           <i className="fa fa-star" aria-hidden="true" />
                           <i className="fa fa-star" aria-hidden="true" />
                         </div>
                         <div className="review">
                           <a href="#">Write A Review</a>
                         </div>
                       </div>
                       {/* Avaiable */}
                       <p className="avaibility"><i className="fa fa-circle" /> In Stock</p>
                     </div>
                     <div className="short_overview my-5">
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
                     </div>
                     {/* Add to Cart Form */}
                     <form className="cart clearfix" method="post">
                       <div className="cart-btn d-flex mb-50">
                         <p>Qty</p>
                         <div className="quantity">
                           <span className="qty-minus" onClick={()=>{var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;}}><i className="fa fa-caret-down" aria-hidden="true" /></span>
                           <input type="number" className="qty-text" id="qty" step={1} min={1} max={300} name="quantity" defaultValue={1} />
                           <span className="qty-plus" onClick={()=>{var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;}}><i className="fa fa-caret-up" aria-hidden="true" /></span>
                         </div>
                       </div>
                       <button type="submit" name="addtocart" value={5} className="btn amado-btn">Add to cart</button>
                     </form>
                   </div>
                 </div>
               </div>
             )
     
    }
    else if(key==this.state.products.length) {return <div>khong co san pham nay</div>} 
   
        })}
    </div>
           </div>
      );
    }
  };

export default ProductDetails;