import React, { memo } from 'react'
import HomeHeader from '@/components/home-header'
import HomeRooms from '@/components/home-rooms'
import { HomeSection } from './style'
import HomeFooter from '@/components/home-footer'

const HomeSectionV1 = memo((props) => {
  const {itemData} = props
  return (
    <>
      <HomeSection>
        <div className='content'>
          <HomeHeader title={itemData.title}  />
          <HomeRooms  roomList={itemData.list}/>
          <HomeFooter />
        </div>
      </HomeSection>
    </>
  )
})

export default HomeSectionV1