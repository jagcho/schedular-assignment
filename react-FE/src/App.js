
import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Timepanel from './components/Timepanel';
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  const [value, setValue] = useState(new Date());

const onChange =value=>{
  setValue(value);
}
// function getTime(data){
//   console.log(data)
// }

  return (
    <div className='Calender'>
      <Timepanel ></Timepanel>
      <Calendar onChange={onChange} value={value} />
      
      
     
    </div>
  );
}

export default App;

