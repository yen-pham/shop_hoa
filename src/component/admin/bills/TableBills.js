import React, { Component, Fragment } from 'react';
import { hoa, getProductsa } from '../../../connectFirebase/Connect'
import { Link } from 'react-router-dom';
var bills;
class TableBills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers = () => {
    var UserLIst = [];
    var i = 0;
    hoa.ref('users').on('value', (user) => {
      user.forEach(element => {
        UserLIst[i] = element.val();
        UserLIst[i].key = element.key;
        i++;
      });
      this.setState({ users: UserLIst });
    });

  }

  render() {
    var i=0;
    bills = this.state.users ? this.state.users.map((value, key) => {
      console.log(value.bills['-LyHVJOo7C24u_FB00jk']);
    Object.keys(value.bills).map((val,k) =>(
      // console.log(value.bills[val]);}
        (<tr>
          <td>{i++}</td>
          <td>{value.bills[val].fullname}</td>
          <td>{value.bills[val].email}</td>
          <td>{value.bills[val].address}</td>
          <td>{value.bills[val].phone}</td>
          <td>{value.bills[val].total}</td>
          <td><img width='100px' height='100px' src={value.linkimg} /></td>
          <td><Link>Edit</Link> <br /><Link>Delete</Link> <br/><Link to='/admin'>Detail</Link></td>
        </tr>)
      ))
    }) : <Fragment></Fragment>;
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
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Adress</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   {bills}
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

export default TableBills;