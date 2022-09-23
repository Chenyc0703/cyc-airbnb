import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'
import {HomeWrapper} from './style'
import { isEmptyO } from '@/utils'
// 请求
import { fetchHomeDataAction } from '@/store/home' 
import { changeHeaderConfigAction } from '@/store/main'

const Home = memo(() => {

  const { longforInfo, plusInfo, goodPriceInfo,highScoreInfo,discountInfo,recommendInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    plusInfo:state.home.plusInfo,
    longforInfo:state.home.longforInfo,
  }), shallowEqual)
  

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  },[dispatch])


  
  
  return (
    <>
    <HomeWrapper>
      <HomeBanner/>
      {/* 热门目的地 */}
      {isEmptyO(discountInfo)&&<HomeSectionV2  itemData={discountInfo}/>}
      {isEmptyO(recommendInfo)&&<HomeSectionV2  itemData={recommendInfo}/>}
      { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/> }
      {isEmptyO(goodPriceInfo)&&<HomeSectionV1 itemData={goodPriceInfo}/>}
      {isEmptyO(highScoreInfo)&&<HomeSectionV1 itemData={highScoreInfo}/>}
      { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
    </HomeWrapper>
    </>
  )
})

export default Home