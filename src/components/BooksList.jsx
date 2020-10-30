import React from "react"
import {useSelector} from "react-redux"
import {createSelector} from "reselect"
import Book from "./Book"

const booksSelector = createSelector(
  state => state.books,
  state => state.cats,
  (books, cats) =>
    cats.selectedCat
      ? books.filter(book => book.categoryId === cats.selectedCat)
      : books,
)

const BooksList = () => {
  const books = useSelector(booksSelector)

  return (
    <ul className="list-group">
      {books.map(book => (
        <Book key={book._id} book={book} />
      ))}
    </ul>
  )
}

BooksList.defaultProps = {
  books: [],
}

export default BooksList
