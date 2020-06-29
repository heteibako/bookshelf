import React, { Component } from 'react';
import { getAll } from '../BooksAPI';
import BookItem from './BookItem';

export default class BooksPage extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    getAll()
      .then((res) => res)
      .then((booksList) => {
        this.setState({ books: booksList });
      });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h3>Currently Reading</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {books
            .filter((book) => book.shelf === 'currentlyReading')
            .map((book) => (
              <div className="col-md-3 col-lg-3 col-sm-6" key={book.id}>
                <BookItem
                  title={book.title}
                  coverImg={book.imageLinks.thumbnail}
                  description={book.description}
                  bookLink={book.id}
                />
              </div>
            ))}
        </div>

        <div className="row">
          <div className="col">
            <h3>Want to read</h3>
            <hr />
          </div>
        </div>
        <div className="row" style={{ minHeight: '30vh' }}>
          {books
            .filter((book) => book.shelf === 'wantToRead')
            .map((book) => (
              <div className="col-md-3 col-sm-6" key={book.id}>
                <BookItem
                  title={book.title}
                  coverImg={book.imageLinks.thumbnail}
                  description={book.description}
                  bookLink={book.id}
                />
              </div>
            ))}
        </div>
        <div className="row">
          <div className="col">
            <h3>Read</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {books
            .filter((book) => book.shelf === 'read')
            .map((book) => (
              <div className="col-md-3 col-sm-6" key={book.id}>
                <BookItem
                  title={book.title}
                  coverImg={book.imageLinks.thumbnail}
                  description={book.description}
                  bookLink={book.id}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
