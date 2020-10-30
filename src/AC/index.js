import C from "../contants"

export const selectBookAction = id => ({
  type: C.SELECT_BOOK,
  payload: {id},
})
export const selectCatAction = id => ({
  type: C.SELECT_CAT,
  payload: {id},
})
