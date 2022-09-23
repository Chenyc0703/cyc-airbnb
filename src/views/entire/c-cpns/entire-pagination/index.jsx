import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import {EntirePaginationWrapper} from './style'
import { useDispatch } from 'react-redux';
import { fetchRoomsListAction } from '@/store/entire/createActions';
const EntirePagination = memo((props) => {

  const {totalCount,currentPage} = props
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch  = useDispatch()

  const pageChangeHandle = (event, pageCount) =>{
    window.scrollTo(0, 0)
    dispatch(fetchRoomsListAction(pageCount))
  }


  return (
    <>
      <EntirePaginationWrapper>
        <div className='pagination'>
          <Pagination count={totalPage} onChange={pageChangeHandle} />
        </div>
        <div className='pagination' >
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
        </div>
      </EntirePaginationWrapper>
    </>
  )
})

export default EntirePagination