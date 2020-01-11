import React, { Component, Fragment } from 'react';
import { hoa } from '../../../connectFirebase/Connect'


var products;
class TableProducts extends Component {
constructor(props) {
  super(props);
  this.state={
    products:[]
  }
}

  
  componentWillMount() {
    
  }
  getProducts = () => {
      var productList = [];
      var i = 0;
      hoa.ref('products').on('value', (product) => {
        product.forEach(element => {
          productList[i] = element.val();
          productList[i].key = element.key;
          i++;
        });
        this.setState({ products: productList });
      });
       products =this.state.products? this.state.products.map((value,key) => (<tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>)): <Fragment></Fragment>
    }
    
    render() {

        return (
            <section id="main-content">
  <section className="wrapper">
    <div className="row">
      <div className="col-md-12 mt">
        <div className="content-panel">
          <h4><i className="fa fa-angle-right" /> Products Table</h4><hr /><table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Img</th>
                <th>Price</th>
                <th>Category</th>
                <th>Describe</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products}
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Simon</td>
                <td>Mosa</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>{/* --/content-panel --*/}
      </div>{/* /col-md-12 */}
    </div>
  </section>{/* --/wrapper --*/}
</section>

        );
    }
}

export default TableProducts;