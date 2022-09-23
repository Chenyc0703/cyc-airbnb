import React, { memo, useEffect } from 'react'
import {DetailWrapper} from './style'
import DetailInfos from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { useDispatch, useSelector } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/main'


const Detail = memo(() => {

  const {roomList} = useSelector((store)=>({
    roomList:store.detail.roomList
  }))
  const dispatch = useDispatch()
  useEffect(()=>{
    
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  },[])
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