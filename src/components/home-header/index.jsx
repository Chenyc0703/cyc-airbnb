import React, { memo } from 'react'
import {HomeHeaderWrapper} from './style'
const HomeHeader = memo((props) => {
  const { title,subtitle } = props
  return (
    <>
    <HomeHeaderWrapper>
     <h2>{title}</h2>
     { subtitle && <div className='subtitle'>{subtitle}</div> }
    </HomeHeaderWrapper>
    </>
  )
})

export default HomeHeader