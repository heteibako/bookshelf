import React, { Component } from 'react';
import { search } from '../BooksAPI';
import BookItem from './BookItem';

class SearchPage extends Component {
  state = {
    books: [],
    query: '',
  };

  handleOnChange = async (e) => {
    try {
      const query = e.target.value;
      this.setState({ query: query.trim() });
      const res = await search(query);
      if (res.error) {
        this.setState({ books: [] });
      } else {
        this.setState({ books: res });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { books, query } = this.state;
    const showingBooks =
      query === ''
        ? books
        : books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
    return (
      <>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search books"
            value={query}
            onChange={this.handleOnChange}
          />
        </div>
        <div className="row">
          {showingBooks &&
            showingBooks.map((book) => (
              <div className="col-md-4">
                <BookItem
                  title={book.title}
                  description={book.description}
                  coverImg={book.imageLinks.thumbnail}
                  bookLink={book.id}
                />
              </div>
            ))}
        </div>
      </>
    );
  }
}
export default SearchPage;
