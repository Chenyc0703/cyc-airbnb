import React, { memo, useEffect } from 'react'
import {EntireWrapper} from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'

import FilterData from '@/assets/data/filter_data.json'
import { fetchRoomsListAction } from '@/store/entire/createActions'
import { useDispatch, useSelector } from 'react-redux'


const Entire = memo(() => {

  const {currentPage,totalCount,entireList} = useSelector((store)=>({
    currentPage:store.entire.currentPage,
    totalCount:store.entire.totalCount,
    entireList:store.entire.entireList,
  }))


  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRoomsListAction())
    console.log(entireList)
  },[])


  return (
    <>
      <EntireWrapper>
        <div>
          <EntireFilter FilterData={FilterData} />
          <EntireRooms  entireList={entireList} totalCount={totalCount} />
          <EntirePagination totalCount={totalCount} currentPage={currentPage} />
        </div>
      </EntireWrapper>
    </>
  )
})

export default Entire