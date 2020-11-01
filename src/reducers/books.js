import {defaultBooks} from "../books"
import C from "../contants"

export default (state = defaultBooks, action) => {
  const {type, payload} = action
  switch (type) {
    case C.ADD_BOOK:
      return [...state, payload]
    default:
      return state
  }
}
