import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

import { Card, Icon, Image,Button } from 'semantic-ui-react';
import { Redirect,Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import a1 from '../images/rsz_p1.jpg';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/book/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.book.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Patient List</Link></h4>
          </div>
          <div>
            <Card >
                <Image src={a1} />
                <Card.Content>
                  <Card.Header>{this.state.book.author}</Card.Header>
                  <Card.Meta>{this.state.book.isbn}</Card.Meta>
                  <Card.Description>
                  Name:{this.state.book.author}
                  <br/>
                  Basic Details:{this.state.book.publisher}
                  <br/>
                  Blood Group:AB+
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    Last Visited: {this.state.book.published_year}
                    <br/>
                    <Link to={`/edit/${this.state.book._id}`} class="btn btn-success">Edit</Link>&nbsp;
                    <button onClick={this.delete.bind(this, this.state.book._id)} class="btn btn-danger">Delete</button>
                  </a>
                </Card.Content>
              </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
