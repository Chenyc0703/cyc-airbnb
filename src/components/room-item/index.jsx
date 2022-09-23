import React, { memo, useRef, useState } from 'react'
import {RoomItemWrapper} from './style'
import {Carousel} from 'antd'
import Rating from '@mui/material/Rating';
import classNames from 'classnames'; 
import Indicator from '@/base-ui/indicator'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
const RoomItem = memo((props) => {
  const { HomeItem , itemWidth = "25%",ItemToDetail } = props

  const [selectIndex,setSelectIndex] = useState(0)
  const swiperRef= useRef()

  // console.log(HomeItem);
  const btnClick =(e,select=true) =>{
    e.stopPropagation()
    if(select) {
      // console.log("+1")
      swiperRef.current.next()
    }else {
      // console.log("-1")
      swiperRef.current.prev()
    }
    let newIndex = select?selectIndex+1:selectIndex-1
    if(newIndex>HomeItem?.picture_urls.length-1) newIndex =0
    if(newIndex<0) newIndex = HomeItem?.picture_urls.length-1
    setSelectIndex(newIndex)
  }
  
  const innerClick =  () =>{
    if(ItemToDetail)ItemToDetail(HomeItem)
  }
  


  return (
    <>
    <RoomItemWrapper itemWidth={itemWidth}>
      <div className='inner' onClick={innerClick}>
        {
         !HomeItem.picture_urls ? <div className='cover'>
          <img src={HomeItem.picture_url} alt="" />
        </div> :
       <div className='slider'>
        <div className='control'>
          <div className="btn left" onClick={(e)=>btnClick(e,false)}>
              <IconArrowLeft width="30" height="30"/>
          </div>
          <div className="btn right" onClick={(e)=>btnClick(e)} >
              <IconArrowRight width="30" height="30"/>
          </div>
         </div>
         <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            HomeItem?.picture_urls?.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames("dot", { active: selectIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
       <Carousel dots={false} ref={swiperRef}>
            {
              HomeItem?.picture_urls.map((item,index)=>{
                return (
                  <div className='cover' key={index}>
                    <img  src={item} alt="" />
                  </div>
                )
              })
            }
        </Carousel>
       </div>
        }


        
        <div className='desc'>
          {HomeItem.verify_info.messages.join("·")}
        </div>
        <div className='name'>{HomeItem.name}</div>
        <div className='price'>
          {`¥${HomeItem.price}/晚`}
        </div>
        <div className='bottom'>
            <Rating 
              value={HomeItem.star_rating ?? 5}
              precision={0.1}
              readOnly 
              sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
            />
            <span className='count'>{HomeItem.reviews_count}</span>
            {
              HomeItem.bottom_info && <span className='extra'>·{HomeItem.bottom_info?.content}</span>
            }
        </div>

      </div>
    </RoomItemWrapper>
    </>
  )
})

export default RoomItem