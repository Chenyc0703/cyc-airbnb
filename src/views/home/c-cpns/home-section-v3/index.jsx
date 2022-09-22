import PropTypes from 'prop-types'
import React, { memo } from 'react'

import HomeHeader from '@/components/home-header'
import { HomeSection } from './style'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import HomeFooter from '@/components/home-footer'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <HomeSection>
      <div className='content'>
      <HomeHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem HomeItem={item} itemWidth="20%" key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <HomeFooter ItemName="plus"/>
      </div>
    </HomeSection>
  )
})

export default HomeSectionV3