import React from "react"
import "./style.css"
import BooksList from "./components/BooksList"

const App = props => (
  <div className="container">
    <h1>Books</h1>
    <div className="row">
      <div className="col-sm-3">
        <h2>Categories</h2>
      </div>
      <div className="col-sm-9">
        <BooksList />
      </div>
    </div>
  </div>
)

export default App
