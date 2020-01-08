import React, { Component } from 'react';
import {hoa} from '../../connectFirebase/Connect'
import xoadau from '../../xoaDau/XoaDau';


class Categories extends Component {
  constructor(props) {
    super(props);
    this.state ={
      Categories:[]
    }
    
  }
  componentDidMount() {
    var categoryList=[]
    var i=0;
    hoa.ref('categories').on('value',(category)=>{ category.forEach(element => {
      categoryList[i]=element.val();
      // console.log(productList.length);
      i++;
      // console.log(i);
      
      
  });
          this.setState({Categories:categoryList});  
  });
  }
  
    render() {
        return (
            <div className="shop_sidebar_area">
      {/* ##### Single Widget ##### */}
      <div className="widget catagory mb-50">
        {/* Widget Title */}
        <h6 className="widget-title mb-30">Catagories</h6>
        {/*  Catagories  */}
        <div className="catagories-menu">
          <ul>
            {this.state.Categories.map((value,index)=>{
            return <li key={index}><a href={"#"+xoadau(value.ten)}>{value.ten}</a></li>
            })}
           
          </ul>
        </div>
      </div>
    </div>
  
        );
    }
}

export default Categories;