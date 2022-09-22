import RoomItem from '@/components/room-item'
import React, { memo } from 'react'
import {EntireRoomWrapper} from './style'

const EntireRooms = memo((props) => {
  const {entireList,totalCount} = props
  return (
    <>
      <EntireRoomWrapper>
        <div className='content'>
          <h1>{totalCount}多处住宿</h1>
          <div className='rooms'>
            {
              entireList.list && entireList.list.map((item,index)=>{
                return <RoomItem key={index} itemWidth="20%" HomeItem={item} />
              })
            }
          </div>
        </div>
      </EntireRoomWrapper>
    </>
  )
})

export default EntireRooms