import RoomItem from '@/components/room-item'
import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {EntireRoomWrapper} from './style'
import { changeRoomListAction } from '@/store/detail'
import { useNavigate } from 'react-router-dom'
const EntireRooms = memo((props) => {
  const {isLoading} = useSelector((store)=>({
    isLoading:store.entire.isLoading
  }))

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const NavigateToDetail = useCallback((itemData) =>{
    // console.log(itemData);
    dispatch(changeRoomListAction(itemData))
    navigate('/detail')
  },[navigate, dispatch])

  const {entireList,totalCount} = props
  return (
    <>
      <EntireRoomWrapper>
        <div className='content'>
          <h1>{totalCount}多处住宿</h1>
          <div className='rooms'>
            {
              entireList.list && entireList.list.map((item,index)=>{
                return <RoomItem 
                          key={item._id} 
                          itemWidth="20%" 
                          HomeItem={item}
                          ItemToDetail={NavigateToDetail} />
              })
            }
          </div>
        </div>
        {
          isLoading && <div className='cover'></div>
        }
      </EntireRoomWrapper>
    </>
  )
})

export default EntireRooms