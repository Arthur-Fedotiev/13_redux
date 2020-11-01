import React, {lazy, Suspense} from "react"

import {Router} from "@reach/router"
import HomePage from "./components/HomePage"
import {Header} from "./components/Header"
import Spinner from "./components/Spinner"
import "./style.css"

const BooksForm = lazy(() => import("./components/BooksForm"))

const App = props => (
  <Suspense fallback={<Spinner />}>
    <div className="container">
      <Header />
      <Router>
        <HomePage path="/" />
        <BooksForm path="/new" />
      </Router>
    </div>
  </Suspense>
)

export default App
