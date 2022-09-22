import classNames from 'classnames'
import React, { memo,useState } from 'react'
import {HomeTabWrapper} from './style'
import ScrollView from '@/base-ui/scroll-view'

const HomeTabs = memo((props) => {
  const {names,itemClicks} = props
  const [currentIndex,setCurrentIndex] = useState(0)
  // console.log(names);
  const ItemClick = (item,index)=>{
    // console.log(item,index)
    // console.log("object");
    setCurrentIndex(index)
    itemClicks(item)
  }

  return (
    <>
      <HomeTabWrapper>
       <ScrollView>
       {
          names?.map((item,index)=>{
            return <div 
                    className={classNames('item',{active:index===currentIndex})} 
                    onClick={(e)=>ItemClick(item,index)}
                    key={item}>{item}
                  </div>
          })
        }
       </ScrollView>

      </HomeTabWrapper>
    </>
  )
})

export default HomeTabs