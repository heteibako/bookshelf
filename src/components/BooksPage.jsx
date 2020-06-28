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
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <div className="col-4" key={book.id}>
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
