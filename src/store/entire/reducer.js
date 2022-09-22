import {
  CURRENT_PAGE,
  TOTAL_COUNT,
  ENTIRE_LIST} from './constants.js'

const initialState = {
  currentPage: 0,
  totalCount:0,
  entireList:[]
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case CURRENT_PAGE : 
    // console.log("first")
      return {...state, currentPage:action.data}
    case TOTAL_COUNT : 
      return {...state, totalCount:action.data}
    case ENTIRE_LIST : 
      return {...state, entireList:action.data}
    default:
      return state
  }
}


export default reducer
