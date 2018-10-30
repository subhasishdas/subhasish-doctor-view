import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Icon, Image,Button } from 'semantic-ui-react';
import { Redirect,Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import a1 from '../images/rsz_p1.jpg';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              PATIENT LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Patient</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.author}</td>
                    <td>{book.title}</td>

                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

<dl>
  <dt>ID:</dt>
  <dd>{this.state.book.isbn}</dd>
  <dt>Name:</dt>
  <dd>{this.state.book.author}</dd>
  <dt>Prescription:</dt>
  <dd>{this.state.book.description}</dd>
  <dt>LastVisited:</dt>
  <dd>{this.state.book.published_year}</dd>
  <dt>BasicDetails:</dt>
  <dd>{this.state.book.publisher}</dd>
</dl>
<Link to={`/edit/${this.state.book._id}`} class="btn btn-success">Edit</Link>&nbsp;
<button onClick={this.delete.bind(this, this.state.book._id)} class="btn btn-danger">Delete</button>
