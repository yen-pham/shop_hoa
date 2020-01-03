import React, { Component } from 'react';

class TableCategories extends Component {
    render() {
        return (
            <section id="main-content">
            <section className="wrapper">
              <div className="row">
                <div className="col-md-12 mt">
                  <div className="content-panel">
                    <h4><i className="fa fa-angle-right" /> Categories Table</h4><hr /><table className="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
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

export default TableCategories;