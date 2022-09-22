import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import {HomeFooterWrapper} from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
const HomeFooter = memo((props) => {
  const {ItemName} = props
  // console.log(ItemName);

    /** 事件处理的逻辑 */
    const navigate = useNavigate()
    function moreClickHandle() {
      navigate("/entire")
    }
  
  return (
    <>
      <HomeFooterWrapper color={ItemName ? "#00848A": "#000"}>
        {
          <div className='info' onClick={moreClickHandle}>
            <span>{ItemName?`查看更多${ItemName}房源`:"查看全部"}</span>
            <IconMoreArrow/>
          </div>
        }
      </HomeFooterWrapper>
    </>
  )
})

export default HomeFooter