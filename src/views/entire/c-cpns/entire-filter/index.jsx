import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'
import {EntireFilterWrapper} from './style'

const EntireFilter = memo((props) => {

  const [selectItems, setSelectItems] = useState([])

  const {FilterData} = props
  
  const FilterItemClick = (item,index)=>{
    const newItems = [...selectItems]
    if(selectItems.includes(item)){
      const index = newItems.findIndex(name=>item===name)
      newItems.splice(index,1)
    }else {
      newItems.push(item)
    }
    setSelectItems(newItems)
  }



  return (
    <>
      <EntireFilterWrapper>
          <div className='list'>
            {
              FilterData && FilterData.map((item,index)=>{
                return <div 
                          onClick={()=>FilterItemClick(item,index)} 
                          className={classNames('item',{active:selectItems.includes(item)})}

                          // className="item"
                          key={index}>{item}
                        </div>
              })
            }
          </div>
      </EntireFilterWrapper>
    </>
  )
})

export default EntireFilter