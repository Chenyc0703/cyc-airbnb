import React, { memo,useRef,useEffect,useState } from 'react'
import {ScrollWrapper} from './style'

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  

  const [LeftShow,setLeftShow] = useState(false)
  const [RightShow,setRightShow] = useState(false)
  const [TabIndex,setTabIndex] = useState(0)
  const TabRef = useRef()
  const Item = useRef()


  useEffect(()=>{
    const scrollWidth = TabRef.current.scrollWidth
    const clientWidth = TabRef.current.clientWidth
    Item.current = scrollWidth-clientWidth
    // console.log(scrollWidth,clientWidth)
    if(Item.current>0){
      setRightShow(true)
    }
  },[props.children])
  // transform:translate() ;
// console.log(props.children);
  const  DisplacementTransitions=(isRight) =>{
    
      console.log("1");
      // console.log(isRight);
      const newIndex = isRight ? TabIndex + 1: TabIndex - 1
      // console.log(newIndex);
      // console.log(newIndex)
      const newEl =  TabRef.current.children[newIndex]
      // console.log(newEl);
      const newOffsetLeft = newEl.offsetLeft
      // console.log(newOffsetLeft);
      TabRef.current.style.transform = `translate(-${newOffsetLeft}px)`
      setTabIndex(newIndex)
      // 是否继续显示右侧的按钮
      setRightShow(Item.current > newOffsetLeft)
      setLeftShow(newOffsetLeft > 0)
    
  }
  
  const LeftClick  =(isRight)=>{
    console.log("LeftClick");
    DisplacementTransitions(isRight)
  } 

  const RightClick  =(isRight)=>{
    console.log("RightClick");
    DisplacementTransitions(isRight)

    
    
    // console.log(TabRef.current.children[1])
  }

  return (
    <>
      <ScrollWrapper>
        <div>
          { LeftShow && (
          <div className='control left' onClick={e => LeftClick(false)}>
            <IconArrowLeft/>
          </div>
        ) }
        { RightShow && (
          <div className='control right' onClick={e => RightClick(true)}>
            <IconArrowRight/>
          </div>
        ) }
      <div className='scroll'>
        <div className='scroll-content' ref={TabRef}>
          {props.children}
        </div>
      </div>
        </div>
      </ScrollWrapper>
    </>
  )
})

export default ScrollView