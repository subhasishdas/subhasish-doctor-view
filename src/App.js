import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Icon, Image,Button } from 'semantic-ui-react';
import { Redirect,Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { Carousel } from 'react-responsive-carousel';
import a1 from './images/rsz_2aboutpic4.jpg';
import a2 from './images/rsz_1aboutpic5.jpg';
import a3 from './images/rsz_aboutpic3.jpg';
import a4 from './images/rsz_aboutpic6.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
          <div className="Car">
      <Carousel autoPlay infiniteLoop='true' width='100%' showThumbs='false' >
              <div>
                  <img src={a1} />
                  <p className="Car">Legend 1</p>
              </div>
              <div>
                  <img src={a2} />
                  <p className="Car">Legend 2</p>
              </div>
              <div>
                  <img src={a3} />
                  <p className="Car">Legend 3</p>
              </div>
              <div>
                  <img src={a4} />
                  <p className="Car">Legend 4</p>
              </div>
          </Carousel>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Patient</Link></h4>

            <div>
            <Card.Group itemsPerRow={3}>
            {this.state.books.map(book =>

              <Card >
                  <Image src={a1} />
                  <Card.Content>
                    <Card.Header>{book.author}</Card.Header>
                    <Card.Meta>{book.isbn}</Card.Meta>
                    <Card.Description>
                    Name:{book.author}
                    <br/>
                    Basic Details:{book.publisher}
                    <br/>
                    Information:{book.title}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      Last Visited: {book.published_year}
                      <br/>
                      <Link to={`/show/${book._id}`} class="btn btn-success">Edit/Delete</Link>&nbsp;

                    </a>
                  </Card.Content>
                </Card>

                )}
                </Card.Group>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
