import React, { memo,useCallback,useState } from 'react'
import { HomeSection } from './style'

import HomeHeader from '@/components/home-header'
import HomeRooms from '@/components/home-rooms'
import HomeTabs from '@/components/home-tabs'
import HomeFooter from '@/components/home-footer'


const HomeSectionV2 = memo((props) => {
  const {itemData} = props
  // console.log(itemData);
  const names = itemData.dest_address?.map(item=>item.name)
  const initialName = Object.keys(itemData.dest_list)[0]
  // console.log(initialName)
  const [name,setName] = useState(initialName)
  const itemClick = useCallback((item,index)=>{
    setName(item)
  },[])

  return (
    <>
      <HomeSection>
      <div className='content'>
      <HomeHeader title={itemData.title} subtitle={itemData.subtitle} />
      <HomeTabs  itemClicks={itemClick} names={names}  />
      <HomeRooms roomList={itemData.dest_list?.[name]} itemWidth = "33.3333%" />
      <HomeFooter ItemName={name} />
      </div>
      </HomeSection>
    </>
  )
})

export default HomeSectionV2