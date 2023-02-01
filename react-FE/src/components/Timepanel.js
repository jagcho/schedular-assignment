import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import '../App';

function Timepanel() {
  const [time,setTime] =useState('')
  // function sendTime(e){
   
  //   time=e
  //   props.getData(time)
  // }
  return (
    <div className='timepanel'>
      <Button className='mx-4 my-3' >10:00 Am</Button><br/>
      <Button className='mx-4 my-3'   >11:00 Am</Button><br/>
      <Button className='mx-4 my-3'  >10:00 pm</Button><br/>
      <Button className='mx-4 my-3'  >11:00 pm</Button><br/>
    </div>
  )
}

export default Timepanel