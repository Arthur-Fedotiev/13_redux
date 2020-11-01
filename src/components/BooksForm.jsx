import React, {useState} from "react"
import {navigate} from "@reach/router"
import {useDispatch} from "react-redux"
import {generate as id} from "shortid"
import C from "../contants"

const initialData = {
  title: "",
  desc: "",
  categoryId: "0",
}

const BooksForm = () => {
  const [data, setData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const addBook = data =>
    dispatch({type: C.ADD_BOOK, payload: {...data, _id: id()}})

  const handleChange = ({target}) => {
    const {name, value} = target
    setErrors({...errors, [name]: ""})
    setData({...data, [name]: value})
  }

  const validate = data => {
    const errors = {}
    if (!data.title) errors.title = "This field cannot be blank!"
    if (!data.desc.trim()) errors.desc = "This field cannot be blank!"
    if (data.categoryId === "0")
      errors.categoryId = "Please choose category of the book!"
    return errors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errors = validate(data)
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      addBook(data)
      navigate("/")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Book Title</label>
        <input
          value={data.title}
          onChange={handleChange}
          name="title"
          type="text"
          className={`form-control ${errors.title && "is-invalid"}`}
          id="title"
          placeholder="Enter book title"
        />
        {errors.title && (
          <div className="alert alert-warning" role="alert">
            {errors.title}
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="desc">Book desc</label>
        <textarea
          onChange={handleChange}
          value={data.desc}
          name="desc"
          className={`form-control ${errors.desc && "is-invalid"}`}
          id="desc"
          rows="3"
          placeholder="Enter book desc"
        ></textarea>
        {errors.desc && (
          <div className="alert alert-warning" role="alert">
            {errors.desc}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="category">Example select</label>
        <select
          defaultValue={data.categoryId}
          onChange={handleChange}
          className={`form-control ${errors.categoryId && "is-invalid"}`}
          id="category"
          name="categoryId"
        >
          <option value="0">Please choose the category</option>
          <option value="1">Fantastic</option>
          <option value="2">Programming</option>
        </select>
        {errors.categoryId && (
          <div className="alert alert-warning" role="alert">
            {errors.categoryId}
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Add Book
      </button>
    </form>
  )
}

export default BooksForm
