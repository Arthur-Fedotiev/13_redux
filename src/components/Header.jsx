import React from "react"
import {Link} from "@reach/router"

export const Header = () => {
  return (
    <nav className="navbar-expand-lg  bg-light my-5">
      <div class="navbar-nav">
        <Link className="nav-link nav-item" to="/">
          HOME
        </Link>

        <Link className="nav-link nav-item" to="/new">
          Add Book
        </Link>
      </div>
    </nav>
  )
}
