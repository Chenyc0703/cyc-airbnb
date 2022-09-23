import {
  CURRENT_PAGE,
  TOTAL_COUNT,
  ENTIRE_LIST,
  IS_LOADING} from './constants.js'

const initialState = {
  currentPage: 0,
  totalCount:0,
  entireList:[],
  isLoading:false
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
    case IS_LOADING : 
      return {...state, isLoading:action.data}
    default:
      return state
  }
}


export default reducer
