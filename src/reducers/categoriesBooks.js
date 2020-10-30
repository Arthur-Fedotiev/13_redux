import {categories} from "../books"
import {arrToMap} from "../utils"

const defaultState = arrToMap(categories)

export default (state = defaultState, action) => {
  return state
}
