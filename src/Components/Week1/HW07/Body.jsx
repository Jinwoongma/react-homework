import React from 'react'
import MsgBox from './MsgBox'
import Form from './Form'
import FoodGuideline from './FoodGuideline'

const Body = () => {
  return (
    <div className='body'>
      <MsgBox/>
      <Form/>
      <FoodGuideline/>
    </div>
  )
}

export default Body