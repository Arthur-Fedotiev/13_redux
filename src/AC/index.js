import C from "../contants"

export const selectBookAction = id => ({
  type: C.SELECT_BOOK,
  payload: {id},
})
