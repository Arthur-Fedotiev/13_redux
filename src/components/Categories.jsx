import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {mapToArr} from "../utils"
import C from "../contants"

function useCats() {
  const dispatch = useDispatch()
  const cats = mapToArr(useSelector(state => state.cats.categories))
  const selectCat = id => dispatch({type: C.SELECT_CAT, payload: {id}})
  return {cats, selectCat}
}

const Categories = () => {
  const {cats, selectCat} = useCats()
  return (
    <ul className="list-group">
      <li onClick={() => selectCat(null)} className="list-group-item">
        All Books
      </li>
      {cats.map(cat => (
        <li
          onClick={() => selectCat(cat._id)}
          key={cat._id}
          className="list-group-item"
        >
          {cat.title}
        </li>
      ))}
    </ul>
  )
}

export default Categories
