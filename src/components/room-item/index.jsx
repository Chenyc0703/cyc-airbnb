import React, { memo } from 'react'
import {RoomItemWrapper} from './style'
import Rating from '@mui/material/Rating';
const RoomItem = memo((props) => {
  const { HomeItem , itemWidth = "25%" } = props
  // console.log(HomeItem);
  return (
    <>
    <RoomItemWrapper itemWidth={itemWidth}>
      <div className='inner'>
        {/* <div className='cover'>
          <img src={HomeItem.picture_url} alt="" />
        </div> */}
        <div className='cover'>
          <img src={HomeItem.picture_url} alt="" />
        </div>


        
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