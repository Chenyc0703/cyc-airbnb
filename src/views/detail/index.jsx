import React, { memo } from 'react'
import {DetailWrapper} from './style'
import DetailInfos from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { useSelector } from 'react-redux'


const Detail = memo(() => {

  const {roomList} = useSelector((store)=>({
    roomList:store.detail.roomList
  }))

  console.log(roomList);


  return (
    <>
      <DetailWrapper>
        <DetailPictures roomList={roomList} />
        <DetailInfos />
      </DetailWrapper>
    </>
  )
})

export default Detail