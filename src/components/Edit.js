import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
// import React, { Component } from 'react';
import { Card, Icon, Image,Button } from 'semantic-ui-react';
import { Redirect,Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import a1 from '../images/rsz_p1.jpg';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({book:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_year, publisher } = this.state.book;

    axios.put('/api/book/'+this.props.match.params.id, { isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT PATIENT DETAILS
            </h3>
          </div>
          <div>
          <Card >
    <Image src={a1} />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
      Name:Daniel
      <br/>
      Age:20
      <br/>
      Blood Group:AB+
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Last Visited: 10/10/2017
        <br/>
        
      </a>
    </Card.Content>
  </Card>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.book._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Patient List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">ID:</label>
                <input type="text" class="form-control" name="isbn" value={this.state.book.isbn} onChange={this.onChange} placeholder="ID" />
              </div>
              <div class="form-group">
                <label for="title">Information:</label>
                <input type="text" class="form-control" name="title" value={this.state.book.title} onChange={this.onChange} placeholder="Information" />
              </div>
              <div class="form-group">
                <label for="author">Name:</label>
                <input type="text" class="form-control" name="author" value={this.state.book.author} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="description">Prescription:</label>
                <input type="text" class="form-control" name="description" value={this.state.book.description} onChange={this.onChange} placeholder="Prescription" />
              </div>
              <div class="form-group">
                <label for="published_date">Last Visited:</label>
                <input type="number" class="form-control" name="published_year" value={this.state.book.published_year} onChange={this.onChange} placeholder="Last Visited " />
              </div>
              <div class="form-group">
                <label for="publisher">Basic Details:</label>
                <input type="text" class="form-control" name="publisher" value={this.state.book.publisher} onChange={this.onChange} placeholder="Details" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default Edit;
