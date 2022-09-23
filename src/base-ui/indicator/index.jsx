
// const Demo = memo(() => {
//   const list = ['设定方','哪个服','士大夫','水电费','双方各','盛大开']

//   const [currentIndex,setCurrentIndex] = useState(0)
//   const btnRef = useRef()

//   useEffect(()=>{
//     const selectItemEl = btnRef.current.children[currentIndex]
//     const itemLeft = selectItemEl.offsetLeft
//     const itemWidth = selectItemEl.clientWidth

//     const contentWidth = btnRef.current.clientWidth
//     const contentScroll = btnRef.current.scrollWidth

//     // 3.获取selectIndex要滚动的距离
//     let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
//     // 4.特殊情况的处理
//     if (distance < 0) distance = 0 // 左边的特殊情况处理
//     const totalDistance = contentScroll - contentWidth
//     if (distance > totalDistance) distance = totalDistance // 右边的特殊情况处理

//     // 5.改变位置即可
//     btnRef.current.style.transform = `translate(${-distance}px)`


//     // const btnRefScroll = btnRef.current. 
//     // console.log(btnRefWidth)
//     // console.log(selectItemOffLeft)

//     // console.log(selectItemWidth)
//     // console.log(selectItemEl);
//   },[currentIndex])



//   const btnClick = (select) =>{
//     let newIndex = select?currentIndex+1:currentIndex-1
//     if(newIndex>list.length-1) newIndex =0
//     if(newIndex<0) newIndex = list.length-1
//     setCurrentIndex(newIndex)
//   }

//   // 移动设置
//   const setMove = () =>{

//   }

//   return (
//     <DemoWrapper>
//       <button onClick={()=>btnClick(false)}>上一个</button>
//       <button onClick={()=>btnClick(true)}>下一个</button>
//         <div className='list' ref={btnRef}>
//           {
//             list.map((item,index)=>{
//               return <button className='item' key={index}>{item}</button>
//             })
//           }
//         </div>
//     </DemoWrapper>
//   )
// })










import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    // 1.获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    // 2.content的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth
    // 3.获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    // 4.特殊情况的处理
    if (distance < 0) distance = 0 // 左边的特殊情况处理
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance // 右边的特殊情况处理

    // 5.改变位置即可
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator