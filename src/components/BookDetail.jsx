import React, { Component } from 'react';
import { get } from '../BooksAPI';

class BookDetail extends Component {
  state = {
    book: [],
  };
  componentDidMount() {
    get(this.props.match.params.id)
      .then((res) => res)
      .then((book) => {
        this.setState({ book });
      });
  }
  render() {
    const { book } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>{book.title}</h1>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetail;
