import React from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import Book from "./Book"

const BooksList = ({books}) => {
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

BooksList.propTypes = {
  books: PropTypes.array,
}

function mapStateToProps({books}) {
  return {
    books,
  }
}

export default connect(mapStateToProps)(BooksList)
