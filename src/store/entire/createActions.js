import {
  CURRENT_PAGE,
  TOTAL_COUNT,
  ENTIRE_LIST} from './constants'
import { getEntireRoomsList } from '@/services'

export const CurrentPageAction = (data)=>({
  type:CURRENT_PAGE,
  data
})

export const TotalCountAction = (data)=>({
  type:TOTAL_COUNT,
  data
})

export const EntireListAction = (data)=>({
  type:ENTIRE_LIST,
  data
})


export const fetchRoomsListAction = (size=0) =>{
 return async (dispatch,getState)=>{
    // const currentPage = getState().entire.currentPage
    dispatch(CurrentPageAction(size))
    const res = await getEntireRoomsList(size,20)
    // console.log(res);
    dispatch(TotalCountAction(res.totalCount))
    dispatch(EntireListAction(res))
  }
}