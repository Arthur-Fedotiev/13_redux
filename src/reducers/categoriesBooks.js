import {categories} from "../books"
import {arrToMap} from "../utils"
import C from "../contants"

const initialState = {
  categories: arrToMap(categories),
  selectedCat: null,
}

export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case C.SELECT_CAT:
      return {...state, selectedCat: payload.id}
    default:
      return state
  }
}
