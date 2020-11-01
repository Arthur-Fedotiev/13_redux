import React, {memo} from "react"
import BooksList from "./BooksList"
import Categories from "./Categories"

export const HomePage = () => {
  return (
    <>
      <h1>Books</h1>
      <div className="row">
        <div className="col-sm-3">
          <h2>Categories</h2>
          <Categories />
        </div>
        <div className="col-sm-9">
          <BooksList />
        </div>
      </div>
    </>
  )
}
export default memo(HomePage)
