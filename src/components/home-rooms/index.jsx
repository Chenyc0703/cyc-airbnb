import React, { memo } from 'react'
import RoomItem from '../room-item'
import {HomeRoomsWrapper} from './style'
const HomeRooms = memo((props) => {
const {roomList,itemWidth } = props
// console.log(roomList)
  return (
    <>
    <HomeRoomsWrapper>
    {
      roomList?.slice(0,8).map((item,index)=>{
        return <RoomItem key={item.id} HomeItem={item} itemWidth={itemWidth}/>
      })
    }
    </HomeRoomsWrapper>
    </>
  )
})

export default HomeRooms