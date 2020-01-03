import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import Categories from './Categories';
import {fetchProductList} from '../../store/actions';


class ShowProducts extends Component {

  componentDidMount = () => {
    this.props.fetchProductList();
  }
  render() {
    const status= this.props.status;
    if (status === false) return <div>...Loading</div>
    if (status === 'ERROR') return <div>...Error from server</div>
    const products = this.props.products;
    console.log(products.length);
    return (
      [<Categories key='1' />,
      <div className="amado_product_area section-padding-100" key='2'>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                {/* Total Products */}
                <div className="total-products">
                  <p>Showing 1-8 0f 25</p>
                  <div className="view d-flex">
                    <a href="#"><i className="fa fa-th-large" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-bars" aria-hidden="true" /></a>
                  </div>
                </div>
                {/* Sorting */}
                <div className="product-sorting d-flex">
                  <div className="sort-by-date d-flex align-items-center mr-15">
                    <p>Sort by</p>
                    <form action="#" method="get">
                      <select name="select" id="sortBydate">
                        <option value="value">Date</option>
                        <option value="value">Newest</option>
                        <option value="value">Popular</option>
                      </select>
                    </form>
                  </div>
                  <div className="view-product d-flex align-items-center">
                    <p>View</p>
                    <form action="#" method="get">
                      <select name="select" id="viewProduct">
                        <option value="value">12</option>
                        <option value="value">24</option>
                        <option value="value">48</option>
                        <option value="value">96</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Product Area */}
            <Product />
            {products.map((value, key) => {
              return <Product />
            })}
          </div>
          <div className="row">
            <div className="col-12">
              {/* Pagination */}
              <nav aria-label="navigation">
                <ul className="pagination justify-content-end mt-50">
                  <li className="page-item active"><a className="page-link" href="#">01.</a></li>
                  <li className="page-item"><a className="page-link" href="#">02.</a></li>
                  <li className="page-item"><a className="page-link" href="#">03.</a></li>
                  <li className="page-item"><a className="page-link" href="#">04.</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      ]
    );
  }
}

const mapStateToProps = state => (
  {
    status: state.productReducer.status,
    products: state.productReducer.productList
  });

const mapDispatchToProps = dispatch => (
  {
    fetchProductList: () => dispatch(fetchProductList())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ShowProducts)
